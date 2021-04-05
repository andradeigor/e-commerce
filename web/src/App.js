import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";
import Header from "./components/Header/index";
import Banner from "./components/Banner/index";
import Card from "./components/Card/index";

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <GlobalStyle />
        <Card />
      </div>
    </ThemeProvider>
  );
};

export default App;
