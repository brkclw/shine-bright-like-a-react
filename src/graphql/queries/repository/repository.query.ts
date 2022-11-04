import { gql, useQuery } from "@apollo/client";

/** In real word case I would use @graphl-codegen to generate TS types from gql schema */
export interface Repository {
  __typename: string;
  forkCount: number;
  name: string;
  stargazerCount: number;
  url: string;
}

export interface RepositoriesQueryResponse {
  search: {
    __typename: string;
    repositoryCount: number;
    nodes: Repository[];
  };
}

export const GET_REPOSITORIES = gql`
  query GET_REPOSITORIES {
    search(query: "topic:react stars:>1000", type: REPOSITORY, first: 100) {
      __typename
      repositoryCount
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

/** Had to use GET_REPOSITORIES as GET_TOPICS is returning 502
 *  I have created a ticket for this to github support.
 */
// const GET_TOPICS = gql`
//   query topic {
//     topic(name: "react") {
//       id
//       name
//       repositories(first: 10) {
//         edges {
//           node {
//             id
//           }
//         }
//       }
//     }
//   }
// `;

export function useRepositoriesQuery() {
  return useQuery<RepositoriesQueryResponse>(GET_REPOSITORIES);
}
