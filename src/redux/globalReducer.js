import { createReducer, createAction } from "@reduxjs/toolkit";

export const startLoading = createAction("START_LOADING");
export const stopLoading = createAction("STOP_LOADING");
export const showAlert = createAction("SHOW_ALERT");
export const hideAlert = createAction("HIDE_ALERT");
export const getErrorMassege = createAction("ERROR");

const innitialState = {
    isLoading: false,
    isAlertShown: false,
    error: null,
};

const globalReducer = createReducer(innitialState, {
    [startLoading]: (state) => {
        state.isLoading = true;
    },
    [stopLoading]: (state) => {
        state.isLoading = false;
    },
    [showAlert]: (state) => {
        state.isAlertShown = true;
    },
    [hideAlert]: (state) => {
        state.isAlertShown = false;
    },
    [getErrorMassege]: (state, { payload }) => {
        state.error = payload;
    },
});

export default globalReducer;
