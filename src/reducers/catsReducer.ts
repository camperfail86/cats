const initialState = [] as any

export const catsReducer = (state = initialState, action: SetCatsType) => {
    switch (action.type) {
        case "SET-CATS": {
            return action.payload.data
        }
        default:
            return state
    }
}

export type SetCatsType = ReturnType<typeof setCats>
export const setCats = (data: any) => {
    return {
        type: 'SET-CATS',
        payload: {data}
    } as const
}