import { useState, useEffect } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import { slidesData } from "../services/slidesData";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [isLoading, setIsLoading] = useState(true); // Estado para rastrear la carga de imágenes
  const [allImagesLoaded, setAllImagesLoaded] = useState(false); // Estado para rastrear si todas las imágenes están cargadas

  const totalSlides = slidesData.length;

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    );
  };

  // Función para manejar la carga de imágenes
  useEffect(() => {
    const imagePromises = slidesData.map((slide) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = slide.image;
        img.onload = () => resolve();
      });
    });

    Promise.all(imagePromises).then(() => {
      setIsLoading(false);
      setAllImagesLoaded(true);
    });
  }, []);

  // Resto del código para manejar el carrusel
  // ...

  return (
    <div className="container_carousel">
      {isLoading && <div className="loading-indicator">Cargando...</div>}
      {allImagesLoaded && !isLoading && (
        <div className="carousel">
          <Link className="button_carrousel" onClick={handlePrevClick}>
            <MdKeyboardArrowLeft />
          </Link>

          <div className="container_img">
            {slidesData.map((slide, index) => (
              <figure
                key={index}
                className={`figure_img_cat ${
                  currentSlide === index ? "active" : ""
                }`}
                onMouseEnter={() => setCurrentSlide(index)}
              >
                <img
                  className={`img_cat ${
                    currentSlide === index ? "active" : ""
                  }`}
                  src={slide.image}
                  alt=""
                />

                <div
                  className={`imgcat_text_container ${
                    currentSlide === index ? "active" : ""
                  }`}
                >
                  <section className="container_text_img">
                    <div className="container_mobil_text_img">
                      <h1 className="titulo_text_imgcat">{slide.title}</h1>
                      <article className="article_paragh_imgcat">
                        <p className="paragh_text_imgcat">
                          {slide.description}
                        </p>
                      </article>
                    </div>
                  </section>
                </div>
              </figure>
            ))}
          </div>

          <Link className="button_carrousel" onClick={handleNextClick}>
            <MdKeyboardArrowRight />
          </Link>
        </div>
      )}
    </div>
  );
}
