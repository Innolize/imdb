import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { Votos } from "./Votos";

const HeaderInfo = styled.div`
  display: inline-block;
  padding: 10px 10px 15px 20px;
`;

const HeaderLinks = styled(NavLink)`
  font-size: 13px;
  padding: 0px 20px 0px 0px;
  color: gray;
  &: hover;
`;
const InfoBajoTitulo = styled.span`
  color: gray;
  padding: 0px 5px 0px 5px;
  font-size: 13px;
`;

const ContenedorEstilado = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 0px 20px 20px;
  position: relative;
`;
const ContainerTitulo = styled.div`
  display: flex;
`;

const IconoBookmark = () => (
  <FontAwesomeIcon
    icon={faBookmark}
    style={{ height: "50px", width: "40px", color: "gray" }}
  />
);

const ContenedorTitulo = styled.div`
  padding: 0px 10px;
`;

const TituloPelicula = styled.h1`
  color: white;
`;

const TituloAñoLanzamiento = styled.span`
  font-size: 24px;
  color: gray;
`;

const ContenedorDatosBajoTitulo = styled.div`
  display: flex;
`;

const InfoTitulo = ({ data }) => {
  console.log(data);
  return (
    <>
      <HeaderInfo>
        <HeaderLinks to={`/fullcast/${data.id}`}>FULL CAST</HeaderLinks>
        <span>|</span>
        <HeaderLinks to={`/reviews${data.id}`}>USER REVIEWS</HeaderLinks>
        <span>|</span>
        <HeaderLinks to={"/pro"}>INNOPRO</HeaderLinks>
        <span>|</span>
        <HeaderLinks to={"/"}>SHARE</HeaderLinks>
      </HeaderInfo>
      <ContenedorEstilado>
        <ContainerTitulo>
          <IconoBookmark />
          <ContenedorTitulo>
            <TituloPelicula>
              {`${data.original_title}`}{" "}
              <TituloAñoLanzamiento>
                ({new Date(data.release_date).getFullYear()})
              </TituloAñoLanzamiento>
            </TituloPelicula>
            <ContenedorDatosBajoTitulo>
              {data.adult && <InfoBajoTitulo> +18 |</InfoBajoTitulo>}{" "}
              <InfoBajoTitulo>{data.runtime}m</InfoBajoTitulo>{" "}
              <InfoBajoTitulo>|</InfoBajoTitulo>
              <InfoBajoTitulo>
                {data.genres.map((x) => x.name).join(",  ")}
              </InfoBajoTitulo>{" "}
              <InfoBajoTitulo>|</InfoBajoTitulo>{" "}
              <InfoBajoTitulo>{data.release_date}</InfoBajoTitulo>
            </ContenedorDatosBajoTitulo>
          </ContenedorTitulo>
        </ContainerTitulo>
        <Votos
          promedio={data.vote_average}
          totalVotos={data.vote_count}
        ></Votos>
      </ContenedorEstilado>
    </>
  );
};

export default InfoTitulo;
