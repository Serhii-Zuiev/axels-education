import React, { useContext, useState } from "react";
import shortid from "shortid";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { Context } from "../AppContextProvider";
import { StyledRegisterContainer } from "../../styled";

const initialState = { userName: "", status: "", agreement: true };

const RegisterForm = () => {
    const [state, setstate] = useState(initialState);
    const context = useContext(Context);
    const {
        dispatch,
        state: { darkTheme },
    } = context;

    const handleInputChange = ({ target: { value, name } }) => {
        setstate((prevState) => {
            return { ...prevState, [name]: value };
        });
    };
    const handleCheckboxChange = ({ target: { name, checked } }) => {
        setstate((prevState) => {
            return { ...prevState, [name]: checked };
        });
    };

    const handleRegistrUser = (event) => {
        event.preventDefault();
        const payload = {
            name: state.userName,
            status: state.status,
            comments: [],
            id: shortid.generate(),
        };
        dispatch({ type: "REGISTER_USER", payload });
        setstate(initialState);
    };

    return (
        <StyledRegisterContainer darkTheme={darkTheme}>
            <h2>Here you can register</h2>
            <Form onSubmit={handleRegistrUser}>
                <Form.Group controlId="formBasicUser">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        onChange={handleInputChange}
                        value={state.userName}
                        name="userName"
                        placeholder="Enter your name"
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Current status</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={handleInputChange}
                        value={state.status}
                        name="status"
                        placeholder="Enter your status"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                        required
                        type="checkbox"
                        onChange={handleCheckboxChange}
                        checked={state.agreement}
                        name="agreement"
                        label="Comfirm agruiment"
                    />
                </Form.Group>
                <Button variant={darkTheme ? "light" : "primary"} type="submit">
                    Submit
                </Button>
            </Form>
        </StyledRegisterContainer>
    );
};

export default RegisterForm;
