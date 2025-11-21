export const userQuery = `
    query($owner: String!, $name: String!, $path: String!) {
      repository(owner: $owner, name: $name) {
        ref(qualifiedName: "main") {
          target {
            ... on Commit {
              history(first: 100, path: $path) {
                nodes {
                  author {
                    user {
                      login
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

export const prCountQuery = `
  query($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      pullRequests(first: 100, states: [OPEN, CLOSED, MERGED]) {
        
     		nodes{
          id
          number
          state
          author{
            login
          }
        }
      }
    }
  }
`;

export const repoIssueQuery = `
  query($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      issues(first: 100) {
     		nodes{
          state
          id
          number
          comments(first:100) {
            totalCount
            nodes {
              author {
                login
              }
              reactions(first:5){
                nodes {
                  user {
                    login
                  }
                }
              }
            }
          }
        }
        
      }
    }
  }
`;
