import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages";
import About from "./about";
import Dropdown from "./components/Dropdown";
import Content from "./components/Content";
import Hero from "./components/Hero";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i resized");
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Routes>
      <Hero />
      <Content />
      <Footer />
    </>
  );
}

export default App;
