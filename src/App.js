import React from "react";
import './App.css';
import { HomePage } from "./components/Homepage";

import { Navbar } from "./components/Navbar.js";
import { Search } from "./components/Search";

function App() {
  return (  
    <> 
 <Navbar/>
 <HomePage/>
 {/* <Search/> */}
    </>
  );
}

export default App;
