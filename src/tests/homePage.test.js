import React from "react";
import { render, screen } from "@testing-library/react";

import { HomePage } from "../components";

describe("HomePage component test", () => {
    test("renders HomePage component", () => {
        render(<HomePage />);
        expect(
            screen.getByText(
                "Take a quiz and get know what is your psychological portrait"
            )
        ).toBeInTheDocument();
        expect(screen.getByTestId("start-quiz-btn")).toBeInTheDocument();
    });
});
