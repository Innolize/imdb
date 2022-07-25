import React from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import useFetchReducerWithCache from "../../customHooks/useFetchWithCache";
import { buscarPeliculaPorID } from "../../service/API/obtenerDatosAPI";
import Trailer from "./Trailer";
import InfoTitulo from "./InfoTitulo";
import DescripcionPelicula from "./DescripcionPelicula";

const MainInfo = styled.div``;
const ContenedorPortada = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background-color: black;
`;
const ImagenPortada = styled.img`
  height: 400px;
  padding-right: 5px;
`;

const LayoutPelicula = styled.div`
  background-color: #333333;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 1600px) {
    width: 55%;
  }
`;

const Wrapper = styled.div`
  background-color: #181818;
`;

const ContenedorSinopsis = styled.div`
  font-size: 18px;
  color: white;
  background-color: #333333;
  padding: 15px 15px 0px 15px;
`;

export const Pelicula = () => {
  const { idPelicula } = useParams();
  const { data, loading, error } = useFetchReducerWithCache(
    buscarPeliculaPorID,
    idPelicula
  );

  if (loading) return <div>cargando</div>;

  if (error) return <div>error</div>;

  if (data)
    return (
      <Wrapper>
        <LayoutPelicula>
          <MainInfo>
            <InfoTitulo data={data} />
          </MainInfo>
          <ContenedorPortada>
            <ImagenPortada
              src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
            />
            <Trailer id={data.id} />
          </ContenedorPortada>
          <ContenedorSinopsis>{data.overview}</ContenedorSinopsis>
          <DescripcionPelicula id={data.id} />
        </LayoutPelicula>
      </Wrapper>
    );
};

export default Pelicula;
