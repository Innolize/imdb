import React from 'react';
import ListaDePeliculas from './ListaDePeliculas';
import { obtenerPeliculasTrending } from '../../service/API/obtenerDatosAPI';

const ListaTrending = () => {
    return (
        <ListaDePeliculas callbackAPI={obtenerPeliculasTrending} tituloLista="Trending" />
    )
}

export default ListaTrending