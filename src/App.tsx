import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Pokemons, Pokemon } from "./pages";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store = { store }>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="app">
            <Routes>
              <Route path="/" element={<Pokemons />} />
              <Route path="/pokemons" element={<Pokemons />} />
              <Route path="/pokemons/:name" element={<Pokemon />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
