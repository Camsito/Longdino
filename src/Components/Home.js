import React from "react";
// Componentes //
import Comp1 from "../Components/Inicio/Componente1";
import Comp2 from "../Components/Inicio/Componente2";
// Stylesheet //
import '../style.css';
import '../Botons.css';

function Home () {
  return (
    <body className="bodyclas">
      <Comp1/>
      <Comp2/>
    </body>
  );
};

export default Home;
