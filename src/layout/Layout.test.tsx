import React from "react";
import { render, screen } from "@testing-library/react";
import { Layout } from "./Layout";

test("renders layout", () => {
  render(
    <Layout>
      <span>that's a really nice application</span>
    </Layout>
  );
  const content = screen.getByText("that's a really nice application");
  expect(content).toBeInTheDocument();
});
