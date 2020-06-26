import React from 'react';
import { Card } from 'react-bootstrap';
import { useFetchReducer } from '../customHooks/useFetch';
import { obtenerPeliculasTrending } from '../service/API/obtenerDatosAPI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Cards = ({ data }) => {
    debugger
    return (
        <Card style={{ width: '200px', backgroundColor: "#1A1A1A", marginRight: "20px" }}>
            <Card.Img style={{ height: "250px", width: "auto" }} variant="top" src={`https://image.tmdb.org/t/p/w200${data.poster_path}`} />
            <Card.Body>
                <Card.Text style={{ color: "#766A60" }}>
                    <FontAwesomeIcon icon={faStar} style={{ color: "orange" }} />{data.vote_average}
                </Card.Text>
                <Card.Title style={{ color: "white" }}>{data.title}</Card.Title>


            </Card.Body>
        </Card>
    )
}

const TrendingMovies = () => {
    const { data, loading, error } = useFetchReducer(obtenerPeliculasTrending)
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
            <h3 style={{ color: "#FFC107" }}><strong>Trending this week</strong></h3>
            {data &&
                <div className="d-flex">
                    {data && data.slice(0, 5).map((x, i) => <Cards data={x} key={i}></Cards>)}
                </div>
            }
        </>
    )



}

export default TrendingMovies