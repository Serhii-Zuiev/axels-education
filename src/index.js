import React from "react";
import ReactDOM from "react-dom";

import { default as AppContextProvider } from "./components/AppContextProvider";
import { App } from "./components";

ReactDOM.render(
    <React.StrictMode>
        <AppContextProvider>
            <App />
        </AppContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
