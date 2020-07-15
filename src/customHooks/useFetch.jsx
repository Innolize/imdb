import { useEffect, useReducer } from 'react'

const initialState = { loading: true, data: null, error: null }

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

export const useFetchReducer = (fetchCallback, opcional) => {
    const [state, dispatch] = useReducer(fetchReducer, initialState);

    useEffect(() => {
        const test = async () => {
            dispatch({ type: "LOAD" })
            try {
                debugger
                const data = await fetchCallback(opcional)
                debugger
                dispatch({ type: "SUCCESS", payload: data })
            } catch (error) {
                dispatch({ type: "ERROR" })
            }
        }
        test()
    }, [fetchCallback])
    return state
}