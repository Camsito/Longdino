//-------- Imagenes --------//
import { Placa } from "../assets/Placa";
import { Gabinete } from "../assets/Gabinete";
import { Manten } from "../assets/Manten";
//--------  Funciones --------//
import React, { useEffect } from "react";

const ScrollImageComponent = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in-image");
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 1.0 && elementTop > 0) {
          element.classList.add("fade-in"); // Agrega la clase para hacer aparecer la imagen
        } else {
          element.classList.remove("fade-in"); // Elimina la clase para hacerla desaparecer
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <section class="containear section-2">
        {/* oferta 1 */}
        <div class="offer offer-1">
          <img
            src={Placa}
            style={{ width: "100%" }}
            alt="a computer in dark with with white shadow"
            class="offer-img offer-1-img fade-in-image"
          />
          <div class="offer-description offer-desc-1">
            <h2 class="offer-title">Armado de Pc</h2>
            <p class="offer-hook">
              Contactanos para cotizar el armado o partes de tu Pc
            </p>
            <button class="custom-btn btn-12">
              <span>
                <a
                  href="https://api.whatsapp.com/send?phone=+56936681029&text=Hola, Quisiera solicitar un presupuesto."
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#fff" }}
                >
                  Tu presupuesto
                </a>
              </span>
              <span>Solicita aqui</span>
            </button>
          </div>
        </div>
        {/* Oferta 2 */}
        <div class="offer offer-2" style={{ marginLeft: "100px" }}>
          <img
            src={Manten}
            style={{ width: "80px" }}
            alt="a opened computer"
            class="offer-img offer-2-img fade-in-image"
          />
          <div class="offer-description offer-desc-2">
            <h2 class="offer-title">Mantencion</h2>
            <p class="offer-hook">Contactanos para cotizar tu mantencion</p>
            <button class="custom-btn btn-12">
              <span>
                <a
                  href="https://api.whatsapp.com/send?phone=+56936681029&text=Hola, Quisiera solicitar un presupuesto."
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#fff" }}
                >
                  Tu mantencion
                </a>
              </span>
              <span>Solicita aqui</span>
            </button>
          </div>
        </div>
        {/* Oferta 3 */}
        <div class="offer offer-1">
          <img
            src={Gabinete}
            alt="a computer in dark with with white shadow"
            className="offer-img offer-1-img fade-in-image"
          />
          <div class="offer-description offer-desc-1">
            <h2 class="offer-title">Servicio Tecnico</h2>
            <p class="offer-hook">
              Tambien contamos con servicio tecnico de Notebook´s y Pc´s de
              escritorio
            </p>
            <button class="custom-btn btn-12">
              <span>
                <a
                  href="https://api.whatsapp.com/send?phone=+56936681029&text=Hola, Quisiera hacer unas consultas."
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#fff" }}
                >
                  Haz tu consulta!
                </a>
              </span>
              <span>Hablanos</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ScrollImageComponent;
