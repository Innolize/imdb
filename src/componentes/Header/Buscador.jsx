import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled'

const ContenedorBuscador = styled.div`
    display:flex;
    width: 50%;
    margin: auto 0px auto 0px;
`

const Buscador = () => {
    const [value, setValue] = useState('')

    return (
        <ContenedorBuscador>
            <input
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search INNOMDb"
                style={{ width: "100%" }}>
            </input>
            <NavLink to={`/search/${value}`} >
                <button
                    style={{ backgroundColor: "black" }}>
                    <FontAwesomeIcon
                        icon={faSearch}
                        style={{ fontSize: "20px", color: "white" }}
                    />
                </button>
            </NavLink>
        </ContenedorBuscador>
    )
}

export default Buscador