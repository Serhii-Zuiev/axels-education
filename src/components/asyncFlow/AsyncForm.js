import React, { useState } from "react";

import { input$ } from "./rxAsyncService";

const AsyncForm = () => {
    const [state, setstate] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        input$.next(state);

        setstate("");
    };

    return (
        <form onSubmit={onSubmit}>
            <label>
                Type <b>GitHub</b> user name <br />
                <input
                    type="text"
                    onChange={({ target: { value } }) => setstate(value)}
                    value={state}
                />
            </label>
            <button type="submit">Search</button>
        </form>
    );
};

export default AsyncForm;
