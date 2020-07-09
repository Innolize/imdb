import React from 'react';
import styled from '@emotion/styled';
import { buscarVideosPorId } from '../../service/API/obtenerDatosAPI';
import { useFetchReducer } from '../../customHooks/useFetch';

const TrailerPelicula = styled.iframe`
`

export const Trailer = ({ id }) => {
    const { data, loading, error } = useFetchReducer(buscarVideosPorId, id)
    console.log(data)
    if (loading)
        return (
            <div>cargando</div>
        )

    if (error || data.length === 0)
        return (
            <div>ERROR, NO VIDEO</div>
        )

    if (data)
    console.log(data)
        return (
            < TrailerPelicula width="720" height="480" frameBorder="0" title="asd" src={`https://www.youtube.com/embed/${data[0].key}?controls=1&mute=1&autoplay=1`} >
            </TrailerPelicula >

        )

}

export default Trailer