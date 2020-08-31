import React from "react";
import { render } from "@testing-library/react";

import App from "../App";

describe("App component test", () => {
    test("renders App component", () => {
        render(<App />);
    });
});
