import React from "react";
import "./SignUp.css";
import { SignupContainer } from "./SignUpElements";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

//-------------------------------------------------------------------------
const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values, onSubmitProps) => {
  //add your supabase function here
  console.log("hello hossein", values);
  console.log("submit props", onSubmitProps);
  //in real scenario you must wait for api response then call setSsubmitting function.
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._$+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.channel) {
    errors.channel = "Required";
  }
  return errors;
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  channel: Yup.string().required("Required"),
});
//-----------------------------------------------------------------------------------

const TestForm = () => {
  return (
    <>
      <SignupContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          //validateOnMount
        >
          {(formik) => {
            return (
              <Form className="form">
                <div>
                  <label htmlFor="name">Name</label>
                  <Field
                    style={{ border: "solid 1px black" }}
                    type="text"
                    id="name"
                    name="name"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="errors"
                  />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <Field
                    style={{ border: "solid 1px black" }}
                    type="email"
                    id="email"
                    name="email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="errors"
                  />
                </div>

                <div>
                  <label htmlFor="channel">Channel</label>
                  <Field
                    style={{ border: "solid 1px black" }}
                    type="channel"
                    id="channel"
                    name="channel"
                  />
                  <ErrorMessage
                    name="channel"
                    component="div"
                    className="errors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
      </SignupContainer>
    </>
  );
};

export default TestForm;
