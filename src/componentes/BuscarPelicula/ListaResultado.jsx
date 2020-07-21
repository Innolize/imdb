import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'


const ImagenPrevia = styled.img`
    height:80px;
`


const ListaResultado = ({ data }) => {
    return (
        <table>
            <tbody>
                {data.map((x, i) =>

                    <tr key={i}>

                        <td>
                            <ImagenPrevia src={`https://image.tmdb.org/t/p/w200${x.poster_path}`} />
                            <div>{i}</div>
                        </td>
                        <td>
                            <NavLink to={`/movie/${x.id}`} >
                                <span>{x.title + ` (${x.release_date.split('-')[0]})`}</span>
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
