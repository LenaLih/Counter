
function getInitialMaxValue() {
    const valueString = localStorage.getItem("counterMax");
    return valueString ? JSON.parse(valueString) : 0;
}
function getInitialStartValue() {
    const valueString = localStorage.getItem("counterStart");
    return valueString ? JSON.parse(valueString) : 0;
}
type SettingsState = {
    maxValue: number;
    startValue: number;
    invalid: boolean;
    isInputChanged: boolean;
};
const initialState: SettingsState = {
    maxValue: getInitialMaxValue(),
    startValue: getInitialStartValue(),
    invalid: false,
    isInputChanged: false,
}
export const settingsReducer = (state: SettingsState = initialState, action: ActionTypes): SettingsState => {
    switch (action.type) {
        case 'MAX_VALUE':
            localStorage.setItem("counterMax", JSON.stringify(action.payload))
            return {...state, maxValue: action.payload};
        case 'START_VALUE':
            localStorage.setItem("counterStart", JSON.stringify(action.payload))
            return {...state, startValue: action.payload};
        case 'INVALID':
            return {...state, invalid: action.payload};
        case 'IS_INPUT_CHANGED':
            return {...state, isInputChanged: action.payload};
        default:
            return state;
    }
}
export const maxValueAC = (value: number) => {
    return {type: 'MAX_VALUE', payload: value} as const;
}
export const startValueAC = (value: number) => {
    return {type: 'START_VALUE', payload: value} as const;
}
export const invalidAC = (value: boolean) => {
    return {type: 'INVALID', payload: value} as const;
}
export const isInputChangedAC = (value: boolean) => {
    return {type: 'IS_INPUT_CHANGED', payload: value} as const;
}

export  type MaxValueActionType = ReturnType<typeof maxValueAC>
export  type StartValueActionType = ReturnType<typeof startValueAC>
export  type InvalidActionType = ReturnType<typeof invalidAC>
export  type IsInputChangeActionType = ReturnType<typeof isInputChangedAC>

type ActionTypes = MaxValueActionType | StartValueActionType | InvalidActionType | IsInputChangeActionType;