import React, { useContext } from "react";
import Button from "@material-ui/core/Button";

import { Context } from "./AppContextProvider";

const HomePage = () => {
    const {
        dispatch,
        state: { questions },
    } = useContext(Context);

    const onToggleQuize = (): void => {
        dispatch({ type: "TOGGLE_QUIZ" });
        dispatch({ type: "SELECT_QUESTION", payload: questions[0].id });
    };

    return (
        <>
            <h2>
                Take a quiz and get know what is your psychological portrait
            </h2>
            <p>
                Just answer 10 simple questions and a detail resume will be
                generated right here.
            </p>

            <Button onClick={onToggleQuize} variant="contained" color="primary">
                Start quiz
            </Button>
        </>
    );
};

export default HomePage;
