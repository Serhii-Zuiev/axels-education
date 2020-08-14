import React, { useReducer, useEffect } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

const initialState = {
    users: [],
    selectedUser: {
        name: "",
        id: "",
        comments: [],
    },
    darkTheme: false,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "REGISTER_USER":
            return { ...state, users: [...state.users, payload] };
        case "SELECT_USER":
            return {
                ...state,
                selectedUser: state.users.find((user) => user.id === payload),
            };
        case "ADD_COMMENT":
            return {
                ...state,
                users: state.users.map((u) =>
                    u.id === payload.id
                        ? { ...u, comments: [...u.comments, payload.comment] }
                        : u
                ),
            };
        case "SWITCH_THEME":
            return { ...state, darkTheme: !state.darkTheme };
        default:
            return state;
    }
};

export const Context = React.createContext(initialState);

const AppContextProvider = ({ children }) => {
    const [stateToSave, setStateToSave] = useLocalStorage(
        "state",
        initialState
    );
    const [state, dispatch] = useReducer(reducer, stateToSave);

    useEffect(() => {
        setStateToSave(state);
    }, [state, setStateToSave]);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
};

export default AppContextProvider;
