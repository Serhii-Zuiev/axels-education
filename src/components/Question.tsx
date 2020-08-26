import React from "react";
import Paper from "@material-ui/core/Paper";

import { StyledQuestionsContainer } from "../styles";
import { questionType } from "./AppContextProvider";

type props = {
    answer: string;
    currentQuestion: questionType;
};


const Question = ({ answer, currentQuestion }: props) => {

    return (
        <StyledQuestionsContainer>
            <h2>{currentQuestion.question}</h2>

            <Paper elevation={answer === "A" ? 10 : 1} className="questionCard">
                <div>
                    <span>A:</span>
                    <p>{currentQuestion.A}</p>
                </div>
            </Paper>
            <Paper elevation={answer === "B" ? 10 : 1} className="questionCard">
                <div>
                    <span>B:</span>
                    <p>{currentQuestion.B}</p>
                </div>
            </Paper>
            <Paper elevation={answer === "C" ? 10 : 1} className="questionCard">
                <div>
                    <span>C:</span>
                    <p>{currentQuestion.C}</p>
                </div>
            </Paper>
        </StyledQuestionsContainer>
    );
};

export default Question;
