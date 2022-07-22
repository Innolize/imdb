import React from "react";
import { Carousel, Spinner } from "react-bootstrap";
import { useFetchReducer } from "../../customHooks/useFetch";
import { obtenerPeliculasTrending } from "../../service/API/obtenerDatosAPI";
import { arrayReduce } from "../../utilidades/utilidades";
import { ThumbnailPelicula } from "./Thumbnail";
import styled from "@emotion/styled";

const ContenedorItems = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 30px;
  height: 400px;
`;

const ContenedorSpinner = styled.div`
  height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselEstilado = styled(Carousel)`
  width: 100%;
  height: auto;
  margintop: 20px;
  marginbottom: 20px;
`;
const ContenedorLista = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;
const TituloLista = styled.h3`
  color: #ffc107;
  font-weight: bold;
`;

const SubTituloLista = styled.h4`
  color: gray;
  font-weight: bold;
`;
const ListaDePeliculas = ({
  callbackAPI = obtenerPeliculasTrending,
  tituloLista = "",
  subTituloLista = "",
}) => {
  const { data, loading, error } = useFetchReducer(callbackAPI);
  if (loading)
    return (
      <ContenedorSpinner>
        <Spinner animation="border" role="status"></Spinner>
        <span className="sr-only">Loading...</span>
      </ContenedorSpinner>
    );
  if (error) return <div>error</div>;
  if (data)
    return (
      <ContenedorLista>
        <TituloLista>{tituloLista}</TituloLista>
        {subTituloLista && <SubTituloLista>{subTituloLista}</SubTituloLista>}

        {data && (
          <CarouselEstilado interval={null} indicators={false}>
            {arrayReduce(data, 5).map((x, i) => (
              <Carousel.Item key={i}>
                <ContenedorItems justify="center">
                  {x &&
                    x.map((cardData, j) => (
                      <ThumbnailPelicula
                        data={cardData}
                        key={j}
                      ></ThumbnailPelicula>
                    ))}
                </ContenedorItems>
              </Carousel.Item>
            ))}
          </CarouselEstilado>
        )}
      </ContenedorLista>
    );
};

export default ListaDePeliculas;
