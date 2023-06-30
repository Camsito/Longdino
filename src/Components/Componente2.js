import React from 'react'
//-------- Imagenes --------//
import { Placa } from '../assets/Placa';
import { ServicioTec } from '../assets/Tecnic-service';
import { Gabinete } from '../assets/Gabinete';
//--------  Funciones --------//
function Comp2(){
    return(
        <main>
            <section class="containear section-2">
                {/* oferta 1 */}
                <div class="offer offer-1">
                    <img src={Placa} style={{width: "100%"}} alt="a computer in dark with with white shadow" class="offer-img offer-1-img"/>
                    <div class="offer-description offer-desc-1">
                        <h2 class="offer-title">Armado de Pc</h2>
                        <p class="offer-hook">Contactanos para cotizar el armado o partes de tu Pc</p>
                    </div>
                </div>
                {/* Oferta 2 */}
                <div class="offer2 offer-2">
                    <img src={ServicioTec} style={{width: "40%"}} alt="a opened computer" class="offer-img offer-2-img"/>
                    <div class="offer-description offer-desc-2">
                        <h2 class="offer-title">Servicio Tecnico</h2>
                        <p class="offer-hook">Tambien contamos con servicio tecnico de Notebook´s</p>
                    </div>
                </div>
                {/* Oferta 3 */}
                <div class="offer offer-1">
                    <img src={Gabinete} style={{width:"60%"}} alt="a computer in dark with with white shadow" class="offer-img offer-1-img"/>
                    <div class="offer-description offer-desc-1">
                        <h2 class="offer-title">Servicio Tecnico Desktop</h2>
                        <p class="offer-hook">Ademas contamos con Servicio tecnico de Desktop´s o Pc´s de escritorio</p>
                    </div>
                </div>
                {/* Oferta 4 */}
                <div class="offer2 offer-2">
                    <img src="" alt="a opened computer" class="offer-img offer-2-img"/>
                    <div class="offer-description offer-desc-2">
                    <h2 class="offer-title">Instalacion de Cableado de red</h2>
                        <p class="offer-hook">Tambien tenemos los servicios de instalacion de Cables UTP Cat 6e, Cotiza tu instalacion atraves de nuestro Whatsapp</p>
                    </div>
                </div>
            </section>
        </main>
  );
}
export default Comp2;