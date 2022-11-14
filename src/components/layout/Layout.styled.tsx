import { Layout } from "antd";
import styled from "styled-components";

export const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

export const StyledContent = styled(Layout.Content)`
  margin: 2rem auto;
  max-width: 768px;

  @media (min-width: 1600px) {
    max-width: 1366px;
    width: 100%;
  }
`;
