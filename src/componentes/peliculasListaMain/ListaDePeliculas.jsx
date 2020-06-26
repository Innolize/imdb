import React from 'react';
import { Card } from 'react-bootstrap';
import { useFetchReducer } from '../../customHooks/useFetch';
import { obtenerPeliculasTrending } from '../../service/API/obtenerDatosAPI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBookmark } from '@fortawesome/free-solid-svg-icons';

const Cards = ({ data }) => {
    debugger
    return (
        <Card style={{ width: '200px', backgroundColor: "#1A1A1A", marginRight: "20px" }}>
            <Card.Img style={{ height: "250px", width: "auto" }} variant="top" src={`https://image.tmdb.org/t/p/w200${data.poster_path}`} />
            <FontAwesomeIcon icon={faBookmark} className="position-absolute" style={{ height: "40px", width: "auto", opacity:"0.9" }} />
            <Card.Body>
                <Card.Text style={{ color: "#766A60" }}>
                    <FontAwesomeIcon icon={faStar} style={{ color: "orange" }} />{data.vote_average}
                </Card.Text>
                <Card.Title style={{ color: "white" }}>{data.title}</Card.Title>


            </Card.Body>
        </Card>
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
        debugger
    console.log(data)
    return (
        <>
            <div style={{ paddingTop: "10px", paddingBotom: "10px" }}>
                <h3 style={{ color: "#FFC107" }}><strong>{tituloLista}</strong></h3>
                {subTituloLista && <h5 style={{ color: "gray" }}><strong>{subTituloLista}</strong></h5>}
                {data &&
                    <div className="d-flex">
                        {data && data.slice(0, 5).map((x, i) => <Cards data={x} key={i}></Cards>)}
                    </div>
                }
            </div>
        </>
    )



}

export default ListaDePeliculas