import { octokit } from "./octokit";
import fs from "fs/promises";
import path from "path";
import { prCountQuery, repoIssueQuery, userQuery } from "~~/components/github-activities/github-queries";
import {
  BuilderData,
  BuilderDataMap,
  BuilderGitHubUsernameQueryResponse,
  QueryPRCountResponse,
  RepoIssueQueryResponse,
} from "~~/components/github-activities/github-queries-types";

const OWNER = "BuidlGuidl";
const REPO = "batch8.buidlguidl.com";

// Get the builders directory data
export const getBuildersPages = async (): Promise<string[]> => {
  const buildersDirectory = path.join(process.cwd(), "/app/builders");
  const files = await fs.readdir(buildersDirectory);
  const addresses = files.filter(file => file.startsWith("0x"));
  return addresses;
};

// Get GitHub username for a builder
export const getBuilderGitHubUsername = async (builderAddress: string): Promise<string | null> => {
  try {
    const result = await octokit.graphql<BuilderGitHubUsernameQueryResponse>(userQuery, {
      owner: OWNER,
      name: REPO,
      path: `packages/nextjs/app/builders/${builderAddress}/page.tsx`,
    });

    return result.repository.ref.target.history.nodes.reverse()[0].author.user?.login ?? null;
  } catch (error) {
    console.error(`Error fetching GitHub username for ${builderAddress}:`, error);
    return null;
  }
};

// Get PR data for all builders
export const getBuildersPRData = async (builderDataMap: BuilderDataMap): Promise<BuilderDataMap> => {
  const repoPRs = await octokit.graphql<QueryPRCountResponse>(prCountQuery, {
    owner: OWNER,
    name: REPO,
  });

  const newBuilderDataMap = new Map(builderDataMap);

  for (const [ghUsername, builderData] of builderDataMap.entries()) {
    const builderPRs = repoPRs.repository.pullRequests.nodes.filter(pr => pr.author.login === ghUsername);

    newBuilderDataMap.set(ghUsername, {
      ...builderData,
      pr: {
        openCount: builderPRs.filter(pr => pr.state === "OPEN").length,
        closedCount: builderPRs.filter(pr => pr.state === "CLOSED").length,
        mergedCount: builderPRs.filter(pr => pr.state === "MERGED").length,
      },
    });
  }

  return newBuilderDataMap;
};

export const getBuildersIssueActivities = async (builderDataMap: BuilderDataMap): Promise<BuilderDataMap> => {
  const repoIssues = await octokit.graphql<RepoIssueQueryResponse>(repoIssueQuery, {
    owner: OWNER,
    name: REPO,
  });

  const issuesCommentsAuthors = repoIssues.repository.issues.nodes
    .flatMap(issue => issue.comments.nodes)
    .map(comment => comment.author.login);

  const issuesReactionsAuthors = repoIssues.repository.issues.nodes
    .flatMap(issue => issue.comments.nodes)
    .flatMap(comment => comment.reactions.nodes)
    .map(reaction => reaction.user.login);

  const newBuilderDataMap = new Map(builderDataMap);

  for (const [ghUsername, builderData] of builderDataMap.entries()) {
    newBuilderDataMap.set(ghUsername, {
      ...builderData,
      issue: {
        commentCount: issuesCommentsAuthors.filter(author => author === ghUsername).length,
        reactionCount: issuesReactionsAuthors.filter(author => author === ghUsername).length,
      },
    });
  }

  return newBuilderDataMap;
};

const githubScore = (builderData: BuilderData) => {
  const CLOSED_PR_WEIGHT = 1;
  const OPEN_PR_WEIGHT = 0.5;
  const MERGED_PR_WEIGHT = 2;
  const COMMENTED_ISSUE_WEIGHT = 0.1;
  const REACTION_ISSUE_WEIGHT = 0.05;

  const prScore =
    builderData.pr.closedCount * CLOSED_PR_WEIGHT +
    builderData.pr.openCount * OPEN_PR_WEIGHT +
    builderData.pr.mergedCount * MERGED_PR_WEIGHT;

  const issueScore =
    builderData.issue.commentCount * COMMENTED_ISSUE_WEIGHT + builderData.issue.reactionCount * REACTION_ISSUE_WEIGHT;

  return prScore + issueScore;
};

const getBuildersGitHubScore = (builderDataMap: BuilderDataMap): BuilderDataMap => {
  const newBuilderDataMap = new Map(builderDataMap);

  for (const [ghUsername, builderData] of builderDataMap.entries()) {
    newBuilderDataMap.set(ghUsername, {
      ...builderData,
      githubScore: githubScore(builderData),
    });
  }

  return newBuilderDataMap;
};
export const getBuildersGitHubActivities = async (): Promise<BuilderDataMap> => {
  const buildersAddresses = await getBuildersPages();
  const builderDataMap = new Map<string, BuilderData>();

  // Get GitHub usernames for all builders
  for (const builderAddress of buildersAddresses) {
    const ghUsername = await getBuilderGitHubUsername(builderAddress);
    if (ghUsername) {
      builderDataMap.set(ghUsername, {
        address: builderAddress,
        pr: { openCount: 0, closedCount: 0, mergedCount: 0 },
        issue: { commentCount: 0, reactionCount: 0 },
        githubScore: 0,
      });
    }
  }

  const builderDataMapWithPRData = await getBuildersPRData(builderDataMap);
  const builderDataMapWithIssueActivities = await getBuildersIssueActivities(builderDataMapWithPRData);
  const builderDataMapWithGitHubScore = getBuildersGitHubScore(builderDataMapWithIssueActivities);

  return builderDataMapWithGitHubScore;
};
