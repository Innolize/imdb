import React from 'react';
import styled from '@emotion/styled';
import { buscarVideosPorId } from '../../service/API/obtenerDatosAPI';
import { useFetchReducer } from '../../customHooks/useFetch';
import { Spinner } from 'react-bootstrap'

const TrailerPelicula = styled.iframe`
    width: 720px;
    height: 480px;
`

const ContenedorLoading = styled.div`
    width: 720px;
    height: 480px;
`

export const Trailer = ({ id }) => {
    const { data, loading, error } = useFetchReducer(buscarVideosPorId, id)
    if (loading)
        return (
            <ContenedorLoading>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </ContenedorLoading>
        )

    if (error || data.length === 0)
        return (
            <div>ERROR, NO VIDEO</div>
        )

    if (data)
        return (
            < TrailerPelicula frameBorder="0" src={`https://www.youtube.com/embed/${data[0].key}?controls=1&mute=1&autoplay=1`} >
            </TrailerPelicula >

        )

}

export default Trailer