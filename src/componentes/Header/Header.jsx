import React from 'react';
import styled from '@emotion/styled';
import { Badge } from 'react-bootstrap';
import { faBars, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Buscador from './Buscador';

const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    height:50px;
    width:100%;
    background-color: #181818;
    color: white;

`
const Contenedor = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px 50px 0px 50px;
    width:100%;
    @media (min-width: 1600px) {
        width: 60%;
    }
`

const Header = () => {

    return (
        <StyledHeader>
            <Contenedor>
                <h4>
                    <Link to="/">
                        <Badge variant="warning">innoMDB</Badge>
                    </Link>
                </h4>
                <Badge variant="outline-light" style={{ display: "flex", cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faBars} style={{ fontSize: "30px" }} /><p style={{ fontSize: "20px", paddingLeft: "5px", margin: "auto" }}>Menu</p>
                </Badge>

                <Buscador></Buscador>

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