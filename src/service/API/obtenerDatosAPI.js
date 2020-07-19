import axios from 'axios';

const keyAutorizacion = "api_key=1a6d47a34d4ae971ae90e47faf543041"
const URLBase = "https://api.themoviedb.org/3/"

export async function obtenerEstrenos() {
    const respuesta = await axios(`${URLBase}movie/upcoming?${keyAutorizacion}`)
    return respuesta.data.results
}

export async function obtenerPeliculasTrending() {
    const respuesta = await axios(`${URLBase}trending/movie/week?${keyAutorizacion}`)
    return respuesta.data.results
}

export async function obtenerPeliculasPopulares() {
    const respuesta = await axios(`${URLBase}movie/popular?${keyAutorizacion}`)
    return respuesta.data.results
}

export async function obtenerActoresPopulares() {
    const respuesta = await axios(`${URLBase}person/popular?${keyAutorizacion}`)
    return respuesta.data.results
}

export async function buscarPeliculaPorID(id) {
    const respuesta = await axios(`${URLBase}movie/${id}?${keyAutorizacion}`)
    return respuesta.data
}

export async function buscarVideosPorId(id) {
    const respuesta = await axios(`${URLBase}movie/${id}/videos?${keyAutorizacion}`)
    return respuesta.data.results
}

export async function buscarCreditos(id) {
    const respuesta = await axios(`${URLBase}movie/${id}/credits?${keyAutorizacion}`)
    return respuesta.data
}
export async function buscarValor(valor) {
    const respuesta = await axios(`${URLBase}search/movie?${keyAutorizacion}&query=${valor}`)
    return respuesta
}