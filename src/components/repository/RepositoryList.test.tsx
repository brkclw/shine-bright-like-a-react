import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { screen } from "@testing-library/react";
import { renderWithWrapper } from "../../config/jest";
import { GET_REPOSITORIES } from "../../graphql/queries/repository/repository.query";
import { defaultTheme } from "../../theme";
import { getCursorHashFromElementIndex } from "../../utils/pagination";
import RepositoryList from "./RepositoryList";

const repositoryListMocks: ReadonlyArray<MockedResponse> = [
  {
    request: {
      query: GET_REPOSITORIES,
      variables: {
        first: 10,
        query: "topic:react stars:>1000",
        after: getCursorHashFromElementIndex((1 - 1) * 10),
      },
    },
    result: {
      data: {
        search: {
          __typename: "SearchResultItemConnection",
          repositoryCount: 2,
          edges: [
            {
              cursor: "123",
              __typename: "SearchResultItemEdge",
              node: {
                id: "id2",
                __typename: "Repository",
                name: "redwood",
                description: "desc",
                forkCount: 813,
                stargazerCount: 15100,
                url: "https://github.com/redwoodjs/redwood",
                owner: {
                  __typename: "Organization",
                  login: "nice2",
                },
              },
            },
            {
              cursor: "124",
              __typename: "SearchResultItemEdge",
              node: {
                id: "id1",
                __typename: "Repository",
                name: "sweetalert2",
                description: "desc",
                forkCount: 1500,
                stargazerCount: 15200,
                url: "https://github.com/sweetalert2/sweetalert2",
                owner: {
                  __typename: "Organization",
                  login: "nice2",
                },
              },
            },
          ],
        },
      },
    },
  },
];

const renderRepositoryList = () =>
  renderWithWrapper(
    <MockedProvider mocks={repositoryListMocks}>
      <RepositoryList />
    </MockedProvider>
  );

describe("Repository List", () => {
  describe("rows", () => {
    it("renders repository list and items in table are visible", async () => {
      renderRepositoryList();
      await screen.findByText("sweetalert2");
      expect(screen.getByText("sweetalert2")).toBeInTheDocument();
    });

    it("repository list item link should have proper href", async () => {
      renderRepositoryList();
      await screen.findByText("redwood");
      const link = screen.getByRole("link", { name: "redwood" });
      expect(link.getAttribute("href")).toBe(
        "https://github.com/redwoodjs/redwood"
      );
    });

    it("repository list item link should have target: _blank property to properly open page in new tab", async () => {
      renderRepositoryList();
      await screen.findByText("redwood");
      const link = screen.getByRole("link", { name: "redwood" });
      expect(link.getAttribute("target")).toBe("_blank");
    });

    it("repository list item link should have star count with emoji at the beginning", async () => {
      renderRepositoryList();
      const row = await screen.findByTestId("row-redwood-stargazerCount");
      expect(row.innerHTML).toBe("🌟 15100");
    });

    it("repository list item link should have proper style", async () => {
      renderRepositoryList();
      await screen.findByText("redwood");
      const link = screen.getByRole("link", { name: "redwood" });
      expect(link).toHaveStyle(`color: ${defaultTheme.palette.secondary.main}`);
    });
  });
});
