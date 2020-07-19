import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchReducer } from '../../customHooks/useFetch';
import { buscarValor } from '../../service/API/obtenerDatosAPI';
import BuscarHeader from './BuscarHeader';
import styled from '@emotion/styled';

const Contenedor = styled.div`
    background-color: #E3E2DD;
`
const ContenedorCentral = styled.div`
    margin-left: auto;
    margin-right: auto;
    height:400px;
    width:60%;
    background-color: white;
    display:flex;
`
const ContenedorPrincipal = styled.div`
    width: 850px;

`
const ContenedorSidebar = styled.div`
    width: 250px;  
`
const ContenedorResultados = styled.div`
    margin: 20px 10px 20px 20px;
    height: 300px;
    weigth: 500px;
    border: 1px solid #ccc;
    border-radius:12px;
`

const ResultadoBusqueda = () => {
    debugger

    const { valorBusqueda } = useParams()
    const { data, loading, error } = useFetchReducer(buscarValor, valorBusqueda)

    if (loading)
        return <div>loading</div>

    if (error)
        return <div>error</div>

    if (data)
        console.log(data)
    return (
        <Contenedor>
            <ContenedorCentral>
                <ContenedorPrincipal>
                    <ContenedorResultados>
                        <BuscarHeader />
                    </ContenedorResultados>
                </ContenedorPrincipal>
                <ContenedorSidebar>asd</ContenedorSidebar>
            </ContenedorCentral>
        </Contenedor>
    )
}

export default ResultadoBusqueda