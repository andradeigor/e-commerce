import styled from "styled-components";

export const HeaderConteiner = styled.div`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 8px 20px;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.img``;
export const LogoText = styled.img`
  padding: 0px 20px;
`;
export const SearchBar = styled.input`
  width: 600px;
  height: 40px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.background};
  font-size: 20px;
  padding-left: 5px;
  &:focus {
    outline: none;
  }
`;
export const WelcomeText = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 20px;
  padding: 0px 20px;
`;

export const CarLogo = styled.img``;
