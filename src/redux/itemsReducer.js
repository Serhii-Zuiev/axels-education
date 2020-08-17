import { createReducer, createAction } from "@reduxjs/toolkit";
import axios from "axios";
import { takeEvery, put, call } from "redux-saga/effects";

import { startLoading, stopLoading } from "./globalReducer";

export const requestFetchItem = createAction("REQ_FETCH_ITEMS");
export const succesFetchItem = createAction("OK_FETCH_ITEMS");
export const errorFetchItem = createAction("ERR_FETCH_ITEMS");

export const requestPostItem = createAction("REQ_POST_ITEMS");
export const succesPostItem = createAction("OK_POST_ITEMS");
export const errorPostItem = createAction("ERR_POST_ITEMS");

export const requestPatchItem = createAction("REQ_PATCH_ITEMS");
export const succesPatchItem = createAction("OK_PATCH_ITEMS");
export const errorPatchItem = createAction("ERR_PATCH_ITEMS");

export const requestDeleteItem = createAction("REQ_DELETE_ITEMS");
export const succesDeleteItem = createAction("OK_DELETE_ITEMS");
export const errorDeleteItem = createAction("ERR_DELETE_ITEMS");

const innitialState = {
    items: [],
    filter: "",
};

const itemsReducer = createReducer(innitialState, {
    [succesFetchItem]: (state, { payload }) => {
        state.items = payload;
    },
    [succesPostItem]: (state, { payload }) => {
        state.items.push(payload);
    },
});

export default itemsReducer;






// SAGA
const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

// GET POST PATCH DELETE

export function* sagaWatcher() {
    yield takeEvery(requestFetchItem, itemsSagaWorker);
    yield takeEvery(requestPostItem, itemPostSagaWorker);
}

function* itemsSagaWorker() {
    try {
        yield put(startLoading());
        const data = yield call(fetchItems);
        yield put(succesFetchItem(data));
        yield put(stopLoading());
    } catch (err) {
        console.warn(err);
        yield put(errorFetchItem(err));
        yield put(stopLoading());
    }
}
async function fetchItems() {
    const response = await axios({
        url: BASE_URL,
        method: "get",
        headers: {
            "content-type": "application/json",
        },
    });
    return response.data;
}


function* itemPostSagaWorker({ payload }) {
    try {
        yield put(startLoading());
        const data = yield call(postItem, payload);
        yield put(succesPostItem(data));
        yield put(stopLoading());
    } catch (err) {
        console.warn(err);
        yield put(errorPostItem(err));
        yield put(stopLoading());
    }
}
async function postItem(item) {
    const response = await axios({
        url: BASE_URL,
        method: "post",
        headers: {
            "content-type": "application/json",
        },
        data: item,
    });
    return response.data;
}

