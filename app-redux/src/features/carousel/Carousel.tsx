import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2019/09/banner-siete-pasos-gestion-proyectos.jpg" alt="Imagen 1" />
      </div>
      <div>
        <img src="imagen2.jpg" alt="Imagen 2" />
      </div>
      <div>
        <img src="imagen3.jpg" alt="Imagen 3" />
      </div>
    </Slider>
  );
};

export { Carousel };