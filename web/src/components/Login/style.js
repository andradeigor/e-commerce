import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background};
`;

export const LoginArea = styled.div`
  width: 60%;
  height: 90%;
  display: flex;
  background-color: ${(props) => props.theme.colors.secondary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
  border-radius: 15px;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 100%;
    height: 100%;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const LoginFormArea = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 500px;
  }
`;
export const LoginContainerDivider = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
    height: 0px;
  }
`;
export const LoginDivider = styled.div`
  height: 80%;
  background-color: ${(props) => props.theme.colors.background};
  width: 2px;
`;
