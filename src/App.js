import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Article1 from "./pages/Articles";
import Footer1 from "./pages/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Home />
        <About />
        <Article1 />
        <Footer1 />
      </div>
    </BrowserRouter>
  );
};

export default App;
