import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import { Context } from "../AppContextProvider";

const UserCard = ({ name, status, feed, id }) => {
    const { dispatch } = useContext(Context);
    const {
        state: { selectedUser },
    } = useContext(Context);

    const handleSelectUser = () => {
        dispatch({ type: "SELECT_USER", payload: id });
    };

    const isUserSelected = selectedUser.id === id;

    return (
        <Card
            style={{
                backgroundColor: isUserSelected ? "#eee" : "#fff",
            }}
        >
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {status}
                </Card.Subtitle>
                <Card.Text>
                    Has <Badge variant="primary">{feed}</Badge> feedbacks
                </Card.Text>

                <Button onClick={handleSelectUser} variant="outline-primary">
                    Leave feedback on {name}
                </Button>
            </Card.Body>
        </Card>
    );
};

export default UserCard;
