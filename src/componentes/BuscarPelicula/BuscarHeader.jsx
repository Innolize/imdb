import React from 'react';
import styled from '@emotion/styled';

const Titulo = styled.h1`
    font-size: 16px;
`

const BuscarHeader = ({ titulo = 'default' }) => {

    return (
        <Titulo>Results for <strong>'{titulo}'</strong></Titulo>

    )
}

export default BuscarHeader