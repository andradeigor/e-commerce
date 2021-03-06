import { React, useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import Header from "./components/Header/index";
import Banner from "./components/Banner/index";
import CardDisplay from "./components/CardDisplay/index";
import Footer from "./components/Footer/index";
import ProductDisplay from "./components/ProductDisplay";
import MyUseState from "./utils/MyUseState";
import Login from "./components/Login/index";
const App = () => {
  const [preferenceTheme, SetPreferenceTheme] = MyUseState("theme", light);
  const tougleTheme = () => {
    preferenceTheme === light
      ? SetPreferenceTheme(dark)
      : SetPreferenceTheme(light);
  };
  return (
    <ThemeProvider theme={preferenceTheme}>
      <div className="App">
        <GlobalStyle />
        <Router>
          <header>
            <Header tougleTheme={() => tougleTheme()} theme={preferenceTheme} />
          </header>
          <main>
            <Route path="/" exact>
              <Banner />
              <CardDisplay />
            </Route>
            <Route path="/item/:id" children={<ProductDisplay />}></Route>
            <Route path="/login">
              <Login />
            </Route>
          </main>
          <footer>
            <Footer />
          </footer>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
