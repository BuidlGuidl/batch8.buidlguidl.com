export type BuilderGitHubUsernameQueryResponse = {
  repository: {
    ref: {
      target: {
        history: {
          nodes: {
            author: {
              user: {
                login: string;
              } | null;
            };
          }[];
        };
      };
    };
  };
};

export type QueryPRCountResponse = {
  repository: {
    pullRequests: {
      nodes: {
        id: string;
        number: number;
        state: "OPEN" | "CLOSED" | "MERGED";
        author: {
          login: string;
        };
      }[];
    };
  };
};

export type RepoIssueQueryResponse = {
  repository: {
    issues: {
      nodes: {
        state: string;
        id: string;
        number: number;
        comments: {
          totalCount: number;
          nodes: {
            author: {
              login: string;
            };
            reactions: {
              nodes: {
                user: {
                  login: string;
                };
              }[];
            };
          }[];
        };
      }[];
    };
  };
};

export type BuilderData = {
  address: string;
  pr: {
    openCount: number;
    closedCount: number;
    mergedCount: number;
  };
  issue: {
    commentCount: number;
    reactionCount: number;
  };
  githubScore: number;
};

export type BuilderDataMap = Map<string, BuilderData>;
