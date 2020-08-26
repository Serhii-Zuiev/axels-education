import React from "react";

import { Header, Routing } from "./components";
import { GlobalStyles, StyledAppContainer } from "./styles";

function App() {
    return (
        <>
            <GlobalStyles />
            <Header />
            <StyledAppContainer>
                <Routing />
            </StyledAppContainer>
        </>
    );
}

export default App;
