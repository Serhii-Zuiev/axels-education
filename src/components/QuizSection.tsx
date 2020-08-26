import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import Question from "./Question";
import { Context, questionType } from "./AppContextProvider";

const QuizSection = () => {
    const [currentAnswer, setCurrentAnswer] = useState<string>("");
    const {
        dispatch,
        state: { currentQuestionID, questions },
    } = useContext(Context);
    const LAST_QUESTION_ID = questions[questions.length - 1].id;

    const getCurrentQuestion = (): questionType => {
        return questions.find((q: questionType) => q.id === currentQuestionID);
    };

    const onAnswerSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (currentAnswer) {
            if (currentQuestionID !== LAST_QUESTION_ID) {
                dispatch({
                    type: "LEAVE_ANSWER",
                    payload: { id: currentQuestionID, answer: currentAnswer },
                });
                const nextQuestionIndex = questions.indexOf(getCurrentQuestion()) + 1;
                const nextQuestionID = questions[nextQuestionIndex].id;
                dispatch({ type: "SELECT_QUESTION", payload: nextQuestionID });
            } else {
                dispatch({
                    type: "LEAVE_ANSWER",
                    payload: { id: currentQuestionID, answer: currentAnswer },
                });
                dispatch({ type: "TOGGLE_QUIZ" });
                const getSpec = ():string => {
                    const correct = questions.filter((q:questionType)=> q.correct === q.answer)
                    return `${correct.length}/10`
                }
                console.log('getSpec() :>> ', getSpec());
            }
        }
        setCurrentAnswer("");
    };



    return (
        <>
            <Question
                answer={currentAnswer}
                currentQuestion={getCurrentQuestion()}
            />
            Your answer is:
            <form onSubmit={onAnswerSubmit}>
                <ButtonGroup
                    variant="contained"
                    color="primary"
                    aria-label="contained primary button group"
                >
                    <Button onClick={() => setCurrentAnswer("A")}>A</Button>
                    <Button onClick={() => setCurrentAnswer("B")}>B</Button>
                    <Button onClick={() => setCurrentAnswer("C")}>C</Button>
                </ButtonGroup>

                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </>
    );
};

export default QuizSection;
