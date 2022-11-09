import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { screen } from "@testing-library/react";
import { renderWithWrapper } from "../../config/jest";
import { GET_REPOSITORIES } from "../../graphql/queries/repository/repository.query";
import { defaultTheme } from "../../theme";
import { numericSorter, textSorter } from "./columns";
import RepositoryList from "./RepositoryList";

const repositoryListMocks: ReadonlyArray<MockedResponse> = [
  {
    request: {
      query: GET_REPOSITORIES,
      variables: {
        first: 100,
      },
    },

    result: {
      data: {
        search: {
          __typename: "SearchResultItemConnection",
          repositoryCount: 2,
          pageInfo: {
            endCursor: "Y3Vyc29yOjEw",
            hasNextPage: true,
            startCursor: "Y3Vyc29yOjE=",
            hasPreviousPage: false,
          },
          nodes: [
            {
              __typename: "Repository",
              name: "redwood",
              description: "desc",
              forkCount: 813,
              stargazerCount: 15100,
              url: "https://github.com/redwoodjs/redwood",
            },
            {
              __typename: "Repository",
              name: "sweetalert2",
              description: "desc",
              forkCount: 1500,
              stargazerCount: 15200,
              url: "https://github.com/sweetalert2/sweetalert2",
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
      await screen.findByText("redwood");
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

  describe("table handlers", () => {
    it("should sort properly text values", async () => {
      const names = ["redwood", "sweetalert2", "nx"];
      const expectedResult = ["nx", "redwood", "sweetalert2"];
      expect(expectedResult).toStrictEqual(names.sort(textSorter));
    });

    it("should sort properly numeric values", async () => {
      const values = [14826, 1104, 0, 10, 1005];
      const expectedResult = [0, 10, 1005, 1104, 14826];
      expect(expectedResult).toStrictEqual(values.sort(numericSorter));
    });
  });
});
