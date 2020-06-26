import React from 'react';
import { Card } from 'react-bootstrap';
import { obtenerActoresPopulares } from '../service/API/obtenerDatosAPI';
import { useFetchReducer } from '../customHooks/useFetch';

const ActorCard = ({ data }) => {
    return (
        <Card text="white" style={{ width: "200px", backgroundColor: "black" }}>
            <Card.Img variant="top" style={{ height: "200px", width: "170px", borderRadius: "60%" }} src={`https://image.tmdb.org/t/p/w200${data.profile_path}`} />
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>
                    Followers: {data.popularity}
                </Card.Text>

            </Card.Body>
        </Card>
    )
}

const ListaActoresMain = () => {
    const { data, loading, error } = useFetchReducer(obtenerActoresPopulares)
    if (loading)
        return (
            <div>loading</div>
        )
    if (error)
        return (
            <div>error</div>
        )
    console.log(data)
    debugger
    if (data)


        return (
            <>
                <div className="d-flex pt-3">
                    {data.slice(0, 5).map(x => <ActorCard data={x} key={x.id} />)}
                </div>
            </>
        )
}

export default ListaActoresMain