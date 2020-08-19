import React from "react";

import { input$ } from "./rxAsyncService";

const AsyncClearBtn = () => (
    <button type="button" onClick={() => input$.next()}>
        Clear
    </button>
);

export default AsyncClearBtn;
