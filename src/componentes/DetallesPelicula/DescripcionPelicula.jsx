import React from 'react';
import DescripcionDatos from './descripcionClass';
import styled from '@emotion/styled';
import { useFetchReducer } from '../../customHooks/useFetch';
import { buscarCreditos } from '../../service/API/obtenerDatosAPI';

const ContenedorDescripcion = styled.div`
    background-color: white;
`
const ContenedorInformacion = styled.div`
    padding: 15px 15px 15px 15px;
`
const Texto = styled.div`
    font-size: 18px;
    color: #333;
`

export const DescripcionPelicula = ({ id }) => {
    const { data, loading, error } = useFetchReducer(buscarCreditos, id)

    if (error)
        return (
            <div>error, no hay descripcion</div>
        )
    if (loading)
        return (
            <div>cargando</div>
        )
    if (data) {
        let descripcion = new DescripcionDatos(data)
        return (
            <ContenedorDescripcion>
                <ContenedorInformacion>
                    <Texto>{descripcion.descripcion}</Texto>
                </ContenedorInformacion>
                <ContenedorInformacion>
                    <Texto><strong>Director: </strong>{descripcion.director.name} </Texto>
                    <Texto><strong>Writers: </strong>
                        {descripcion.autor && <span>{descripcion.autor.name}</span>}
                        {descripcion.autor2 && <span>{descripcion.autor2.name} (Screenplay by)</span>}
                    </Texto>
                    <Texto><strong>Stars: </strong>{descripcion.castPrevia.map((x, i) => <span key={i}>{x.name + ", "} </span>)}</Texto>
                </ContenedorInformacion>
            </ContenedorDescripcion>
        )
    }
}

export default DescripcionPelicula