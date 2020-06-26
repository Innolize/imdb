import axios from 'axios';

const keyAutorizacion = "api_key=1a6d47a34d4ae971ae90e47faf543041"
const URLBase = "https://api.themoviedb.org/"

export async function obtenerEstrenos() {
    const respuesta = await axios(`${URLBase}3/movie/upcoming?${keyAutorizacion}`)
    return respuesta.data.results
}

export async function obtenerPeliculasTrending() {
    const respuesta = await axios(`${URLBase}3/trending/movie/week?${keyAutorizacion}`)
    return respuesta.data.results
}