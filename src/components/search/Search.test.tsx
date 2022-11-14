import { renderWithWrapper } from "../../config/jest";
import { Search } from "./Search";
import { screen } from "@testing-library/react";

const handleOnSearch = jest.fn();

const renderSearch = () =>
  renderWithWrapper(<Search repositories={[]} onSearch={handleOnSearch} />);

describe("Search", () => {
  renderSearch();
  const component = screen.getByTestId("search-component");

  it("Search component should be visible", async () => {
    expect(component).toBeInTheDocument();
  });

  it("Search component should have proper placeholder", async () => {
    expect(component).toHaveTextContent("Search GitHub projects");
  });
});
