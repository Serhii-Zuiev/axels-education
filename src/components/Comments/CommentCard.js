import React, { useContext } from "react";
import Card from "react-bootstrap/Card";

import { Context } from "../AppContextProvider";

const CommentCard = ({ feed }) => {
    const context = useContext(Context);
    const {
        state: { darkTheme },
    } = context;

    const cardStyle = {
        backgroundColor: darkTheme ? "#222831" : "#fff",
        color: darkTheme ? "#f0f0f0" : "#333",
        border: darkTheme ? "1px solid #4e6f6a" : "1px solid #ced4da",
    };

    return (
        <Card style={cardStyle}>
            <Card.Body>{feed}</Card.Body>
        </Card>
    );
};

export default CommentCard;
