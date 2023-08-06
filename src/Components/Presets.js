import React from "react";
import Item from "./Catalogo/Presets";
import './Catalogo/Catalog.css';

function Presets() {
  /* eslint-disable */
  return (
    <div>
      <section class="catalog">
        <div class="containers">
          <div class="catalog__flex">
            <div class="catalog__row">
              <Item/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Presets;
