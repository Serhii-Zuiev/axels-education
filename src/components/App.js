import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Context } from "./AppContextProvider";
import { RegisterForm } from "./RegisterForm";
import { Users } from "./Users";
import { Comments } from "./Comments";
import { Header } from "./Header";
import { GlobalStyles, StyledAppContainer } from "../styled";

function App() {
    const context = useContext(Context);
    const {
        state: { darkTheme },
    } = context;

    return (
        <>
            <GlobalStyles darkTheme={darkTheme} />

            <Header />
            <StyledAppContainer darkTheme={darkTheme}>
                <Container>
                    <Row>
                        <Col sm={12} lg>
                            <RegisterForm />
                        </Col>
                        <Col sm={12} md={6} lg>
                            <Users />
                        </Col>
                        <Col sm={12} md={6} lg>
                            <Comments />
                        </Col>
                    </Row>
                </Container>
            </StyledAppContainer>
        </>
    );
}

export default App;
