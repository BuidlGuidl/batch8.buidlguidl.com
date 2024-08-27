import { Octokit } from "octokit";

const token =
  process.env.NEXT_PUBLIC_GITHUB_TOKEN ||
  "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";

export const octokit = new Octokit({ auth: token });
