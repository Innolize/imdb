import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchReducerAcumulativo } from '../../customHooks/useFetchScroll';
import { buscarValor } from '../../service/API/obtenerDatosAPI';
import BuscarHeader from './BuscarHeader';
import styled from '@emotion/styled';
import ListaResultado from './ListaResultado';


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
    const { data, loading, error } = useFetchReducerAcumulativo(buscarValor, valorBusqueda, pagina)

    function handleScroll(event) {
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget
        console.log(scrollTop, clientHeight, scrollHeight)
        if ((scrollTop + clientHeight) === scrollHeight) {
            setPagina(pagina + 1)
        }
    }
    debugger
    if (valorBusqueda === '')
        return (
            <Contenedor>
                <ContenedorCentral>
                    
                </ContenedorCentral>
            </Contenedor>
        )

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
    if (loading)
        return <div >loading</div>
}

export default ResultadoBusqueda