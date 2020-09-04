import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faStar } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const HeaderInfo = styled.div`
    display: inline-block;
    padding: 10px 10px 15px 20px;
`

const HeaderLinks = styled(NavLink)`
    font-size: 13px;
    padding: 0px 20px 0px 0px;
    color: gray;
    &:hover
`
const InfoSubtitulo = styled.span`
    color:gray;
    padding: 0px 5px 0px 5px;
    font-size: 13px;
`

const ContainerScore = styled.div`
    display:flex;
    width: 200px;
    color: white;
`
const ContenedorEstilado = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 0px 0px 20px 20px;
    position: relative;
`
const ContainerTitulo = styled.div`
    display:flex;
    
`
const ContenedorIzquierdo = styled.div`
    display:flex;
 `
const ContenedorDerecho = styled.div`
    border-left: 1px solid gray;
    margin-left: 10px;
    display: flex;
    color: gray:
 `

const InfoTitulo = ({ data }) => {
    return (
        <>
            <HeaderInfo>
                <HeaderLinks to={`/fullcast/${data.id}`}>FULL CAST</HeaderLinks><span>|</span><HeaderLinks to={`/reviews${data.id}`}>USER REVIEWS</HeaderLinks><span>|</span><HeaderLinks to={"/pro"}>INNOPRO</HeaderLinks><span>|</span><HeaderLinks to={"/"}>SHARE</HeaderLinks>
            </HeaderInfo>
            <ContenedorEstilado>
                <ContainerTitulo >
                    <FontAwesomeIcon icon={faBookmark} style={{ height: "50px", width: "40px", color: "gray" }} />
                    <div style={{ padding: '0px 10px 0px 10px' }}>
                        <h1 style={{ color: "white" }}>{`${data.original_title}`} <a href='google.com' style={{ fontSize: "24px", color: "gray" }}>({new Date(data.release_date).getFullYear()})</a></h1>
                        <div style={{ display: "flex" }}>
                            {data.adult && <InfoSubtitulo> +18 |</InfoSubtitulo>} <InfoSubtitulo>{data.runtime}m</InfoSubtitulo> <InfoSubtitulo>|</InfoSubtitulo><InfoSubtitulo>{data.genres.map(x => x.name).join()}</InfoSubtitulo> <InfoSubtitulo>|</InfoSubtitulo> <InfoSubtitulo>{data.release_date}</InfoSubtitulo>
                        </div>
                    </div>
                </ContainerTitulo>
                <ContainerScore>
                    <FontAwesomeIcon icon={faStar} style={{ height: "40px", width: "40px", color: "#E4BB24" }}></FontAwesomeIcon>
                    <ContenedorIzquierdo>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'flex-end' }}><strong><span style={{ fontSize: "24px" }}>{data.vote_average}</span></strong> <span>/10</span></div>
                            <div>{data.vote_count}</div>
                        </div>
                    </ContenedorIzquierdo>
                    <ContenedorDerecho>
                        <FontAwesomeIcon icon={faStar} style={{ height: "40px", width: "40px", color: 'gray' }}></FontAwesomeIcon>
                        <div >
                            Rate
                            this
                        </div>
                    </ContenedorDerecho>
                </ContainerScore>
            </ContenedorEstilado>
        </>
    )
}

export default InfoTitulo