import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import App from "../App";
import { AppContextProvider } from "../components";

describe("QuizSection component test", () => {
    test("renders QuizSection component", () => {
        render(
            <AppContextProvider>
                <App />
            </AppContextProvider>
        );
        fireEvent.click(screen.getByTestId("start-quiz-btn"));

        expect(screen.getByTestId("drop-quiz-btn")).toBeInTheDocument();
        expect(screen.getByText("1/10")).toBeInTheDocument();
        expect(screen.queryByTestId("start-quiz-btn")).not.toBeInTheDocument();
        expect(screen.getAllByRole("listitem")).toHaveLength(3);

        expect(screen.getByText("A")).toBeInTheDocument();
        expect(screen.getByText("B")).toBeInTheDocument();
        expect(screen.getByText("C")).toBeInTheDocument();
        expect(screen.getByText("Submit")).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("answer-btn"));
        fireEvent.submit(screen.getByTestId("answer-form"));

        expect(screen.getByText("2/10")).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("drop-quiz-btn"));

        expect(screen.queryByText("2/10")).not.toBeInTheDocument();
        expect(screen.queryByText("drop-quiz-btn")).not.toBeInTheDocument();
    });
});
