import React from "react";
import { Carousel, Spinner } from "react-bootstrap";
import { obtenerActoresPopulares } from "../../service/API/obtenerDatosAPI";
import { useFetchReducer } from "../../customHooks/useFetch";
import { arrayReduce } from "../../utilidades/utilidades";
import styled from "@emotion/styled";
import { SpinnerPersonalizado } from "../Common/Spinner";

const ContenedorCarta = styled.div`
  color: white;
  width: 200px;
  height: 320px;
  background-color: black;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImagenActor = styled.img`
  height: 200px;
  width: 170px;
  border-radius: 50%;
`;
const ContenedorText = styled.div`
  text-align: center;
  padding-top: 20px;
`;

const NombreActor = styled.h5``;
const SeguidoresActores = styled.p`
  color: gray;
`;
const ContenedorItems = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 30px;
`;

const CarouselEstilado = styled(Carousel)`
  width: 100%;
  height: auto;
  margintop: 20px;
`;

const ActorCard = ({ data }) => {
  return (
    <ContenedorCarta>
      <ImagenActor
        src={`https://image.tmdb.org/t/p/w200${data.profile_path}`}
      />
      <ContenedorText>
        <NombreActor>{data.name}</NombreActor>
        <SeguidoresActores>Followers: {data.popularity}</SeguidoresActores>
      </ContenedorText>
    </ContenedorCarta>
  );
};

const TituloListaActores = styled.h3`
  color: #ffc107;
  padding-top: 10px;
  font-weight: bold;
`;

const ListaActoresMain = () => {
  const { data, loading, error } = useFetchReducer(obtenerActoresPopulares);
  if (loading) return <SpinnerPersonalizado></SpinnerPersonalizado>;
  if (error) return <div>error</div>;
  if (data)
    return (
      <>
        <TituloListaActores>Popular actors</TituloListaActores>
        <CarouselEstilado interval={null} indicators={false}>
          {arrayReduce(data, 5).map((actores, i) => (
            <Carousel.Item key={i}>
              <ContenedorItems>
                {actores.map((actor, j) => (
                  <ActorCard data={actor} key={actor.id} />
                ))}
              </ContenedorItems>
            </Carousel.Item>
          ))}
        </CarouselEstilado>
      </>
    );
};

export default ListaActoresMain;
