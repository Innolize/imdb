import React from 'react';
import { Carousel, Spinner } from 'react-bootstrap';
import { obtenerActoresPopulares } from '../../service/API/obtenerDatosAPI';
import { useFetchReducer } from '../../customHooks/useFetch';
import { arrayReduce } from '../../utilidades/utilidades';
import styled from '@emotion/styled';

const ContenedorCarta = styled.div`
    color: white;
    width: 200px;
    height: 320px;
    background-color: black;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
`

const ImagenActor = styled.img`
    height:200px;
    width:170px;
    border-radius:50%;
`
const ContenedorText = styled.div`
    text-align: center;
    padding-top: 20px;
`

const NombreActor = styled.h5`
`
const SeguidoresActores = styled.p`
    color:gray;
`
const ContenedorItems = styled.div`
    display:flex;
    margin-left: 30px;
`

const ActorCard = ({ data }) => {
    return (

        <ContenedorCarta>
            <ImagenActor src={`https://image.tmdb.org/t/p/w200${data.profile_path}`} />
            <ContenedorText >
                <NombreActor>{data.name}</NombreActor>
                <SeguidoresActores>
                    Followers: {data.popularity}
                </SeguidoresActores>

            </ContenedorText>
        </ContenedorCarta>

    )
}

const ListaActoresMain = () => {
    const { data, loading, error } = useFetchReducer(obtenerActoresPopulares)
    if (loading)
        return (
            <div style={{ height: '380px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        )
    if (error)
        return (
            <div>error</div>
        )
    if (data)


        return (
            <>
                <h3 style={{ color: "#FFC107", paddingTop: "10px" }}><strong>Popular actors</strong></h3>
                <div className="d-flex pt-3">
                    <Carousel interval={null} indicators={false} style={{ width: "100%", height: "auto", marginTop: "20px", marginBottom: "20px" }}>
                        {arrayReduce(data, 5).map((actores, i) =>
                            <Carousel.Item key={i} >
                                <ContenedorItems>
                                    {actores.map((actor, j) =>
                                        <ActorCard data={actor} key={actor.id} />
                                    )}
                                </ContenedorItems>
                            </Carousel.Item>
                        )}
                    </Carousel>
                </div>
            </>
        )
}

export default ListaActoresMain