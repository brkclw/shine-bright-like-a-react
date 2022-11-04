import { render, screen, waitFor, within } from "@testing-library/react";
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

describe("Repository List", () => {
  const renderRepositoryList = () =>
    render(
      <MockedProvider mocks={repositoryListMocks}>
        <RepositoryList />
      </MockedProvider>
    );

  it("renders repository list and items in table are visible", async () => {
    renderRepositoryList();
    await screen.findByText("first project");
    expect(screen.getByText("second project")).toBeInTheDocument();
  });

  it("repository list item have proper href", async () => {
    renderRepositoryList();
    await screen.findByText("first project");
    expect(screen.getByText("second project")).toBeInTheDocument();

    const link = screen.getByRole("link", { name: "first project" });
    expect(link.getAttribute("href")).toBe("url123");
  });
});
