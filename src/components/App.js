import React from "react";

import { Form, List, ClearBtn } from "./syncFlow";
import { AsyncForm, AsyncCard, AsyncClearBtn } from "./asyncFlow";

const style = {
    width: "50%",
    height: "100%",
    padding: "25px",
};

const App = () => {
    return (
        <div style={{ display: "flex" }}>
            <div style={style}>
                <Form />
                <hr />
                <ClearBtn />
                <List />
            </div>

            <div style={style}>
                <AsyncForm />
                <hr />
                <AsyncClearBtn />
                <AsyncCard />
            </div>
        </div>
    );
};

export default App;
