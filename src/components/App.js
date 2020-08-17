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
} from "../redux/globalReducer";

const App = () => {
    const dispatch = useDispatch();
    const { isLoading, isAlertShown } = useSelector(
        (state) => state.globalReducer
    );

    const style = {
        padding: "10px",
        fontSize: "22px",
        margin: "10px",
    };

    return (
        <>
            <button onClick={() => dispatch(requestFetchItem())} style={style}>
            requestFetchItem
            </button>

            <button onClick={() => dispatch(requestPostItem(style))} style={style}>
            requestPostItem
            </button>
            <button onClick={() => dispatch()} style={style}>
                
            </button>
            <button onClick={() => dispatch()} style={style}>
                
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
                onClick={() => dispatch(new Error("kapoot..."))}
                style={style}
            >
                getErrorMassege
            </button>
        </>
    );
};

export default App;
