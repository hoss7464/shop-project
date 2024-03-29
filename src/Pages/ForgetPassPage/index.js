import React from "react";
import { ForgotContainer } from "./ForgotElement";
import "../SignUpPage/SignUp.css";
import {
  SignupWrapper,
  SignupHeaderWrapper,
  SignupHeader,
  SignupSubmitButton,
} from "../SignUpPage/SignUpElements";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../Components/Formik/FormikControl";
import myFieldMailIcon from "../../Assets/Svg/mailIcon.svg";
import { ForgotPassData1 } from "../../Helpers/ForgotPassData";
import { useNavigate } from "react-router-dom";
//---------------------------------------------------------------------------
const initialValues = {
  email: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("فرمت ایمیل نادرست است")
    .required("تکمیل فیلد ضروریست"),
});
//----------------------------------------------------------------------------

const ForgetPass = () => {
  const navigate = useNavigate();

  function onSubmit(values, onSubmitProps) {
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
    navigate("/resetPass");
    console.log("Form Data", values);
  }

  return (
    <>
      <ForgotContainer>
        <SignupWrapper>
          <SignupHeaderWrapper>
            <SignupHeader>{ForgotPassData1.text1}</SignupHeader>
          </SignupHeaderWrapper>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              return (
                <Form className="formik">
                  <FormikControl
                    control="input"
                    type="email"
                    label="Email"
                    name="email"
                    fieldSrc={myFieldMailIcon}
                    fieldAlt="icon3"
                    header="ایمیل"
                  />

                  <SignupSubmitButton
                    type="submit"
                    disabled={!formik.isValid || formik.isSubmitting}
                  >
                    {ForgotPassData1.text2}
                  </SignupSubmitButton>
                </Form>
              );
            }}
          </Formik>
        </SignupWrapper>
      </ForgotContainer>
    </>
  );
};

export default ForgetPass;
