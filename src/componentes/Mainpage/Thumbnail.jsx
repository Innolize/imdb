import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faBookmark, faStar } from "@fortawesome/free-solid-svg-icons";

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
  font-size: 50px;
  width: auto;
  position: absolute;
  opacity: 0.7;
  &:hover {
    color: orange;
    opacity: 0.9;
  }
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

const AgregarACola = styled.div`
  position: absolute;
  opacity: 0.9;

`;

const AgregarColaMas = styled.p`
  padding-left: 7px;
  font-size: 35px;
  color: black;
  position: absolute;
`;

const Test = () => {
  return (
    <AgregarACola>
      <IconoGuardarPelicula icon={faBookmark} />
      <AgregarColaMas>+</AgregarColaMas>
    </AgregarACola>
  );
};

export const ThumbnailPelicula = ({ data }) => {
  return (
    <Link to={`/movie/${data.id}`}>
      <ContenedorThumbnail>
        <ImagenThumbnail
          variant="top"
          src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
        />
        <Test></Test>
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
