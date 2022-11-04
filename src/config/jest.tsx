import { defaultTheme } from "../theme/theme";
import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";

export const renderWithWrapper = (component: JSX.Element) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
  );

  return render(component, { wrapper: Wrapper });
};
