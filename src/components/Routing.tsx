import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./HomePage";
import QuizSection from "./QuizSection";

const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/quiz/:id" component={QuizSection} />
            </Switch>
        </Router>
    );
};

export default Routing;
