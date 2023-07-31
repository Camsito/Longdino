import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../src/Components/Navbar";
import Home from "../src/Components/Home";
import ContactForm from "../src/Components/Contact";


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/contact" Component={ContactForm}/>
      </Routes>
    <Navbar/>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


