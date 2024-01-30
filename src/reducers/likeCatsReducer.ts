const initialState = [] as any
type ActionType = AddCatType | DeleteCatType

export const likeCatsReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "ADD-CAT": {
            const newCat = {
                id: action.payload.id,
                url: action.payload.url
            }
            return [...state, newCat]
        }
        case "DELETE-CAT": {
            return state.filter((item: any) => action.payload.id !== item.id)
        }
        default:
            return state
    }
}

export type AddCatType = ReturnType<typeof addCat>
export type DeleteCatType = ReturnType<typeof deleteCat>
export const addCat = (id: string | undefined, url: string | undefined) => {
    return {
        type: 'ADD-CAT',
        payload: {id, url}
    } as const
}

export const deleteCat = (id: string | undefined) => {
    return {
        type: 'DELETE-CAT',
        payload: {id}
    } as const
}