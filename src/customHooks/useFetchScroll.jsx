import { useEffect, useReducer, useContext } from 'react'
import { CacheContext } from '../CacheContext'

const initialState = { loading: true, data: [], error: null, busqueda: '' }

const fetchReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'BUSQUEDA':
            return { ...state, data: [], busqueda: payload }
        case 'SUCCESS':
            return { ...state, loading: false, data: [...state.data, ...payload], error: null }
        case 'ERROR':
            return { ...state, loading: false, data: [], error: payload }
        case 'LOAD':
            return { ...state, loading: true, error: null }
        default:
            return state
    }
}

export const useFetchReducerAcumulativo = (fetchCallback, valorBusqueda, valorOpcional = '') => {
    const cache = useContext(CacheContext)
    const [state, dispatch] = useReducer(fetchReducer, initialState);

    useEffect(() => {
        if (cache.state !== null && cache.state[valorBusqueda + valorOpcional]) {
            dispatch({ type: "SUCCESS", payload: cache.state[`${valorBusqueda}${valorOpcional}`] })
            return
        }
        const fetchAPI = async () => {
            if (state.busqueda !== valorBusqueda) {
                dispatch({ type: 'BUSQUEDA', payload: valorBusqueda })
            }

            dispatch({ type: "LOAD" })
            try {
                const data = await fetchCallback(valorBusqueda, valorOpcional)
                dispatch({ type: "SUCCESS", payload: data.results })
                cache.dispatch({ type: 'SET_CACHE', payload: { key: `${valorBusqueda}${valorOpcional}`, value: data.results } })
            } catch (error) {
                dispatch({ type: "ERROR" })
            }
        }
        fetchAPI()
    }, [fetchCallback, valorBusqueda, valorOpcional, cache])
    return state
}