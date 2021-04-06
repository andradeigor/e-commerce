import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";
import Header from "./components/Header/index";
import Banner from "./components/Banner/index";
import CardDisplay from "./components/CardDisplay/index";
import Footer from "./components/Footer/index";
const App = () => {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <GlobalStyle />
        <header>
          <Header />
        </header>
        <main>
          <Banner />
          <CardDisplay />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default App;
