import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '../redux/actions'

const useFetchReducerWithCache = (fetchCallback, fetchArguments) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    useEffect(() => {
        dispatch(fetchMovie(fetchCallback, fetchArguments))
    }, [fetchCallback, fetchArguments, dispatch])
    return state
}

export default useFetchReducerWithCache




