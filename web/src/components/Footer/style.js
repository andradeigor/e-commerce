import styled from "styled-components";

export const FooterContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 90px;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  position: fixed;
  bottom: 0;
  align-items: center;
  justify-content: center;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    height: 70px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    height: 60px;
  }
`;

export const FooterText = styled.h1`
  font-size: 24px;
  color: #fafafa;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    font-size: 18px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 16px;
  }
`;
