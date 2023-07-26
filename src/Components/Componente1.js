import Logo from '../assets/Logo.svg';

function Comp1(){
    return(
        <main>
            <section className="container section-1">
                <div className="slogan" >
                    <h1 className="company-title" >LONGDINO</h1>
                    <h2 className="company-slogan">
                        Somos una Pyme dedicada al armado de Pc y soporte tecnico en distintas areas, ademas hacemos instalaciones de cableado de red, no dudes en contactarnos por tus consultas.
                    </h2>
                </div>
                        <img className="cont1 log" src={Logo} alt=""/>
                    {/* Agregar imagen del slogan al terminar el diseño*/}
                
            </section>
        </main>
    );
}
export default Comp1;
