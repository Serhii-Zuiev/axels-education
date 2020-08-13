import React from "react";

import AppContextProvider from "./AppContextProvider";
import { RegisterForm } from "./RegisterForm";
import { Users } from "./Users";
import { Comments } from "./Comments";
import { Header } from "./Header";
import { GlobalStyles, StyledAppContainer } from "../styled";

function App() {
    return (
        <>
            <GlobalStyles />
            
            <AppContextProvider>
                <StyledAppContainer>
                    <Header />
                    <main className="main">
                        <RegisterForm />
                        <Users />
                        <Comments />
                    </main>
                </StyledAppContainer>
            </AppContextProvider>
        </>
    );
}

export default App;
