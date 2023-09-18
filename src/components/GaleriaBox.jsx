import { DataCard } from "../services/DataCards";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function GaleriaBox() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timeCounter = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage < DataCard.length - 1 ? prevImage + 1 : 0
      );
    }, 1500);

    return () => clearInterval(timeCounter);
  }, []);

  const nextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage < DataCard.length - 1 ? prevImage + 1 : 0
    );
  };

  const prevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage > 0 ? prevImage - 1 : DataCard.length - 1
    );
  };

  return (
    <div className="container_album">
      <div className="container_Text_album">
        <h1 className="Titulo_album">Álbum de gatos</h1>

        <div className="container_Arrows_album">
          <Link className="Arrows_album_Cats" onClick={prevImage}>
            <MdKeyboardArrowLeft />
          </Link>

          <Link className="Arrows_album_Cats" onClick={nextImage}>
            <MdKeyboardArrowRight />
          </Link>
        </div>
      </div>

      <section className={`Grid_colum horizontal-scroll`}>
        {DataCard.map((card, index) => (
          <div
            className={`container_CardImg ${
              index === currentImage ? "active" : ""
            }`}
            key={card.id}
          >
            <figure className="figure_CardImg">
              <img
                className={`CardImg ${index === currentImage ? "active" : ""}`}
                src={card.imgURL}
                alt=""
              />
            </figure>
          </div>
        ))}
      </section>
    </div>
  );
}
