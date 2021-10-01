import React from "react";
import Movies from "./components/Movies/Movies";
import Search from "./components/Search/Search";
import { useSelector } from "react-redux";
import { Home } from "./AppStyles";

function App() {
  const theme = useSelector((state) => state.theme);
  return (
    <Home theme={theme}>
      <Search />
      <Movies />
    </Home>
  );
}

export default App;
