import styled from "styled-components";

export const HeaderConteiner = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 8px 0px;
  height: 90px;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    height: 70px;
  }
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
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
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
  width: 32px;
`;
export const ThemeContainer = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const ThemeSwither = styled.img`
  width: 20px;
`;
export const SearchBar = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.searchtext};
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  padding-left: 10px;
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
  color: #fafafa;
  font-size: 20px;
  padding: 0px 20px;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    display: none;
  }
`;

export const CarLogo = styled.img``;
