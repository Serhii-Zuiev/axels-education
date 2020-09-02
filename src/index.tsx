import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { GlobalStyles, StyledAppContainer } from "./styles/app";

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles />
        <StyledAppContainer>
            <App />
        </StyledAppContainer>
    </React.StrictMode>,
    document.getElementById("root")
);
