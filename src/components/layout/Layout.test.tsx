import { screen } from "@testing-library/react";
import { Layout } from "./Layout";
import { renderWithWrapper } from "../../config/jest";

test("renders layout", () => {
  renderWithWrapper(
    <Layout>
      <span>that's a really nice application</span>
    </Layout>
  );
  const content = screen.getByText("that's a really nice application");
  expect(content).toBeInTheDocument();
});
