import { Octokit } from "octokit";

const token =
  process.env.NEXT_PUBLIC_GITHUB_TOKEN ||
  "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";

export const octokit = new Octokit({ auth: token });
