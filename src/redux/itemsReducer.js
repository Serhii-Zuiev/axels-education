import { createReducer, createAction } from "@reduxjs/toolkit";
import axios from "axios";
import { takeEvery, put, call } from "redux-saga/effects";

import { startLoading, stopLoading, getErrorMassege } from "./globalReducer";


export const requestFetchItem = createAction("items/REQ_FETCH_ITEMS");
export const succesFetchItem = createAction("items/OK_FETCH_ITEMS");
export const errorFetchItem = createAction("items/ERR_FETCH_ITEMS");

export const requestPostItem = createAction("items/REQ_POST_ITEMS");
export const succesPostItem = createAction("items/OK_POST_ITEMS");
export const errorPostItem = createAction("items/ERR_POST_ITEMS");

export const requestPatchItem = createAction("items/REQ_PATCH_ITEMS");
export const succesPatchItem = createAction("items/OK_PATCH_ITEMS");
export const errorPatchItem = createAction("items/ERR_PATCH_ITEMS");

export const requestDeleteItem = createAction("items/REQ_DELETE_ITEMS");
export const succesDeleteItem = createAction("items/OK_DELETE_ITEMS");
export const errorDeleteItem = createAction("items/ERR_DELETE_ITEMS");



const innitialState = {
    items: []
};

const itemsReducer = createReducer(innitialState, {
    [succesFetchItem]: (state, { payload }) => {
        state.items = payload;
    },
    [succesPostItem]: (state, { payload }) => {
        state.items.push(payload);
    },
    [succesPatchItem]: (state, { payload }) => {
        state.items = state.items.map((item) => item.id === payload.id ? payload : item);
    },
    [succesDeleteItem]: (state, { payload }) => {
        state.items = state.items.filter((item) => item.id !== payload.id);
    },
});

export default itemsReducer;



// SAGA
const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export function* sagaWatcher() {
    yield takeEvery(requestFetchItem, itemsSagaWorker);
    yield takeEvery(requestPostItem, itemPostSagaWorker);
    yield takeEvery(requestPatchItem, itemPatchSagaWorker);
    yield takeEvery(requestDeleteItem, itemDeleteSagaWorker);
    yield takeEvery([errorFetchItem, errorPostItem, errorPatchItem, errorDeleteItem], apiErrorSagaWorker);
}

function* itemsSagaWorker() {
    try {
        yield put(startLoading());
        const data = yield call(fetchItems);
        yield put(succesFetchItem(data));
        yield put(stopLoading());
    } catch (err) {
        yield put(errorFetchItem(err));
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
        yield put(errorPostItem(err));
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


function* itemPatchSagaWorker({ payload }) {
    try {
        yield put(startLoading());
        const data = yield call(patchItem, payload);
        yield put(succesPatchItem(data));
        yield put(stopLoading());
    } catch (err) {
        yield put(errorPatchItem(err));
    }
}
async function patchItem({ id, item }) {
    const response = await axios({
        url: `${BASE_URL}/${id}`,
        method: "patch",
        headers: {
            "content-type": "application/json",
        },
        data: item,
    });
    return response.data;
}


function* itemDeleteSagaWorker({ payload }) {
    try {
        yield put(startLoading());
        const data = yield call(deleteItem, payload);
        yield put(succesDeleteItem(data));
        yield put(stopLoading());
    } catch (err) {
        yield put(errorDeleteItem(err));
    }
}
async function deleteItem(id) {
    const response = await axios({
        url: `${BASE_URL}/${id}`,
        method: "delete",
        headers: {
            "content-type": "application/json",
        }
    });
    const res = {id, data: response.data}
    return res;
}

function* apiErrorSagaWorker({ payload }) {
    yield put(getErrorMassege(payload));
    yield put(stopLoading());
    console.warn(payload);
}
