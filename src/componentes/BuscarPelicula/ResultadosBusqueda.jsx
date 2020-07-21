import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchReducer } from '../../customHooks/useFetch';
import { buscarValor } from '../../service/API/obtenerDatosAPI';
import BuscarHeader from './BuscarHeader';
import styled from '@emotion/styled';
import ListaResultado from './ListaResultado';
import { Prev } from 'react-bootstrap/PageItem';

const Contenedor = styled.div`
    background-color: #E3E2DD;
`
const ContenedorCentral = styled.div`
    margin-left: auto;
    margin-right: auto;
    min-height:400px;
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
    overflow-y: scroll;
    margin: 20px 10px 20px 20px;
    min-height: 300px;
    max-height: 800px;
    border: 1px solid #ccc;
    border-radius: 12px;
    padding: 10px 0px 0px 10px;
`

const ResultadoBusqueda = () => {
    const { valorBusqueda } = useParams()
    const [pagina, setPagina] = useState(1)
    console.log(pagina)


    const { data, loading, error } = useFetchReducer(buscarValor, valorBusqueda, pagina)


    function handleScroll(event) {
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget
        console.log(scrollTop, clientHeight, scrollHeight)
        if ((scrollTop + clientHeight) === scrollHeight) {
            setPagina(pagina + 1)
        }
    }




    if (loading)
        return <div style={{ minHeight: '1000px' }}>loading</div>

    if (error)
        return <div>error</div>

    if (data)

        return (
            <Contenedor>
                <ContenedorCentral>
                    <ContenedorPrincipal>
                        <ContenedorResultados onScroll={handleScroll}>
                            <BuscarHeader titulo={valorBusqueda} />
                            <ListaResultado data={data} />
                        </ContenedorResultados>
                    </ContenedorPrincipal>
                    <ContenedorSidebar>asd</ContenedorSidebar>
                </ContenedorCentral>
            </Contenedor>
        )
}

export default ResultadoBusqueda