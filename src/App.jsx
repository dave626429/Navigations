import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Routes from "./Routes";
import { GlobalStyle } from "./styles/GlobalStyles";
import { darkTheme, lightTheme } from "./styles/theme";

export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const themestyle = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themestyle}>
        <GlobalStyle />
        <Helmet>
          <title>Sidebar -code focus</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;0,700;1,400&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <>
          <Layout>
            <Routes />
          </Layout>
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
