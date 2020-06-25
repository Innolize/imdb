import React from 'react';
import styled from '@emotion/styled';
import { Badge, Button } from 'react-bootstrap';
import { faBars, faSearch, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledHeader = styled.div`
    height:50px;
    width:100%;
    background-color: #181818;

    color: white;
    display:flex;
`
const Contenedor = styled.div`
    margin: auto;
    display: flex;
    width: 60%;
`


const Header = () => {
    return (
        <StyledHeader>
            <Contenedor>
                <h4>
                    <Badge variant="warning">innoMDB</Badge>
                </h4>
                <Badge variant="outline-light" style={{ display: "flex", cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faBars} style={{ fontSize: "30px" }} /><p style={{ fontSize: "20px", paddingLeft: "5px", margin: "auto" }}>Menu</p>
                </Badge>
                <div className="contenedorBusqueda w-50 mt-auto mb-auto">
                    <input placeholder="Que estás buscando?" style={{ width: "90%" }}></input>
                    <button style={{ backgroundColor: "black" }}><FontAwesomeIcon icon={faSearch} style={{ fontSize: "20px", color: "white" }} /></button>
                </div>
                <h4>
                    <Badge variant="warning">PREMIUM</Badge>
                </h4>
                <Badge variant="outline-light" style={{ display: "flex", cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faBookmark} style={{ fontSize: "20px" }} /><p style={{ fontSize: "15px", paddingLeft: "5px", margin: "auto" }}>Watchlist</p>
                </Badge>
                <Badge variant="outline-light" style={{ display: "flex", cursor: "pointer" }}>
                    <p style={{ fontSize: "15px", paddingLeft: "5px", margin: "auto" }}>Sign in</p>
                </Badge>
            </Contenedor>
        </StyledHeader >
    )
}

export default Header