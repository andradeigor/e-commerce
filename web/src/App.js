import { React, useState } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import Header from "./components/Header/index";
import Banner from "./components/Banner/index";
import CardDisplay from "./components/CardDisplay/index";
import Footer from "./components/Footer/index";
const App = () => {
  const [preferenceTheme, SetPreferenceTheme] = useState("light");
  const tougleTheme = () => {
    preferenceTheme === "light"
      ? SetPreferenceTheme("dark")
      : SetPreferenceTheme("light");
  };
  return (
    <ThemeProvider theme={preferenceTheme === "light" ? light : dark}>
      <div className="App">
        <GlobalStyle />
        <header>
          <Header tougleTheme={() => tougleTheme()} theme={preferenceTheme} />
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
