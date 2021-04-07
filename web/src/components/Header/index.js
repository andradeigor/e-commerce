import {
  HeaderConteiner,
  Container,
  SearchBarConteiner,
  Logo,
  LogoText,
  SearchBar,
  WelcomeText,
  ProfileLogo,
  ThemeSwither,
  ThemeContainer,
  CarLogo,
} from "./style.js";
import logoPath from "../../assets/logo.svg";
import logoTextPath from "../../assets/logotext.svg";
import logoCarPath from "../../assets/logocar.svg";
import logoUserPath from "../../assets/logouser.svg";
import sunPath from "../../assets/sun.svg";
import moonPath from "../../assets/moon.svg";
const Header = (props) => {
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
          <ProfileLogo src={logoUserPath} />
        </Container>
        <ThemeContainer onClick={props.tougleTheme}>
          <ThemeSwither src={props.theme === "light" ? sunPath : moonPath} />
          {console.log(props.theme)}
        </ThemeContainer>
        <Container>
          <CarLogo src={logoCarPath} />
        </Container>
      </HeaderConteiner>
    </header>
  );
};

export default Header;
