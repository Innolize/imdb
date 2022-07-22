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
            </Carousel>
          )}
        </div>
      </>
    );
};

export default ListaDePeliculas;
