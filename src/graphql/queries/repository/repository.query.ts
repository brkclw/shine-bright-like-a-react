import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query GET_REPOSITORIES($first: Int!, $before: String, $after: String) {
    search(
      query: "topic:react stars:>1000"
      type: REPOSITORY
      first: $first
      before: $before
      after: $after
    ) {
      __typename
      repositoryCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      nodes {
        ... on Repository {
          __typename
          name
          forkCount
          stargazerCount
          url
        }
      }
    }
  }
`;
