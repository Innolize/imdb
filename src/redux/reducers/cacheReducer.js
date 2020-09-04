const initialState = JSON.parse(localStorage.getItem('InnoMDB'))

const cacheReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {

        case 'SET_CACHE':
            return { ...state, ...payload }

        default:
            return state
    }
}

export default cacheReducer