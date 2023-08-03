import React from "react";
import { Footer } from "./Footer";
import Copyri from "../Components/Copyri";
import "../Catalog.css";

function Presets() {
  /* eslint-disable */
  return (
    <div>
      <section class="catalog">
        <div class="containers">
          <div class="catalog__flex">
            <div class="catalog__row">
              {/* item 1 */}
              <div class="catalog__col">
                <div class="catalog__card card">
                  <div class="card__image">
                    <img src="https://picsum.photos/1920/1080" alt="" />
                  </div>
                  <div class="card__body">
                    <div class="card__title">Computador</div>
                    <div class="card__text">Descripcion Computador</div>
                    <div class="card__bottom">
                      <div class="card__cost">$750.000</div>
                      <div class="card__button button">
                        <a href="">Solicitar</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Item 2 */}
              <div class="catalog__col">
                <div class="catalog__card card">
                  <div class="card__image">
                    <img src="https://picsum.photos/1920/1081" alt="" />
                  </div>
                  <div class="card__body">
                    <div class="card__title">Computador</div>
                    <div class="card__text">Descripcion Computador</div>
                    <div class="card__bottom">
                      <div class="card__cost">$750.000</div>
                      <div class="card__button button">
                        <a href="">Solicitar</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* item 3 */}
              <div class="catalog__col">
                <div class="catalog__card card">
                  <div class="card__image">
                    <img src="https://picsum.photos/1920/1082" alt="" />
                  </div>
                  <div class="card__body">
                    <div class="card__title">Computador</div>
                    <div class="card__text">Descripcion Computador</div>
                    <div class="card__bottom">
                      <div class="card__cost">$750.000</div>
                      <div class="card__button button">
                        <a href="">Solicitar</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Item 4 */}
              <div class="catalog__col">
                <div class="catalog__card card">
                  <div class="card__image">
                    <img src="https://picsum.photos/1920/1083" alt="" />
                  </div>
                  <div class="card__body">
                    <div class="card__title">Computador</div>
                    <div class="card__text">Descripcion Computador</div>
                    <div class="card__bottom">
                      <div class="card__cost">$750.000</div>
                      <div class="card__button button">
                        <a href="">Solicitar</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Item 5 */}
              <div class="catalog__col">
                <div class="catalog__card card">
                  <div class="card__image">
                    <img src="https://picsum.photos/1920/1084" alt="" />
                  </div>
                  <div class="card__body">
                    <div class="card__title">Computador</div>
                    <div class="card__text">Descripcion Computador</div>
                    <div class="card__bottom">
                      <div class="card__cost">$750.000</div>
                      <div class="card__button button">
                        <a href="">Solicitar</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Item 6 */}
              <div class="catalog__col">
                <div class="catalog__card card">
                  <div class="card__image">
                    <img src="https://picsum.photos/1920/1085" alt="" />
                  </div>
                  <div class="card__body">
                    <div class="card__title">Computador</div>
                    <div class="card__text">Descripcion Computador</div>
                    <div class="card__bottom">
                      <div class="card__cost">$750.000</div>
                      <div class="card__button button">
                        <a href="">Solicitar</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Finish Item */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Copyri />
    </div>
  );
}

export default Presets;
