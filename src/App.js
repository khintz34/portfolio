import "./App.css";
import React, { useState } from "react";
import Main from "./components/pages/Main";
import { NavbarOpenContext } from "./contexts/NavbarOpenContext.js";

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
