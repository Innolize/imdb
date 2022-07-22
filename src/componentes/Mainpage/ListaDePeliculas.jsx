import React from "react";
import { Card, Carousel, Spinner } from "react-bootstrap";
import { useFetchReducer } from "../../customHooks/useFetch";
import { obtenerPeliculasTrending } from "../../service/API/obtenerDatosAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { arrayReduce } from "../../utilidades/utilidades";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const ContenedorItems = styled.div`
  display: flex;
  margin-left: 30px;
  height: 400px;
`;

const ContenedorThumbnail = styled(Card)`
  width: 200px;
  background-color: #1a1a1a;
  margin-right: 20px;
`;

const ImagenThumbnail = styled(Card.Img)`
  height: 250px;
  width: auto;
`;

const IconoGuardarPelicula = styled(FontAwesomeIcon)`
  color: black;
  font-size: 35px;
  width: auto;
  position: absolute;
  opacity: 0.9;
`;

const CuerpoDePelicula = styled(Card.Body)`
  padding: 10px;
  height: 165px;
`;
const PuntuacionPelicula = styled(Card.Text)`
  color: #766a60;
`;

const TituloDePelicula = styled(Card.Text)`
  color: white;
  font-size: 18px;
`;

const ThumbnailPelicula = ({ data }) => {
  return (
    <Link to={`/movie/${data.id}`}>
      <ContenedorThumbnail>
        <ImagenThumbnail
          variant="top"
          src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
        />
        <IconoGuardarPelicula icon={faBookmark} />
        <CuerpoDePelicula>
          <PuntuacionPelicula>
            <FontAwesomeIcon icon={faStar} style={{ color: "orange" }} />
            {data.vote_average}
          </PuntuacionPelicula>
          <TituloDePelicula>{data.title}</TituloDePelicula>
        </CuerpoDePelicula>
      </ContenedorThumbnail>
    </Link>
  );
};

const ListaDePeliculas = ({
  callbackAPI = obtenerPeliculasTrending,
  tituloLista = "",
  subTituloLista = "",
}) => {
  const { data, loading, error } = useFetchReducer(callbackAPI);
  if (loading)
    return (
      <div
        style={{
          height: "380px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  if (error) return <div>error</div>;
  if (data)
    return (
      <>
        <div style={{ paddingTop: "10px", paddingBotom: "10px" }}>
          <h3 style={{ color: "#FFC107" }}>
            <strong>{tituloLista}</strong>
          </h3>
          {subTituloLista && (
            <h5 style={{ color: "gray" }}>
              <strong>{subTituloLista}</strong>
            </h5>
          )}

          {data && (
            <Carousel
              interval={null}
              indicators={false}
              style={{
                width: "100%",
                height: "auto",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              {arrayReduce(data, 5).map((x, i) => (
                <Carousel.Item key={i}>
                  <ContenedorItems>
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
            </Carousel>
          )}
        </div>
      </>
    );
};

export default ListaDePeliculas;
