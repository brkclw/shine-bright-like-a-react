import { render, screen, waitFor } from "@testing-library/react";
import RepositoryList from "./RepositoryList";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { GET_REPOSITORIES } from "../graphql/queries/repository/repository.query";

const repositoryListMocks: ReadonlyArray<MockedResponse> = [
  {
    request: {
      query: GET_REPOSITORIES,
    },
    result: {
      data: {
        search: {
          __typename: "SearchResultItemConnection",
          repositoryCount: 2,
          nodes: [
            {
              __typename: "Repository",
              name: "first project",
              description: "desc",
              forkCount: 1,
              stargazerCount: 2,
              url: "url123",
            },
            {
              __typename: "Repository",
              name: "second project",
              description: "desc",
              forkCount: 1,
              stargazerCount: 2,
              url: "url12334",
            },
          ],
        },
      },
    },
  },
];

test("renders repository list", async () => {
  render(
    <MockedProvider mocks={repositoryListMocks}>
      <RepositoryList />
    </MockedProvider>
  );
  await waitFor(() => {
    expect(screen.getByText("first project")).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.getByText("second project")).toBeInTheDocument();
  });
});
