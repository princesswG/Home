import React from "react";
import './App.css';



import { HomePage } from "./components/Homepage";
import { Navbar } from "./components/Navbar.js";
import {Footer} from "./components/Footer.js"


function App() {
  

  return (  
    <> 
 <Navbar/>
 <HomePage/>
 <Footer/>
     </>
  );
}

export default App;
