import { globalReducerTypes, IglobalState, globalActionTypes } from "./types";

//-------ACTION CREATORS-------//
export const startLoading = (): globalActionTypes => ({
    type: globalReducerTypes.START_LOADING,
});

export const stopLoading = (): globalActionTypes => ({
    type: globalReducerTypes.STOP_LOADING,
});

export const showAlert = (): globalActionTypes => ({
    type: globalReducerTypes.SHOW_ALERT,
});

export const hideAlert = (): globalActionTypes => ({
    type: globalReducerTypes.HIDE_ALERT,
});

export const getErrorMassege = (err: string): globalActionTypes => ({
    type: globalReducerTypes.ERROR,
    payload: err,
});


//-------REDUCER-------//
const initialState: IglobalState = {
    isLoading: false,
    isAlertShown: false,
    error: "",
};

export default function globalReducer(
    state: IglobalState = initialState,
    action: globalActionTypes
): IglobalState {
    switch (action.type) {
        case globalReducerTypes.START_LOADING:
            return { ...state, isLoading: true };

        case globalReducerTypes.STOP_LOADING:
            return { ...state, isLoading: false };

        case globalReducerTypes.ERROR:
            return { ...state, error: action.payload };

        case globalReducerTypes.SHOW_ALERT:
            return { ...state, isAlertShown: true };

        case globalReducerTypes.HIDE_ALERT:
            return { ...state, isAlertShown: false };

        default:
            return state;
    }
}
