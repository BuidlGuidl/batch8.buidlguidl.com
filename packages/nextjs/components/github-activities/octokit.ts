import { Octokit } from "octokit";

const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

export const octokit = new Octokit({ auth: token });
