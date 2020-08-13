import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const Header = () => {
    const headerStyles = {
        display: "flex",
        justifyContent: "space-between",
    };

    return (
        <Container fluid="true">
            <Navbar expand="lg" variant="light" bg="light" style={headerStyles}>
                <Navbar.Brand href="#">Lorem ipsum</Navbar.Brand>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Dark Theme"
                />
            </Navbar>
        </Container>
    );
};

export default Header;
