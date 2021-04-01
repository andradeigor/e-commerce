import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";
import Header from "./components/Header/index";
import Banner from "./components/Banner/index";

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <GlobalStyle />
        <Header></Header>
        <Banner />
      </div>
    </ThemeProvider>
  );
};

export default App;
