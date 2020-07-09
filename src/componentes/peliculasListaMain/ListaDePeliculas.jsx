import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import { useFetchReducer } from '../../customHooks/useFetch';
import { obtenerPeliculasTrending } from '../../service/API/obtenerDatosAPI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { arrayReduce } from '../../utilidades/utilidades';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const ContenedorItems = styled.div`
    display:flex;
    margin-left: 30px;
`

const Cards = ({ data }) => {
    debugger

    return (
        <Link to={`/movie/${data.id}`}>
            <Card style={{ width: '200px', backgroundColor: "#1A1A1A", marginRight: "20px" }}>
                <Card.Img style={{ height: "250px", width: "auto" }} variant="top" src={`https://image.tmdb.org/t/p/w200${data.poster_path}`} />
                <FontAwesomeIcon icon={faBookmark} className="position-absolute" style={{ height: "40px", width: "auto", opacity: "0.9" }} />
                <Card.Body style={{ height: "165px" }}>
                    <Card.Text style={{ color: "#766A60" }}>
                        <FontAwesomeIcon icon={faStar} style={{ color: "orange" }} />{data.vote_average}
                    </Card.Text>
                    <Card.Title style={{ color: "white" }}>{data.title}</Card.Title>
                </Card.Body>
            </Card>
        </Link>
    )
}

const ListaDePeliculas = ({ callbackAPI = obtenerPeliculasTrending, tituloLista = "", subTituloLista = "" }) => {
    const { data, loading, error } = useFetchReducer(callbackAPI)
    if (loading)
        return (
            <div>loading</div>
        )
    if (error)
        return (
            <div>error</div>
        )
    if (data)
        return (
            <>
                <div style={{ paddingTop: "10px", paddingBotom: "10px" }}>
                    <h3 style={{ color: "#FFC107" }}><strong>{tituloLista}</strong></h3>
                    {subTituloLista && <h5 style={{ color: "gray" }}><strong>{subTituloLista}</strong></h5>}

                    {data &&

                        <Carousel interval={null} indicators={false} style={{ width: "100%", height: "auto", marginTop: "20px", marginBottom: "20px" }}>
                            {arrayReduce(data, 5).map((x, i) =>
                                <Carousel.Item key={i} >
                                    <ContenedorItems>
                                        {x && x.map((cardData, j) =>
                                            <Cards data={cardData} key={j}></Cards>)}
                                    </ContenedorItems>
                                </Carousel.Item>
                            )}

                        </Carousel>
                    }


                </div>
            </>
        )



}

export default ListaDePeliculas