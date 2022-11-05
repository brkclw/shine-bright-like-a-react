import { screen } from "@testing-library/react";
import { Header } from "./Header";
import { renderWithWrapper } from "../../../config/jest";

test("renders header", () => {
  renderWithWrapper(<Header />);
  const headerSlogan = screen.getByText("👑 shine bright like a react 👑");
  expect(headerSlogan).toBeInTheDocument();
});
