import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { default as itemsReducer, sagaWatcher } from "./itemsReducer";
import globalReducer from "./globalReducer";
import { logger } from "./middlewares";

const saga = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        itemsReducer,
        globalReducer,
    },
    middleware: [saga, logger],
});

saga.run(sagaWatcher);
