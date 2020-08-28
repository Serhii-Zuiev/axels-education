export const itemsReducerTypes = {
    REQ_FETCH_ITEMS: "items/REQ_FETCH_ITEMS",
    OK_FETCH_ITEMS: "items/OK_FETCH_ITEMS",
    ERR_FETCH_ITEMS: "items/ERR_FETCH_ITEMS",

    REQ_POST_ITEMS: "items/REQ_POST_ITEMS",
    OK_POST_ITEMS: "items/OK_POST_ITEMS",
    ERR_POST_ITEMS: "items/ERR_POST_ITEMS",

    REQ_PATCH_ITEMS: "items/REQ_PATCH_ITEMS",
    OK_PATCH_ITEMS: "items/OK_PATCH_ITEMS",
    ERR_PATCH_ITEMS: "items/ERR_PATCH_ITEMS",

    REQ_DELETE_ITEMS: "items/REQ_DELETE_ITEMS",
    OK_DELETE_ITEMS: "items/OK_DELETE_ITEMS",
    ERR_DELETE_ITEMS: "items/ERR_DELETE_ITEMS",
};

export const globalReducerTypes = {
    START_LOADING: "global/START_LOADING",
    STOP_LOADING: "global/STOP_LOADING",
    SHOW_ALERT: "global/SHOW_ALERT",
    HIDE_ALERT: "global/HIDE_ALERT",
    ERROR: "global/ERROR",
};

export interface Iitem {
    userId?: number;
    id: number;
    title?: string;
    body?: string;
}

export interface IitemsState {
    items: Iitem[];
}

export interface IglobalState {
    isLoading: boolean;
    isAlertShown: boolean;
    error: any;
}

export interface IitemToDelOrPatch {
    id: number;
    item?: Iitem;
}

//-----items Action Types-----//
interface requestFetchItem {
    type: typeof itemsReducerTypes.ERR_FETCH_ITEMS;
    payload?: Iitem;
}
interface succesFetchItem {
    type: typeof itemsReducerTypes.OK_FETCH_ITEMS;
    payload: IitemsState;
}
interface errorFetchItem {
    type: typeof itemsReducerTypes.ERR_FETCH_ITEMS;
    payload: any;
}
interface requestPostItem {
    type: typeof itemsReducerTypes.REQ_POST_ITEMS;
    payload: Iitem;
}
interface succesPostItem {
    type: typeof itemsReducerTypes.OK_POST_ITEMS;
    payload: IitemsState;
}
interface errorPostItem {
    type: typeof itemsReducerTypes.ERR_POST_ITEMS;
    payload: any;
}
interface requestPatchItem {
    type: typeof itemsReducerTypes.REQ_PATCH_ITEMS;
    payload: IitemToDelOrPatch;
}
interface succesPatchItem {
    type: typeof itemsReducerTypes.OK_PATCH_ITEMS;
    payload: IitemsState;
}
interface errorPatchItem {
    type: typeof itemsReducerTypes.REQ_PATCH_ITEMS;
    payload: any;
}
interface requestDeleteItem {
    type: typeof itemsReducerTypes.REQ_DELETE_ITEMS;
    payload: IitemToDelOrPatch;
}
interface succesDeleteItem {
    type: typeof itemsReducerTypes.OK_DELETE_ITEMS;
    payload: IitemsState;
}
interface errorDeleteItem {
    type: typeof itemsReducerTypes.ERR_DELETE_ITEMS;
    payload: any;
}

//-----global Action Types-----//
interface startLoading {
    type: typeof globalReducerTypes.START_LOADING;
    payload?: null;
}
interface stopLoading {
    type: typeof globalReducerTypes.STOP_LOADING;
    payload?: null;
}
interface showAlert {
    type: typeof globalReducerTypes.HIDE_ALERT;
    payload?: null;
}
interface hideAlert {
    type: typeof globalReducerTypes.HIDE_ALERT;
    payload?: null;
}
interface getErrorMassege {
    type: typeof globalReducerTypes.ERROR;
    payload: string;
}

export type requestActionTypes =
    | requestFetchItem
    | requestPostItem
    | requestPatchItem
    | requestDeleteItem;

export type succesActionTypes =
    | succesFetchItem
    | succesPostItem
    | succesPatchItem
    | succesDeleteItem;

export type errorActionTypes =
    | errorFetchItem
    | errorPostItem
    | errorPatchItem
    | errorDeleteItem;

export type globalActionTypes =
    | startLoading
    | stopLoading
    | showAlert
    | hideAlert
    | getErrorMassege;
