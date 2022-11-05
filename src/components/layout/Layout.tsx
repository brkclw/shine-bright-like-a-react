import { Header } from "./header";
import { StyledContent, StyledLayout } from "./Layout.styled";

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <StyledContent>{children}</StyledContent>
    </StyledLayout>
  );
};
