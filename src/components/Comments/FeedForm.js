import React, { useState, useContext, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { Context } from "../AppContextProvider";

const FeedForm = ({ userId }) => {
    const context = useContext(Context);
    const [state, setstate] = useState("");
    const commentInputEl = useRef(null);
    const {
        dispatch,
        state: { selectedUser, darkTheme },
    } = context;

    useEffect(() => {
        if (selectedUser.id) {
            commentInputEl.current.focus();
        }
    }, [selectedUser.id]);

    const handleSubmitComment = (event) => {
        event.preventDefault();
        dispatch({
            type: "ADD_COMMENT",
            payload: { comment: state, id: userId },
        });
        dispatch({
            type: "SELECT_USER",
            payload: userId,
        });
        setstate("");
    };

    return (
        <Form onSubmit={handleSubmitComment}>
            <Form.Group controlId="formBasicFeed">
                <Form.Control
                    as="textarea"
                    onChange={({ target: { value } }) => setstate(value)}
                    value={state}
                    placeholder="type your feed"
                    ref={commentInputEl}
                    readOnly={userId ? false : true}
                />
            </Form.Group>

            <Button
                variant={darkTheme ? "light" : "primary"}
                type="submit"
                disabled={userId ? false : true}
            >
                Submit
            </Button>
        </Form>
    );
};

export default FeedForm;
