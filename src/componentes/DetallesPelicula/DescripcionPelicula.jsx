import React from "react";
import DescripcionDatos from "./descripcionClass";
import styled from "@emotion/styled";
import { useFetchReducer } from "../../customHooks/useFetch";
import { buscarCreditos } from "../../service/API/obtenerDatosAPI";
import { SpinnerPersonalizado } from "../Common/Spinner";

const ContenedorDescripcion = styled.div`
  background-color: #333333;
  color: #white;
`;
const ContenedorInformacion = styled.div`
  padding: 15px 15px 10px 15px;
  color: white;
`;
const Texto = styled.p`
  font-size: 18px;
`;

export const DescripcionPelicula = ({ id }) => {
  const { data, loading, error } = useFetchReducer(buscarCreditos, id);

  if (error) return <div>error, no hay descripcion</div>;
  if (loading) return <SpinnerPersonalizado height={600}></SpinnerPersonalizado>;
  if (data) {
    const descripcion = new DescripcionDatos(data);
    console.log(descripcion);
    return (
      <ContenedorDescripcion>
        <ContenedorInformacion>
          <Texto>
            <strong>Director: </strong>
            {descripcion.director.name}{" "}
          </Texto>
          <Texto>
            <strong>Writers: </strong>
            {descripcion.autor && <span>{descripcion.autor.name}</span>}
            {descripcion.autor2 && (
              <span>{descripcion.autor2.name} (Screenplay)</span>
            )}
          </Texto>
          <Texto>
            <strong>Stars: </strong>
            {descripcion.castPrevia.map((x, i) => (
              <span key={i}>{x.name + ", "} </span>
            ))}
          </Texto>
        </ContenedorInformacion>
      </ContenedorDescripcion>
    );
  }
};

export default DescripcionPelicula;
