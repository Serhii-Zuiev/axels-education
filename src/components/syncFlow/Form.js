import React, { useState } from "react";

import { rxService } from "./rxService";

const Form = () => {
    const [state, setstate] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        rxService.sendItem(state);

        setstate("");
    };

    return (
        <form onSubmit={onSubmit}>
            <label>
                Type something <br />
                <input
                    type="text"
                    onChange={({ target: { value } }) => setstate(value)}
                    value={state}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
