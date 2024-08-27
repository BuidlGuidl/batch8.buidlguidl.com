import { Octokit } from "octokit";

const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN || "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";

export const octokit = new Octokit({ auth: token });
