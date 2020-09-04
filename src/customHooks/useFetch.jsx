import { useEffect, useReducer } from 'react'

const initialState = { loading: true, data: [], error: null }

const fetchReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'SUCCESS':
            return { loading: false, data: payload, error: null }
        case 'ERROR':
            return { loading: false, data: null, error: payload }
        case 'LOAD':
            return { loading: true, data: null, error: null }
        default:
            return state
    }
}

export const useFetchReducer = (fetchCallback, opcional, opcional2) => {
    const [state, dispatch] = useReducer(fetchReducer, initialState);

    useEffect(() => {
        const fetchAPI = async () => {
            dispatch({ type: "LOAD" })
            try {
                const data = await fetchCallback(opcional, opcional2)
                dispatch({ type: "SUCCESS", payload: data })

            } catch (error) {
                dispatch({ type: "ERROR" })
            }
        }
        fetchAPI()
    }, [fetchCallback, opcional, opcional2])
    return state
}