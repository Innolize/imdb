import React from 'react';
import styled from '@emotion/styled';

const Titulo = styled.h1`
    font-size: 16px;
`
const SubTitulo = styled.div`
    display: flex;
    color: gray;
`

const BuscarHeader = ({ titulo = 'default' }) => {
    
    return (
        <>
            <Titulo>Results for <strong>'{titulo}'</strong></Titulo>
            {/* <SubTitulo>
                Jump to: <a href='/asd'>Titles</a> | <a href='/asd'>Names</a> | <a href='/asd'>Keywords</a> | <a href='/asd'>Companies</a>
            </SubTitulo> */}
        </>
    )
}

export default BuscarHeader