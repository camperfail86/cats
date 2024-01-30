type initialState = any

export const catsReducer = (state: initialState, action: any) => {
    switch (action.type) {
        case "APP/SET-INITIALIZED": {
            return {...state, initialized: action.payload.initialized}
        }
        default:
            return state
    }
}

export type SetErrorType = ReturnType<typeof setErrorAC>
export const setErrorAC = (error: string | null) => {
    return {
        type: 'APP/SET-ERROR',
        payload: {error}
    } as const
}