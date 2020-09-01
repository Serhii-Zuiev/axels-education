import React from "react";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

import { GlobalStyles, StyledAppContainer } from "./styles/app";

interface IformValues {
    firstName: string;
    lastName: string;
    email: string;
    status: string;
    option: string;
    acception: boolean;
}

const initValues: IformValues = {
    firstName: "",
    lastName: "",
    email: "",
    status: "",
    option: "",
    acception: false,
};

const please = <div className="please">Please fill this field</div>;
const pleaseStatus = <div className="please">Please choose your status</div>;
const pleaseOption = <div className="please">Please choose an option</div>;
const pleaseAcception = <div className="please">The terms and conditions must be accepted.</div>;

const signupSchema = Yup.object().shape({
    firstName: Yup.string().required(() => please),
    lastName: Yup.string().required(() => please),
    email: Yup.string().required(() => please),
    status: Yup.string().required(() => pleaseStatus),
    option: Yup.string().required(() => pleaseOption),
    acception: Yup.bool().required().oneOf([true], () => pleaseAcception),
});

function App() {
    const handleSubmit = (
        formValuers: IformValues,
        { setSubmitting, setValues, setTouched }: FormikHelpers<IformValues>
    ) => {
        console.table(formValuers);

        setSubmitting(false);
        setValues(initValues);
        setTouched({});
    };

    return (
        <>
            <GlobalStyles />

            <StyledAppContainer>
                <h2>Subscribe!</h2>
                <Formik
                    initialValues={initValues}
                    validationSchema={signupSchema}
                    onSubmit={handleSubmit}
                >
                    <Form className="form">
                        <label className="textInput-label">
                            First Name
                            <Field id="firstName" name="firstName" />
                            <ErrorMessage name="firstName" />
                        </label>
                        <label className="textInput-label">
                            Last Name
                            <Field id="lastName" name="lastName" />
                            <ErrorMessage name="lastName" />
                        </label>
                        <label className="textInput-label">
                            Your email
                            <Field id="email" name="email" />
                            <ErrorMessage name="email" />
                        </label>
                        <label className="formInput-label">
                            Your status
                            <Field id="status" name="status" as="select">
                                <option>status</option>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                            </Field>
                            <ErrorMessage name="status" />
                        </label>
                        <span>Choose option</span>
                        <div
                            role="group"
                            aria-labelledby="my-radio-group"
                            className="formInput-label"
                        >
                            <label>
                                One
                                <Field type="radio" name="option" value="One" />
                            </label>
                            <label>
                                Two
                                <Field type="radio" name="option" value="Two" />
                            </label>
                            <label>
                                Three
                                <Field
                                    type="radio"
                                    name="option"
                                    value="Three"
                                />
                            </label>
                            <ErrorMessage name="option" />
                        </div>
                        <label className="formInput-label">
                            I accept the terms and conditions
                            <Field
                                type="checkbox"
                                name="acception"
                                id="acception"
                            />
                            <ErrorMessage name="acception" />
                        </label>
                        <button type="submit" className="submit">
                            Submit
                        </button>
                    </Form>
                </Formik>
            </StyledAppContainer>
        </>
    );
}

export default App;
