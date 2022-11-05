import { Layout } from "antd";
import styled from "styled-components";

export const StyledHeader = styled(Layout.Header)`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`;

export const StyledSlogan = styled.h3`
  text-transform: capitalize;
  color: ${({ theme }) => theme.palette.secondary.contrastText};
`;
