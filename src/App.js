import React from "react";
import Info from "./components/Info.js";
import About from "./components/About.js";
import Interests from "./components/Interests.js";
import Footer from "./components/Footer.js";
import "./styles.css";

function App() {
  return (
    <div className="main">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
