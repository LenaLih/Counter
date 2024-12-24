type CountState = {
    count: number
};
const initialState = {
    count: 0,
}
export const countReducer = (state: CountState = initialState, action: ActionType): CountState => {
    switch (action.type) {
        case 'SET_COUNT':
            return {...state, count: action.payload}
        case 'INCREMENT':
            return {...state, count: state.count + 1}
        case 'RESET':
            return {...state, count: 0}
        default:
            return state;
    }
}

export const setCountAC = (value: number) => {
    return {type: 'SET_COUNT', payload: value} as const;
}
export const incrementCountAC = () => {
    return {type: 'INCREMENT'} as const;
}
export const resetCountAC = () => {
    return {type: 'RESET'} as const;
}
export type CountActionType = ReturnType<typeof setCountAC>
export type IncrementCountActionType = ReturnType<typeof incrementCountAC>
export type ResetCountActionType = ReturnType<typeof resetCountAC>
type ActionType = CountActionType | IncrementCountActionType | ResetCountActionType