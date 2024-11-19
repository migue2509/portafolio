import React from "react";
import './App.css'
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";



const App = () => {
  return (
    <>
      <Navbar />
      
      <div className="container">
        <Hero />
        <Skills />
        <ContactMe />
      </div>

      <Footer />

    </>
  )
}

export default App 