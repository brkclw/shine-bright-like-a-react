import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query GET_REPOSITORIES(
    $query: String!
    $first: Int!
    $before: String
    $after: String
  ) {
    search(
      query: $query
      type: REPOSITORY
      first: $first
      before: $before
      after: $after
    ) {
      __typename
      repositoryCount
      edges {
        __typename
        cursor
        node {
          ... on Repository {
            __typename
            id
            name
            forkCount
            owner {
              login
            }
            stargazerCount
            url
          }
        }
      }
    }
  }
`;
