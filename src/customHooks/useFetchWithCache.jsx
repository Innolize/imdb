import { useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCache } from '../redux/actions'

const initialState = { loading: true, data: null, error: null }

const fetchReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'SUCCESS':
            return { ...state, loading: false, data: payload, error: null }
        case 'ERROR':
            return { ...state, loading: false, error: payload }
        default:
            return state
    }
}

const useFetchReducerWithCache = (fetchCallback, fetchArguments) => {
    const [state, dispatch] = useReducer(fetchReducer, initialState);
    const cacheDispatch = useDispatch()
    const cacheState = useSelector(state => state)

    useEffect(() => {
        const fetchAPI = async () => {

            if (cacheState && cacheState[fetchArguments]) {
                dispatch({ type: 'SUCCESS', payload: cacheState[fetchArguments] })
                return
            }
            try {
                const data = await fetchCallback(fetchArguments)
                debugger
                cacheDispatch(setCache({ key: fetchArguments, value: data }))
                localStorage.setItem("InnoMDB", JSON.stringify({ ...cacheState, [fetchArguments]: data }))


            } catch (error) {
                dispatch({ type: 'ERROR' })
            }
        }
        fetchAPI()
    }, [fetchArguments, cacheState, fetchCallback, cacheDispatch])
    return state
}

export default useFetchReducerWithCache