import React from "react";

// Rotas
import { BrowserRouter } from "react-router-dom";

// Componentes
// import Header from "./components/Header";
import Routers from "./routers";

// Estilo global
import { GlobalStyle } from "./style/GlobalStyle";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routers />
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}

export default App;
