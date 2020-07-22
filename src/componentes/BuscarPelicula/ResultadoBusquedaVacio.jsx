import React from 'react'
import styled from '@emotion/styled'

const ContenedorCentral = styled.div`
    margin-left: auto;
    margin-right: auto;
    min-height:400px;
    width:60%;
    background-color: white;
    display:flex;
    justify-content:center;
    padding-top: 20px;
`
const ContenedorPrincipal = styled.div`
    width:100%;
    height: 400px;


`


export const ResultadoBusquedaVacio = () => {
    return (
        <ContenedorPrincipal>
            <ContenedorCentral>
                Enter a word or phrase to search on in the form at the top of the page.
            </ContenedorCentral>
        </ContenedorPrincipal>
    )
}
export default ResultadoBusquedaVacio
