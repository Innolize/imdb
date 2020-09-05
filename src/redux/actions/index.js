export const fetchMovie = (fetchFunction, param) => {
    return async (dispatch, getState) => {
        const state = getState()
        if (state.cache && state.cache[param]) {
            dispatch({ type: "SET_MOVIE", payload: state.cache[param] })
            return
        }
        try {
            const data = await fetchFunction(param)
            localStorage.setItem("InnoMDB", JSON.stringify({ ...state.cache, [param]: data }))
            dispatch({ type: "SET_CACHE", payload: { cache: { ...state.cache, [param]: data }, data: data } })
        } catch (error) {
            console.log(error)
            dispatch({ type: "FETCH_ERROR", payload: error })
        }
    }
}

