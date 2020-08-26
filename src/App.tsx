import React, { useContext } from "react";

import { HomePage, Header, QuizSection } from "./components";
import { GlobalStyles, StyledAppContainer } from "./styles";
import { Context } from "./components/AppContextProvider";

function App() {
    const {
        state: { isQuizStarted },
    } = useContext(Context);

    return (
        <>
            <GlobalStyles />
            <Header />
            <StyledAppContainer>
                {isQuizStarted ? <QuizSection /> : <HomePage />}
            </StyledAppContainer>
        </>
    );
}

export default App;
