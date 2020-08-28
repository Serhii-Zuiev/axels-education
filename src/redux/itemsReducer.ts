import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import {
    itemsReducerTypes,
    requestActionTypes,
    succesActionTypes,
    errorActionTypes,
    Iitem,
    IitemToDelOrPatch,
    IitemsState,
} from "./types";
import { startLoading, stopLoading, getErrorMassege } from "./globalReducer";

//-------ACTION CREATORS-------//
//get
export const requestFetchItem = (item?: Iitem): requestActionTypes => ({
    type: itemsReducerTypes.REQ_FETCH_ITEMS,
    payload: item,
});
export const succesFetchItem = (items: IitemsState): succesActionTypes => ({
    type: itemsReducerTypes.OK_FETCH_ITEMS,
    payload: items,
});
export const errorFetchItem = (error: any): errorActionTypes => ({
    type: itemsReducerTypes.ERR_FETCH_ITEMS,
    payload: error,
});

//post
export const requestPostItem = (item: Iitem): requestActionTypes => ({
    type: itemsReducerTypes.REQ_POST_ITEMS,
    payload: item,
});
export const succesPostItem = (item: Iitem): succesActionTypes => ({
    type: itemsReducerTypes.OK_POST_ITEMS,
    payload: { items: [item] },
});
export const errorPostItem = (error: any): errorActionTypes => ({
    type: itemsReducerTypes.ERR_POST_ITEMS,
    payload: error,
});

//patch
export const requestPatchItem = (item: IitemToDelOrPatch): requestActionTypes => ({
    type: itemsReducerTypes.REQ_PATCH_ITEMS,
    payload: item,
});
export const succesPatchItem = (item: Iitem): succesActionTypes => ({
    type: itemsReducerTypes.OK_PATCH_ITEMS,
    payload: { items: [item] },
});
export const errorPatchItem = (error: any): errorActionTypes => ({
    type: itemsReducerTypes.ERR_PATCH_ITEMS,
    payload: error,
});

//delete
export const requestDeleteItem = (item: IitemToDelOrPatch): requestActionTypes => ({
    type: itemsReducerTypes.REQ_DELETE_ITEMS,
    payload: item,
});
export const succesDeleteItem = (id: Iitem): succesActionTypes => ({
    type: itemsReducerTypes.OK_DELETE_ITEMS,
    payload: { items: [id] },
});
export const errorDeleteItem = (error: any): errorActionTypes => ({
    type: itemsReducerTypes.ERR_DELETE_ITEMS,
    payload: error,
});


//-------REDUCER-------//
const initialState: IitemsState = {
    items: [],
};

export default function itemsReducer(
    state = initialState,
    action: succesActionTypes
): IitemsState {
    switch (action.type) {
        case itemsReducerTypes.OK_FETCH_ITEMS:
            return {
                items: [...state.items, ...action.payload.items],
            };
        case itemsReducerTypes.OK_POST_ITEMS:
            return {
                items: [...state.items, ...action.payload.items],
            };
        case itemsReducerTypes.OK_PATCH_ITEMS:
            const itemToPatch = action.payload.items[0];
            return {
                items: state.items.map((item: Iitem) =>
                    item.id === itemToPatch.id
                        ? { ...item, ...itemToPatch }
                        : item
                ),
            };
        case itemsReducerTypes.OK_DELETE_ITEMS:
            const itemIdToDel = action.payload.items[0].id;
            return {
                items: state.items.filter((i) => i.id !== itemIdToDel),
            };
        default:
            return state;
    }
}

//-------SAGA-------//
const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export function* sagaWatcher() {
    yield takeLatest(itemsReducerTypes.REQ_FETCH_ITEMS, itemsSagaWorker);
    yield takeLatest(itemsReducerTypes.REQ_POST_ITEMS, itemPostSagaWorker);
    yield takeLatest(itemsReducerTypes.REQ_PATCH_ITEMS, itemPatchSagaWorker);
    yield takeLatest(itemsReducerTypes.REQ_DELETE_ITEMS, itemDeleteSagaWorker);
    yield takeLatest(
        [
            itemsReducerTypes.ERR_DELETE_ITEMS,
            itemsReducerTypes.ERR_FETCH_ITEMS,
            itemsReducerTypes.ERR_PATCH_ITEMS,
            itemsReducerTypes.ERR_POST_ITEMS,
        ],
        apiErrorSagaWorker
    );
}

function* itemsSagaWorker() {
    try {
        yield put(startLoading());
        const data = yield call(fetchItems);
        yield put(succesFetchItem({ items: data }));
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

function* itemPostSagaWorker(action: requestActionTypes) {
    try {
        yield put(startLoading());
        const data: Iitem = yield call<typeof postItem>(
            postItem,
            action.payload!
        );
        yield put(succesPostItem(data));
        yield put(stopLoading());
    } catch (err) {
        yield put(errorPostItem(err));
    }
}
async function postItem(item: Iitem): Promise<Iitem> {
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

function* itemPatchSagaWorker(action: requestActionTypes) {
    try {
        yield put(startLoading());
        const data = yield call<typeof patchItem>(patchItem, action.payload!);
        yield put(succesPatchItem(data));
        yield put(stopLoading());
    } catch (err) {
        yield put(errorPatchItem(err));
    }
}
async function patchItem(payload: IitemToDelOrPatch) {
    const response = await axios({
        url: `${BASE_URL}/${payload.id}`,
        method: "patch",
        headers: {
            "content-type": "application/json",
        },
        data: payload.item,
    });
    return response.data;
}

function* itemDeleteSagaWorker(action: requestActionTypes) {
    try {
        yield put(startLoading());
        const data = yield call<typeof deleteItem>(deleteItem, action.payload!);
        yield put(succesDeleteItem(data));
        yield put(stopLoading());
    } catch (err) {
        yield put(errorDeleteItem(err));
    }
}
async function deleteItem(payload: IitemToDelOrPatch) {
    const id = payload.id;
    const response = await axios({
        url: `${BASE_URL}/${id}`,
        method: "delete",
        headers: {
            "content-type": "application/json",
        },
    });
    const res = { id, data: response.data };
    return res;
}

function* apiErrorSagaWorker(action: errorActionTypes) {
    yield put(getErrorMassege(action.payload));
    yield put(stopLoading());
    console.warn(action.payload);
}
