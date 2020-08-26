import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { default as AppContextProvider } from "./components/AppContextProvider";

ReactDOM.render(
    <React.StrictMode>
        <AppContextProvider>
            <App />
        </AppContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
