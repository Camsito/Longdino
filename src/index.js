import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../src/Components/Navbar";
import Home from "../src/Components/Home";
import Presets from "../src/Components/Presets";
import ContactForm from "../src/Components/Contact";



const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/Presets" Component={Presets}/>
        <Route path="/contact" Component={ContactForm}/>
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


