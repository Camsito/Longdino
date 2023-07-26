import React from "react";
// Componentes //
import Comp1 from "../Components/Componente1"
import Comp2 from "../Components/Componente2";
import {Footer} from "../Components/Footer";
import Copyri from "../Components/Copyri";
import Greeting from "../Components/WhatsappPNG";
// Stylesheet //
import '../style.css';
import '../Botons.css';

function Home () {
  return (
    <body className="bodyclas">
      <Comp1/>
      <Comp2/>
      <Footer/>
      <Copyri/>
      <Greeting/>
    </body>
  );
};

export default Home;
