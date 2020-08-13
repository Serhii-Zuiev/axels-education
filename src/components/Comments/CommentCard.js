import React from "react";
import Card from "react-bootstrap/Card";

const UserCard = ({ feed }) => (
    <Card>
        <Card.Body>{feed}</Card.Body>
    </Card>
);

export default UserCard;
