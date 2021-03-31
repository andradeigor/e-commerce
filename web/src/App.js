import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";
import Header from "./components/Header/index";

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <GlobalStyle />
        <Header />
      </div>
    </ThemeProvider>
  );
};

export default App;
