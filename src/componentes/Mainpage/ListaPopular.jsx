import React from 'react';
import { obtenerPeliculasPopulares } from '../../service/API/obtenerDatosAPI';
import ListaDePeliculas from './ListaDePeliculas';


const ListaPopular = () => {
    return (
        <ListaDePeliculas callbackAPI={obtenerPeliculasPopulares} tituloLista="Popular movies" subTituloLista="Most popular movies" />
    )
}

export default ListaPopular