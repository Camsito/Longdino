import React from 'react';
import CatalogItem from './CatalogoItem';

const CatalogList = ({ items }) => {
  return (
    <>
      {items.map(item => (
        <CatalogItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default CatalogList;
