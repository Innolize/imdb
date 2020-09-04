import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

const ImagenPrevia = styled.img`
    height:80px;
`
const NoImagen = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
    width: 53.33px;
    background-color: gray;
    color: black;

`

const ListaResultado = ({ data }) => {
    return (
        <table>
            <tbody>
                {data.map((x, i) =>
                    <tr key={i}>
                        <td>
                            {x.poster_path ? <ImagenPrevia src={`https://image.tmdb.org/t/p/w200${x.poster_path}`} /> : <NoImagen><span>No Image</span></NoImagen>}
                        </td>
                        <td>
                            <NavLink to={`/movie/${x.id}`} >
                                <span>{x.title} {x.release_date ? `(${x.release_date.split('-')[0]})` : ''}</span>
                                <br></br>
                                <span>{x.original_title} </span>
                            </NavLink>
                        </td>
                    </tr>
                )}
            </tbody>
        </table >
    )
}

export default ListaResultado
