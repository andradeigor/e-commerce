import {
  HeaderConteiner,
  Logo,
  LogoText,
  SearchBar,
  WelcomeText,
  CarLogo,
} from "./style.js";
import logoPath from "../../assets/logo.svg";
import logoTextPath from "../../assets/logotext.svg";
import logoCarPath from "../../assets/logocar.svg";
const Header = () => {
  return (
    <header>
      <HeaderConteiner>
        <Logo src={logoPath} />
        <LogoText src={logoTextPath} />
        <SearchBar placeholder="Seach..." />
        <WelcomeText>Bem-vindo, Igor</WelcomeText>
        <CarLogo src={logoCarPath} />
      </HeaderConteiner>
    </header>
  );
};

export default Header;
