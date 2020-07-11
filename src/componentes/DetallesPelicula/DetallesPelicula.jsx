import React from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { useFetchReducer } from '../../customHooks/useFetch';
import { buscarPeliculaPorID } from '../../service/API/obtenerDatosAPI';
import Trailer from './Trailer';
import InfoTitulo from './InfoTitulo';

const MainInfo = styled.div`
    
`
const ContenedorPortada = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const ImagenPortada = styled.img`
    height: 480px;
    padding-right: 5px;
`





export const Pelicula = () => {
    debugger
    const { idPelicula } = useParams()
    const { data, loading, error } = useFetchReducer(buscarPeliculaPorID, idPelicula)

    if (loading)
        return (
            <div>cargando</div>
        )

    if (error)
        return (
            <div>error</div>
        )

    if (data)
        console.log(data)
    return (
        <div>
            <MainInfo>
                <InfoTitulo data={data} />
            </MainInfo>
            <ContenedorPortada>
                <ImagenPortada src={`https://image.tmdb.org/t/p/original${data.poster_path}`} />
                <Trailer id={data.id} />

            </ContenedorPortada>
        </div >
    )
}

export default Pelicula