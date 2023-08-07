import React, { useState } from "react";
import Intel from "../../assets/Icons/Intel"
import CatalogList from "./CatalogList";

const Catalog = ({ items }) => {
  const [filterType, setFilterType] = useState(null);

  const handleFilterChange = (event) => {
    const newFilterType = event.target.value;
    setFilterType(newFilterType);
  };

  const filteredItems = filterType
    ? items.filter((item) => item.tipo === filterType)
    : items;

  return (
    <>
      <select id="filter" className='select' onChange={handleFilterChange}>
        <option value="" className='option-all'>Mostrar todo</option>
        <option value="AMD" className="option-amd">AMD</option>
        <option value="INTEL" className="option-intel">INTEL</option>
      </select>

      <CatalogList items={filteredItems} />
    </>
  );
};

export default Catalog;
