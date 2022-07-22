import React, { useState, useEffect } from "react";
import { Carousel, Spinner } from "react-bootstrap";
import { obtenerEstrenos } from "../../service/API/obtenerDatosAPI";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const ContenedorPortada = styled.div`
  position: absolute;
  bottom: 0px;
  left: 30px;
`;
const ImagenPortada = styled.img`
  height: 200px;
`;

const CarouselEstilado = styled(Carousel)`
  width: 100%;
  padding-top: 20px;
`;

const ContenedorSpinnerCarousel = styled.div`
  height: 700px;
  display: flex;
  justifycontent: center;
  alignitems: center;
`;

const ImagenCarousel = styled.img``;
const TituloPortada = styled.h3``;
const DescripcionPelicula = styled.p``;

const CuadroCarousel = ({ data }) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <CarouselEstilado
      className="letra-borde"
      activeIndex={index}
      onSelect={handleSelect}
    >
      {data &&
        data.map((x, i) => (
          <Carousel.Item key={i}>
            <Link to={`/movie/${x.id}`}>
              <ImagenCarousel
                className="d-block w-100"
                src={`https://image.tmdb.org/t/p/original${x.backdrop_path}`}
                alt={x.original_title}
              />

              <Carousel.Caption>
                <TituloPortada>{x.original_title}</TituloPortada>
                <DescripcionPelicula>{x.overview}</DescripcionPelicula>
              </Carousel.Caption>
              <ContenedorPortada>
                <ImagenPortada
                  src={`https://image.tmdb.org/t/p/original${x.poster_path}`}
                />
              </ContenedorPortada>
            </Link>
          </Carousel.Item>
        ))}
    </CarouselEstilado>
  );
};

const CarouselComponente = () => {
  const [imagenesCarousel, setImagenesCarousel] = useState(null);

  useEffect(() => {
    async function obtenerImagenesCarousel() {
      setImagenesCarousel(await obtenerEstrenos());
    }
    obtenerImagenesCarousel();
  });

  if (imagenesCarousel === null)
    return (
      <ContenedorSpinnerCarousel>
        <Spinner animation="border" role="status" />
      </ContenedorSpinnerCarousel>
    );

  if (imagenesCarousel)
    return <CuadroCarousel data={imagenesCarousel.slice(0, 5)} />;
};

export default CarouselComponente;
