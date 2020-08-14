import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import { Context } from "../AppContextProvider";

const UserCard = ({ name, status, feed, id }) => {
    const { dispatch } = useContext(Context);
    const {
        state: { selectedUser, darkTheme },
    } = useContext(Context);

    const handleSelectUser = () => {
        dispatch({ type: "SELECT_USER", payload: id });
    };

    const isUserSelected = selectedUser.id === id;

    const cardStyle = {
        backgroundColor: isUserSelected ? "#f0f0f0" : "#ffffff",
        border: isUserSelected ? "1px solid #00000060" : "1px solid #00000020",
        color: "#333",
    };

    const cardStyleDark = {
        backgroundColor: isUserSelected ? "#393e46" : "#222831",
        border: isUserSelected ? "1px solid #32e0c4" : "1px solid #4e6f6a",
        color: "#f0f0f0",
    };

    return (
        <Card style={darkTheme ? cardStyleDark : cardStyle}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {status}
                </Card.Subtitle>
                <Card.Text>
                    Has <Badge variant="primary">{feed}</Badge> feedbacks
                </Card.Text>

                <Button
                    onClick={handleSelectUser}
                    variant={darkTheme ? "outline-light" : "outline-primary"}
                >
                    Leave feedback on {name}
                </Button>
            </Card.Body>
        </Card>
    );
};

export default UserCard;
