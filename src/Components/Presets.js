import React from "react";
import { Footer } from "./Footer";
import Copyri from "../Components/Copyri";
import Greeting from "./WhatsappPNG";
import { Pc1, Pc2, Pc3 } from "../assets/Productos/Pc1";
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
                    <img src={Pc1} alt="" />
                  </div>
                  <div class="card__body">
                    <div class="card__title">Características</div>
                    <div class="shopline"></div>
                    <div class="card__text">-Placa: MSI A320M-A PRO MAX<br/>
                                            -Procesador: Ryzen 7 5700 G<br/>
                                            -Graficos: Integrada<br/>
                                            -Ram: 16 GB 2X8 3200 MHZ<br/>
                                            -Almacenamiento: SSD 1TB<br/>
                                            -Fuente: 500w 80 PLUS<br/>
                                            -Gabinete a eleccion
                                            </div>
                    <div class="card__bottom">
                      <div class="card__cost">$549.000</div>
                      <div class="card__button button">
                        <a
                          href="https://api.whatsapp.com/send?phone=+56936681029&text=Hola
                        %2C%20quiero%20comprar%20un%20PC%20con%20las%20siguientes%20característica
                        %3A%0A%0A-PRIME H510M-E LGA 1200
                        %20%0A-INTEL CORE I5-10400F LGA 1200
                        %20%0A-RAM FURY BEAST 8GB DDR4 3200
                        %20%0A-500GB SSD 3500MB/s
                        %20%0A-Grafica a elegir">Solicitar</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Item 2 */}
              <div class="catalog__col">
                <div class="catalog__card card">
                  <div class="card__image">
                    <img src={Pc2} alt="" />
                  </div>
                  <div class="card__body">
                    <div class="card__title">Características</div>
                    <div class="shopline"></div>
                    <div class="card__text">-Placa: Gigabyte A520M DS3H Socket AM4<br/>
                                            -Procesador: Ryzen 5 5500 Socket AM4<br/>
                                            -Grafica: Zotac GAMING GeForce RTX 3050<br/>
                                            -Ram: 16 GB 2X8 3200 MHZ<br/>
                                            -Almacenamiento: 500GB SSD 3500MB/s<br/>
                                            -Fuente: 500w 80 PLUS<br/>
                                            -Gabinete a eleccion
                                            </div>
                    <div class="card__bottom">
                      <div class="card__cost">$747.000</div>
                      <div class="card__button button">
                        <a
                          href="https://api.whatsapp.com/send?phone=+56936681029&text=Hola
                        %2C%20quiero%20comprar%20un%20PC%20con%20las%20siguientes%20característica
                        %3A%0A%0A-Placa: Gigabyte A520M DS3H Socket AM4
                        %201%0A-Procesador: Ryzen 5 5500 Socket AM4
                        %202%0A-Grafica: Zotac GAMING GeForce RTX 3050
                        %203%0A-Ram: 16 GB 2X8 3200 MHZ
                        %204%0A-500GB SSD 3500MB/s
                        %205%0A-Gabinete a eleccion
                        %206">Solicitar</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* item 3 */}
              <div class="catalog__col">
                <div class="catalog__card card">
                  <div class="card__image">
                    <img src={Pc3} alt="" />
                  </div>
                  <div class="card__body">
                    <div class="card__title">Característica</div>
                    <div class="shopline"></div>
                    <div class="card__text">-Placa: ASUS PRIME A520M-A II/CSM AM4<br/>
                                            -Procesador: Ryzen 5 5500<br/>
                                            -Grafica: GTX 1660 SUPER<br/>
                                            -Ram: Kingston Fury Beast 8GB x2<br/>
                                            -Fuente: EVGA 600W 80 PLUS<br/>
                                            -Almacenamiento: 500GB SSD 3500MB/s<br/>
                                            -Gabinete a eleccion</div>
                    <div class="card__bottom">
                      <div class="card__cost">$700.000</div>
                      <div class="card__button button">
                        <a
                          href="https://api.whatsapp.com/send?phone=+56936681029&text=Hola
                        %2C%20quiero%20comprar%20un%20PC%20con%20las%20siguientes%20característica
                        %3A%0A%0A-Característica
                        %201%0A-Característica
                        %202%0A-Característica
                        %203%0A-Característica
                        %204%0A-Característica
                        %205%0A-Característica
                        %206">Solicitar</a>
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
                    <div class="shopline"></div>
                    <div class="card__text">Descripcion Computador</div>
                    <div class="card__bottom">
                      <div class="card__cost">$750.000</div>
                      <div class="card__button button">
                        <a
                          href="https://api.whatsapp.com/send?phone=+56936681029&text=Hola
                        %2C%20quiero%20comprar%20un%20PC%20con%20las%20siguientes%20característica
                        %3A%0A%0A-Característica
                        %201%0A-Característica
                        %202%0A-Característica
                        %203%0A-Característica
                        %204%0A-Característica
                        %205%0A-Característica
                        %206">Solicitar</a>
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
                    <div class="shopline"></div>
                    <div class="card__text">Descripcion Computador</div>
                    <div class="card__bottom">
                      <div class="card__cost">$750.000</div>
                      <div class="card__button button">
                        <a
                          href="https://api.whatsapp.com/send?phone=+56936681029&text=Hola
                        %2C%20quiero%20comprar%20un%20PC%20con%20las%20siguientes%20característica
                        %3A%0A%0A-Característica
                        %201%0A-Característica
                        %202%0A-Característica
                        %203%0A-Característica
                        %204%0A-Característica
                        %205%0A-Característica
                        %206">Solicitar</a>
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
                    <div class="shopline"></div>
                    <div class="card__text">Descripcion Computador</div>
                    <div class="card__bottom">
                      <div class="card__cost">$750.000</div>
                      <div class="card__button button">
                        <a
                          href="https://api.whatsapp.com/send?phone=+56936681029&text=Hola
                        %2C%20quiero%20comprar%20un%20PC%20con%20las%20siguientes%20característica
                        %3A%0A%0A-Característica
                        %201%0A-Característica
                        %202%0A-Característica
                        %203%0A-Característica
                        %204%0A-Característica
                        %205%0A-Característica
                        %206">Solicitar</a>
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
      <Greeting />
    </div>
  );
}

export default Presets;
