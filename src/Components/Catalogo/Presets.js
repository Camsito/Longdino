import React from 'react';
import Catalog from './Catalog';

const Item = () => {
  const catalogItems = [
    {
      id: 1,
      name: 'PC Ryzen 7 5700 G',
      description: '-Placa: MSI A320M-A PRO MAX<br/>-Procesador: Ryzen 7 5700 G<br/>-Graficos: Integrada<br/>-Ram: Kingston Fury Beast 8GB x2<br/>-Almacenamiento: SSD 1TB<br/>-Fuente: 500w 80 PLUS',
      price: 550000,
      imageFileName:'Pc1-i5-10400F-Prime-H510M-E-LGA1200.png',
    },
    {
      id: 2,
      name: 'PC Ryzen 5 5500',
      description: '-Placa: ASUS PRIME A520M-A II/CSM AM4 <br/>-Procesador: Ryzen 5 5500<br/>-Grafica: GTX 1660 SUPER<br/>-Ram: Kingston Fury Beast 8GB x2<br/>-Almacenamiento: SSD 1TB<br/>-Fuente: 500w 80 PLUS',
      price: 700000,
      imageFileName: 'Pc2-R5-5500-Gigabyte-A520M-DS3H-AM4.png',
    },
    {
      id: 3,
      name: 'PC Ryzen 5 5500',
      description: '-Placa: Gigabyte A520M DS3H<br/>-Procesador: Ryzen 5 5500<br/>-Grafica: Zotac GAMING GeForce RTX 3050<br/>-Ram: Kingston Fury Beast 8GB x2<br/>-Almacenamiento: SSD 500 GB<br/>-Fuente: 500w 80 PLUS',
      price: 747000,
      imageFileName: 'Pc2-R5-5500-Gigabyte-A520M-DS3H-AM4.png',
    },
  ];

  return (
    <>
      <Catalog items={catalogItems} />
    </>
  );
};

export default Item;
