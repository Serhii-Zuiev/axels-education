import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    requestFetchItem,
    requestPostItem,
    requestPatchItem,
    requestDeleteItem,
} from "../redux/itemsReducer";
import {
    startLoading,
    stopLoading,
    showAlert,
    hideAlert,
    getErrorMassege,
} from "../redux/globalReducer";
import { rootStateType } from "../redux/store";


const App = () => {
    const dispatch = useDispatch();
    const { isLoading, isAlertShown } = useSelector(
        (state: rootStateType) => state.globalReducer
    );

    const style = {
        padding: "10px",
        fontSize: "22px",
        margin: "10px",
    };

    const item = {
        userId: 444,
        id: 555,
        title: "string",
        body: "string",
    };

    return (
        <>
            <button onClick={() => dispatch(requestFetchItem())} style={style}>
                requestFetchItem
            </button>

            <button
                onClick={() => dispatch(requestPostItem(item))}
                style={style}
            >
                requestPostItem
            </button>

            <button
                onClick={() =>
                    dispatch(requestPatchItem({ item: item, id: 5 }))
                }
                style={style}
            >
                requestPatchItem
            </button>

            <button
                onClick={() => dispatch(requestDeleteItem({ id: 3 }))}
                style={style}
            >
                requestDeleteItem
            </button>

            <hr />
            {isLoading && <h1 style={{ color: "green" }}>LOADING!!!</h1>}
            {isAlertShown && <h1 style={{ color: "tomato" }}>ALERT!!!</h1>}
            <hr />

            <button onClick={() => dispatch(startLoading())} style={style}>
                startLoading
            </button>

            <button onClick={() => dispatch(stopLoading())} style={style}>
                stopLoading
            </button>

            <button onClick={() => dispatch(showAlert())} style={style}>
                showAlert
            </button>

            <button onClick={() => dispatch(hideAlert())} style={style}>
                hideAlert
            </button>

            <button
                onClick={() => dispatch(getErrorMassege("kapoot..."))}
                style={style}
            >
                getErrorMassege
            </button>
        </>
    );
};

export default App;
