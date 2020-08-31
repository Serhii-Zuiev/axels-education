import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { StyledHeaderContainer } from "../styles";
import { Context } from "./AppContextProvider";

const Header = () => {
    const {
        dispatch,
        state: { isQuizStarted, currentQuestionID },
    } = useContext(Context);

    const onStartQuiz = () => {
        dispatch({ type: "TOGGLE_QUIZ" });
    };

    return (
        <StyledHeaderContainer>
            <AppBar position="static">
                <Toolbar className={"header"}>
                    <Typography variant="h6">Quiz App</Typography>
                    {isQuizStarted && (
                        <div>
                            <span>{currentQuestionID}/10</span>
                            <Button onClick={onStartQuiz} color="inherit" data-testid="drop-quiz-btn">
                                Drop the quiz
                            </Button>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </StyledHeaderContainer>
    );
};

export default Header;
