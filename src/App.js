import React from "react";
import AppRouter from "./components/AppRouter";
import GlobalStyles from "./components/Styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Theme from "./components/Styles/Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <AppRouter />
      </>
    </ThemeProvider>
  );
}

export default App;
