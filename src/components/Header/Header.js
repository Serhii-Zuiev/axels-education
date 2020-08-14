import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import { Context } from "../AppContextProvider";

const Header = () => {
    const context = useContext(Context);
    const {
        dispatch,
        state: { darkTheme },
    } = context;

    const handleSwitchTheme = () => {
        dispatch({ type: "SWITCH_THEME" });
    };

    const headerStyles = {
        display: "flex",
        justifyContent: "space-between",
        borderBottom: darkTheme ? "1px solid #eee" : "1px solid #555",
        transition: "all .3s ease-in-out",
    };

    return (
        <Container fluid="true">
            <Navbar
                expand="lg"
                variant={darkTheme ? "dark" : "light"}
                bg={darkTheme ? "dark" : "light"}
                style={headerStyles}
            >
                <Navbar.Brand href="#">Lorem ipsum</Navbar.Brand>
                <Form.Check
                    type="switch"
                    onChange={handleSwitchTheme}
                    checked={darkTheme}
                    id="custom-switch"
                    label="Dark Theme"
                    style={{
                        color: darkTheme ? "#fff" : "#000000e6",
                        cursor: "pointer",
                    }}
                />
            </Navbar>
        </Container>
    );
};

export default Header;
