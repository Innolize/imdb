import React, { createContext, useReducer, useEffect } from 'react'

export const CacheContext = createContext();
CacheContext.displayName = 'Cache';

const cacheReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {

        case 'SET_CACHE':
            return { ...state, [payload.key]: payload.value }

        default:
            return state
    }
}

export function CacheProvider({ children }) {
    const [state, dispatch] = useReducer(
        cacheReducer,
        JSON.parse(localStorage.getItem('InnoMDB'))

    )

    useEffect(() => {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('InnoMDB', serializedState);
    }, [state])

    return <CacheContext.Provider value={{ state, dispatch }}>{children}</CacheContext.Provider>
}
