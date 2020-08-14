import React, { useContext } from "react";

import { Context } from "./AppContextProvider";
import { RegisterForm } from "./RegisterForm";
import { Users } from "./Users";
import { Comments } from "./Comments";
import { Header } from "./Header";
import { GlobalStyles, StyledAppContainer } from "../styled";

function App() {
    const context = useContext(Context);
    const {
        state: { darkTheme },
    } = context;

    return (
        <>
            <GlobalStyles darkTheme={darkTheme} />

            <StyledAppContainer darkTheme={darkTheme}>
                <Header />
                <main className="main">
                    <RegisterForm />
                    <Users />
                    <Comments />
                </main>
            </StyledAppContainer>
        </>
    );
}

export default App;
