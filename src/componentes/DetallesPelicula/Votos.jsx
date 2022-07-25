import React from "react";
import { quitarDecimales } from "../../utilidades/utilidades";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const IconoEstrellaAmarilla = () => (
  <FontAwesomeIcon
    icon={faStar}
    style={{ height: "40px", width: "40px", color: "#E4BB24" }}
  ></FontAwesomeIcon>
);

const IconoEstrellaVacio = () => (
  <FontAwesomeIcon
    icon={faStar}
    style={{ height: "40px", width: "40px", color: "gray", marginLeft: "5px" }}
  ></FontAwesomeIcon>
);

const ContenedorPuntuacion = styled.div`
  display: flex;
  width: 200px;
  height: 50px;
  color: white;
`;

const ContenedorIzquierdo = styled.div`
  display: flex;
`;
const ContenedorDerecho = styled.div`
    border-left: 1px solid gray;
    margin-left: 10px;
    display: flex;
    color: gray:
    padding-left: 5px;
 `;

const ContenedorVotos = styled.div`
  padding-left: 5px;
`;

const ContenedorPromedio = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Promedio = styled.span`
  font-size: 20px;
`;

const Votar = styled.p`
  padding-left: 5px;
`;

export const Votos = ({ promedio, totalVotos }) => (
  <ContenedorPuntuacion>
    <ContenedorIzquierdo>
      <IconoEstrellaAmarilla></IconoEstrellaAmarilla>
      <ContenedorVotos>
        <ContenedorPromedio>
          <strong>
            <Promedio>{quitarDecimales(promedio)}</Promedio>
          </strong>{" "}
          <span>/10</span>
        </ContenedorPromedio>
        <p>{totalVotos}</p>
      </ContenedorVotos>
    </ContenedorIzquierdo>
    <ContenedorDerecho>
      <IconoEstrellaVacio></IconoEstrellaVacio>
      <Votar>Rate this</Votar>
    </ContenedorDerecho>
  </ContenedorPuntuacion>
);
