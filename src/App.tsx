import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Pokemons, Pokemon } from "./pages";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";

function App() {
  return (
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
  );
}

export default App;
