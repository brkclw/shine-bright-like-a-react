import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

test("renders header", () => {
  render(<Header />);
  const headerSlogan = screen.getByText("👑 shine bright like a react 👑");
  expect(headerSlogan).toBeInTheDocument();
});
