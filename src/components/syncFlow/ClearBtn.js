import React from "react";

import { rxService } from "./rxService";

const ClearBtn = () => (
    <button type="button" onClick={() => rxService.clearItems()}>
        Clear
    </button>
);

export default ClearBtn;
