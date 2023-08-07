import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Componentes
import Navbar from "../src/Components/General/Navbar";
import Home from "../src/Components/Home";
import Presets from "../src/Components/Presets";
import ContactForm from "../src/Components/Contact";
import { Footer } from "./Components/General/Footer";
import Line from "./Components/General/Copyri";
import Greeting from "./Components/General/WhatsappPNG";
import AboutUs from './Components/AboutUs/AboutUs'



const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/Presets" Component={Presets}/>
        <Route path="/contact" Component={ContactForm}/>
        <Route path="/AboutUs" Component={AboutUs}/>
      </Routes>
      <Footer />
      <Line />
      <Greeting />
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


