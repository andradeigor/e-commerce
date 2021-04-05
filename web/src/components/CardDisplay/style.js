import styled from "styled-components";

export const CardDisplayContainer = styled.div`
  margin-top: 2%;
  display: grid;
  justify-items: center;
  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    grid-template-columns: repeat(8, 1fr);
  }
`;
