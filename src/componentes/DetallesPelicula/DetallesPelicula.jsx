import React from 'react';
import styled from '@emotion/styled';
import { useParams, NavLink } from 'react-router-dom';
import { useFetchReducer } from '../../customHooks/useFetch';
import { buscarPeliculaPorID } from '../../service/API/obtenerDatosAPI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faStar } from '@fortawesome/free-solid-svg-icons';
import Trailer from './Trailer';

const MainInfo = styled.div`
    
`
const ContenedorPortada = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const ImagenPortada = styled.img`
    height: 480px;
    padding-right: 5px;
`

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
    float: right;
    position: relative;
`

export const Pelicula = () => {
    debugger
    const { idPelicula } = useParams()
    const { data, loading, error } = useFetchReducer(buscarPeliculaPorID, idPelicula)

    if (loading)
        return (
            <div>cargando</div>
        )

    if (error)
        return (
            <div>error</div>
        )

    if (data)
        console.log(data)
    return (
        <div>
            <MainInfo>
                <HeaderInfo>
                    <HeaderLinks to={`/fullcast/${data.id}`}>FULL CAST</HeaderLinks><span>|</span><HeaderLinks to={`/reviews${data.id}`}>USER REVIEWS</HeaderLinks><span>|</span><HeaderLinks to={"/pro"}>INNOPRO</HeaderLinks><span>|</span><HeaderLinks to={"www.google.com"}>SHARE</HeaderLinks>
                </HeaderInfo>
                <div style={{ display: "flex", paddingBottom: "20px", paddingLeft: "20px" }}>
                    <FontAwesomeIcon icon={faBookmark} style={{ height: "50px", width: "40px", color: "gray" }} />
                    <div style={{ margin: "0px 20px 0px 20px" }}>
                        <h1 style={{ color: "white" }}>{`${data.original_title}`} <a style={{ fontSize: "24px", color: "gray" }}>({new Date(data.release_date).getFullYear()})</a></h1>
                        <div style={{ display: "flex" }}>
                            <InfoSubtitulo>+18: {data.adult ? "Yep" : "Nope"}</InfoSubtitulo><InfoSubtitulo>|</InfoSubtitulo> <InfoSubtitulo>{data.runtime}m</InfoSubtitulo> <InfoSubtitulo>|</InfoSubtitulo> {data.genres.map((x, i) => <InfoSubtitulo key={x.id}>{x.name},</InfoSubtitulo>)} <InfoSubtitulo>|</InfoSubtitulo> <InfoSubtitulo>{data.release_date}</InfoSubtitulo>
                        </div>
                    </div>
                    <ContainerScore>
                        <div style={{display:"flex"}}>
                            <FontAwesomeIcon icon={faStar} style={{ height: "30px", width: "30px", color: "#E4BB24" }}></FontAwesomeIcon>
                            <div>
                                <strong><span style={{ fontSize: "24px" }}>{data.vote_average}</span></strong><span>/10</span>
                            </div>

                            <a>{data.vote_count}</a>
                        </div>
                    </ContainerScore>

                </div>


            </MainInfo>
            <ContenedorPortada>
                <ImagenPortada src={`https://image.tmdb.org/t/p/original${data.poster_path}`} />
                <Trailer id={data.id} />

            </ContenedorPortada>
        </div >
    )
}

export default Pelicula