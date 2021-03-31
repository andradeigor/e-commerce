import { HeaderConteiner, Logo, LogoText } from "./style.js";
import logoPath from "../../assets/logo.svg";
import logoTextPath from "../../assets/logotext.svg";
import SearchBar from "../SearchBar/index";
const Header = () => {
  return (
    <header>
      <HeaderConteiner>
        <Logo src={logoPath} />
        <LogoText src={logoTextPath} />
        <SearchBar />
      </HeaderConteiner>
    </header>
  );
};

export default Header;
