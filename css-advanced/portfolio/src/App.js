import "./App.css";
import React, { useState } from "react";
import Main from "./components/pages/Main";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { NavbarOpenContext } from "./contexts/NavbarOpenContext.js";

//todo typewriter functionality
//todo sidebar/navbar
//todo update about para
//todo set links

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="App">
      <NavbarOpenContext.Provider value={{ navbarOpen, setNavbarOpen }}>
        <Main />
      </NavbarOpenContext.Provider>
    </div>
  );
}

export default App;
