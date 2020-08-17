import { configureStore } from "@reduxjs/toolkit";

import itemsReducer from "./itemsReducer";
import globalReducer from "./globalReducer";
import { logger, crashReporter } from "./middlewares";

export const store = configureStore({
    reducer: {
        itemsReducer,
        globalReducer,
    },
    middleware: [logger, crashReporter],
});
