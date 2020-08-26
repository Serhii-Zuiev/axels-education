import React, { useReducer } from "react";

import { default as questions } from "../placeholder.json";

export type questionType = {
    question: string;
    id: string;
    A: string;
    B: string;
    C: string;
    answer: string;
    correct: string;
};

interface AppContextInterface {
    isQuizStarted: boolean;
    questions: questionType[];
    currentQuestionID: string;
}

//TODO state: any;
type state = {
    state: any;
    dispatch: React.Dispatch<action>;
};
type children = {
    children: React.ReactNode;
};

type action =
    | { type: "TOGGLE_QUIZ" }
    | { type: "SELECT_QUESTION"; payload: string }
    | { type: "LEAVE_ANSWER"; payload: { id: string; answer: string } };

const initialState: AppContextInterface = {
    isQuizStarted: false,
    questions: questions,
    currentQuestionID: "",
};

const reducer = (
    state: AppContextInterface = initialState,
    action: action
): AppContextInterface => {
    switch (action.type) {
        case "TOGGLE_QUIZ":
            return { ...state, isQuizStarted: !state.isQuizStarted };
        case "SELECT_QUESTION":
            return {
                ...state,
                currentQuestionID: action.payload,
            };
        case "LEAVE_ANSWER":
            return {
                ...state,
                questions: state.questions.map((q) =>
                    q.id === action.payload.id
                        ? { ...q, answer: action.payload.answer }
                        : q
                ),
            };
        default:
            return state;
    }
};

export const Context = React.createContext<state>({
    state: initialState,
    dispatch: () => null,
});

const AppContextProvider = ({ children }: children) => {
    const [state, dispatch] = useReducer<any>(reducer, initialState);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
};

export default AppContextProvider;
