import {
  HeaderConteiner,
  Container,
  SearchBarConteiner,
  Logo,
  LogoText,
  SearchBar,
  WelcomeText,
  ProfileLogo,
  CarLogo,
} from "./style.js";
import logoPath from "../../assets/logo.svg";
import logoTextPath from "../../assets/logotext.svg";
import logoCarPath from "../../assets/logocar.svg";
import logoUserPath from "../../assets/logouser.svg";
const Header = () => {
  return (
    <header>
      <HeaderConteiner>
        <Container>
          <Logo src={logoPath} />
          <LogoText src={logoTextPath} />
        </Container>
        <SearchBarConteiner>
          <SearchBar placeholder="Seach..." />
        </SearchBarConteiner>
        <Container>
          <WelcomeText>Bem-vindo, Igor</WelcomeText>
          <ProfileLogo src={logoUserPath} />
        </Container>
        <Container>
          <CarLogo src={logoCarPath} />
        </Container>
      </HeaderConteiner>
    </header>
  );
};

export default Header;
