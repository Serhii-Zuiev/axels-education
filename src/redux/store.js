import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { default as itemsReducer, sagaWatcher } from "./itemsReducer";
import globalReducer from "./globalReducer";
import { logger, crashReporter } from "./middlewares";

const saga = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        itemsReducer,
        globalReducer,
    },
    middleware: [saga, logger, crashReporter],
});

saga.run(sagaWatcher);
