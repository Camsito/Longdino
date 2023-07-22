import React from 'react';
import ReactDOM from 'react-dom/client';
//-------------Componentes-------------//
import Navbar from './Components/Navbar';
import Comp1 from './Components/Componente1';
import Comp2 from './Components/Componente2';
import { Footer } from './Components/Footer';
import Wsp from './Components/WhatsappPNG';
import Copyri from './Components/Copyri'
//-------------StyleSheet-------------//
import "./style.css";
import "./wsp.css";
import "./Botons.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navbar/>
    <Comp1/>
    <Comp2/>
    <Footer/>
    <Copyri/>
    <Wsp/>
  </>
);
