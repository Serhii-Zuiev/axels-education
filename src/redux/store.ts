import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import { default as itemsReducer, sagaWatcher } from "./itemsReducer";
import { default as globalReducer } from "./globalReducer";

const rootReducer = combineReducers({
    itemsReducer,
    globalReducer,
});

const saga = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    compose(applyMiddleware(saga), composeWithDevTools(applyMiddleware()))
);

saga.run(sagaWatcher);

export type rootStateType = ReturnType<typeof rootReducer>;
