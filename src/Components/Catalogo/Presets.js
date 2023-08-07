import React from 'react';
import Catalog from './Catalog';

const Item = () => {
  const catalogItems = [
    {
      id: 1,
      name: 'MSI Ryzen 3 4350G',
      description: '-Placa: MSI A320M-A PRO MAX<br/>-Procesador: Ryzen 3 4350 G<br/>-Graficos: Integrada<br/>-Ram: Kingston Fury Beast 8GB x2<br/>-Almacenamiento: SSD 500 GB<br/>-Fuente: 400w 80 PLUS',
      price: 419000,
      imageFileName: 'Pc4-R3-4350-MSI-A320M-A-PRO-MAX-AM4.png',
      tipo:'AMD',
    },
    {
      id: 2,
      name: 'ASUS I5 10400',
      description: '-Placa: ASUS PRIME H510M-E<br/>-Procesador: I5 10400<br/>-Grafica: Integrada<br/>-Ram: Kingston Fury Beast 8GB x2<br/>-Almacenamiento: SSD 1 TB<br/>-Fuente: EVGA 500W 80 PLUS',
      price: 520000,
      imageFileName: 'Pc5-I5-10400-ASUS-PRIME-H510M-E-LGA1200.png',
      tipo:'INTEL',
    },
    {
      id: 3,
      name: 'MSI PC Ryzen 7 5700G',
      description: '-Placa: MSI A320M-A PRO MAX<br/>-Procesador: Ryzen 7 5700G<br/>-Graficos: Integrada<br/>-Ram: Kingston Fury Beast 8GB x2<br/>-Almacenamiento: SSD 1TB<br/>-Fuente: EVGA 500W 80 PLUS',
      price: 550000,
      imageFileName:'Pc1-i5-10400F-Prime-H510M-E-LGA1200.png',
      tipo:'AMD',
    },
    {
      id: 4,
      name: 'ASUS I7 10700',
      description: '-Placa: ASUS PRIME H510M-E<br/>-Procesador: I7 10700<br/>-Grafica: Integrada<br/>-Ram: Kingston Fury Beast 8GB x2<br/>-Almacenamiento: SSD 1 TB<br/>-Fuente: EVGA 500W 80 PLUS',
      price: 665990,
      imageFileName: 'Pc6-I7-10700-ASUS-PRIME-H510M-E-LGA1200.png',
      tipo:'INTEL',
    },
    {
      id: 5,
      name: 'Asus PC Ryzen 5 5500',
      description: '-Placa: ASUS PRIME A520M-A II/CSM AM4 <br/>-Procesador: Ryzen 5 5500<br/>-Grafica: GTX 1660 SUPER<br/>-Ram: Kingston Fury Beast 8GB x2<br/>-Almacenamiento: SSD 1TB<br/>-Fuente: EVGA 500W 80 PLUS',
      price: 700000,
      imageFileName: 'Pc3-R5-5500-AsusPrime-A520MA-ll-AM4.png',
      tipo:'AMD',
    },
    {
      id: 6,
      name: 'Asus PC Ryzen 5 5500',
      description: '-Placa: Gigabyte A520M DS3H<br/>-Procesador: Ryzen 5 5500<br/>-Grafica: Zotac GAMING GeForce RTX 3050 AMP<br/>-Ram: Kingston Fury Beast 8GB x2<br/>-Almacenamiento: 500 GB<br/>-Fuente: EVGA 500W 80 PLUS',
      price: 740000,
      imageFileName: 'Pc2-R5-5500-Gigabyte-A520M-DS3H-AM4.png',
      tipo:'AMD',
    },
  ];

  return (
    <>
      <Catalog items={catalogItems} />
    </>
  );
};

export default Item;
