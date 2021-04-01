import styled from "styled-components";

export const HeaderConteiner = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 8px 0px;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    height: 60px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchBarConteiner = styled.div`
  width: 50%;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 40%;
  }
`;

export const Logo = styled.img`
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 40px;
  }
`;
export const LogoText = styled.img`
  padding: 0px 20px;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    display: none;
  }
`;
export const ProfileLogo = styled.img`
  display: none;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    display: inline;
    width: 32px;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.background};
  font-size: 20px;
  padding-left: 5px;
  &:focus {
    outline: none;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 16px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    height: 35px;
  }
`;

export const WelcomeText = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 20px;
  padding: 0px 20px;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    display: none;
  }
`;

export const CarLogo = styled.img``;
