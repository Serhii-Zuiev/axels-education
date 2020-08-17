import { createReducer, createAction } from "@reduxjs/toolkit";

export const addItem = createAction("ADD_ITEM");
export const deleteItem = createAction("DELETE_ITEM");
export const toggleItem = createAction("TOGGLE_ITEM");
export const filterItems = createAction("FILTER_ITEM");

const innitialState = {
    items: [],
    filter: "",
};

const itemsReducer = createReducer(innitialState, {
    [addItem]: (state, { payload }) => {
        state.items.push(payload);
    },
    [deleteItem]: (state, { payload }) => {
        state.items = state.items.filter((item) => item.id !== payload.id);
    },
    [toggleItem]: (state, { payload }) => {
        const item = state.items.find((item) => item.id === payload.id);
        item.isToggled = !item.isToggled;
    },
    [filterItems]: (state, { payload }) => {
        state.filter = payload;
    },
});

export default itemsReducer;
