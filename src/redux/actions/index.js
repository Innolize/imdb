export const setCache = (payload) => 
    ({
        type: "SET_CACHE",
        payload: { [payload.key]: payload.value }
    })
