import React from 'react';
import CatalogList from './CatalogList';

const Catalog = ({ items }) => {
  return (
    <>
      <CatalogList items={items} />
    </>
  );
};

export default Catalog;
