import { useParams } from "react-router-dom";
import { DATACAT } from "../services/DATACAT";
import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";
import Footer from "../components/Footer";

export default function RazaGato() {
  const { raza } = useParams();

  // Filtra los datos para encontrar la raza correspondiente
  const gatoSeleccionado = DATACAT.find((CAT) => CAT.NAME === raza);

  // Comprueba si se encontró la raza, y muestra la información si es así
  if (gatoSeleccionado) {
    return (
      <>
        <Navbar></Navbar>
        <SubNavbar></SubNavbar>
        <div className="container_Razas">
          <div className="container_page_raza">
            <div className="container_CardRaza">
              <section className="section_razas">
                <h1 className="titulo_raza">
                  Raza:{" "}
                  <span className="span_titulo_raza">
                    {gatoSeleccionado.NAME}
                  </span>
                </h1>

                <article className="article_razas">
                  <p className="paragh_raza">
                    <span className="span_paragh_descripcion">
                      Descripcion:{" "}
                    </span>
                    {gatoSeleccionado.DESCRIPCION}
                  </p>
                  <p className="paragh_raza_personalidad">
                    <span className="span_paragh_personalidad">
                      Personalidad:{" "}
                    </span>
                    {gatoSeleccionado.PERSONALIDAD}
                  </p>

                  <p className="paragh_raza_caracteristicas">
                    <span className="span_raza_caracteristicas">
                      Características:{" "}
                    </span>
                    {gatoSeleccionado.CARACTERISTICAS}
                  </p>

                  <p className="paragh_raza_paisOrigen">
                    <span className="span_raza_paisOrigen">
                      Pais de origen:{" "}
                    </span>
                    {gatoSeleccionado.PAIS_ORIGEN}
                  </p>
                </article>
              </section>

              <div className="container_img_raza">
                <img
                  className="img_razaCat"
                  src={gatoSeleccionado.imgURL}
                  alt={gatoSeleccionado.NAME}
                />
              </div>
            </div>

            <section className="section_container_Razas_Galeria">
              <article className="article_razas_galeria">
                <h2 className="titulo_galeria">Historia</h2>

                <p className="paragh_razas_galeria">
                  {gatoSeleccionado.HISTORIA}
                </p>

                <br />

                <h2 className="titulo_galeria">Alimentación </h2>
                <p className="paragh_razas_galeria">
                  {gatoSeleccionado.ALIMENTACION_ESPECIFICA}
                </p>
              </article>

              {/*PONER UN TAL VEZ UNA GALERIA XD*/}
            </section>
          </div>

          <Footer></Footer>
        </div>
      </>
    );
  } else {
    //XD
    // Si la raza no se encuentra en los datos, puedes mostrar un mensaje de error
    return (
      <>
        <Navbar></Navbar>
        <SubNavbar></SubNavbar>
        <h1>Raza no encontrada</h1>
      </>
    );
  }
}
