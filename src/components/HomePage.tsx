import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import {RouteComponentProps} from "react-router-dom";

import { Context } from "./AppContextProvider";

const HomePage = ({history}:RouteComponentProps) => {
    const {
        dispatch,
        state: { questions },
    } = useContext(Context);

    const onToggleQuize = (): void => {
        dispatch({ type: "TOGGLE_QUIZ" });
        dispatch({ type: "SELECT_QUESTION", payload: questions[0].id });
        history.push('/quiz/1')
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

            <Button onClick={onToggleQuize} variant="contained" color="primary" data-testid="start-quiz-btn">
                Start quiz
            </Button>
        </>
    );
};

export default HomePage;
