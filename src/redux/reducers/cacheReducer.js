const initialState = { cache: JSON.parse(localStorage.getItem('InnoMDB')), loading: true, error: false, data: null }

const cacheReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {

        case 'SET_CACHE':
            return { ...state, cache: { ...state.cache, ...payload.cache }, data: payload.data, loading: false }
        case 'LOADING':
            return { ...state, loading: true, error: false, data: null }
        case 'FETCH_ERROR':
            return { ...state, loading: false, error: payload }
        case 'SET_MOVIE':
            return { ...state, loading: false, data: payload }
        default:
            return state
    }
}

export default cacheReducer