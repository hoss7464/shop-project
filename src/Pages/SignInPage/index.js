import React from "react";
import "../SignUpPage/SignUp.css";
import { SigninContainer } from "./SignInElements";
import {
  SignupWrapper,
  SignupHeaderWrapper,
  SignupHeader,
  SignupSubmitButton,
  SignupLinkWrapper,
  SignupLink,
} from "../SignUpPage/SignUpElements";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../Components/Formik/FormikControl";
import { supabase } from "../../Supabase/Client";
import { useNavigate } from "react-router-dom";
import myFieldMailIcon from "../../Assets/Svg/mailIcon.svg";
import myFieldPassIcon from "../../Assets/Svg/passIcon.svg";
import { SigninData1 } from "../../Helpers/SignInPageData";
//------------------------------------------------------------------------
const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("فرمت ایمیل نادرست است")
    .required("تکمیل فیلد ضروریست"),
  password: Yup.string().required("تکمیل فیلد ضروریست"),
});

const SignIn = () => {
  const navigate = useNavigate();

  async function onSubmit(values, onSubmitProps) {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });
      if (error) throw error;
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
      navigate("/userprofile");
    } catch (error) {
      alert(error);
    }
  }
  return (
    <>
      <SigninContainer>
        <SignupWrapper>
          <SignupHeaderWrapper>
            <SignupHeader>{SigninData1.text1}</SignupHeader>
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
                    fieldAlt="icon2"
                    header="ایمیل"
                  />

                  <FormikControl
                    control="input"
                    type="password"
                    label="Password"
                    name="password"
                    fieldSrc={myFieldPassIcon}
                    fieldAlt="icon4"
                    header="رمز عبور"
                  />

                  <SignupSubmitButton
                    type="submit"
                    disabled={!formik.isValid || formik.isSubmitting}
                  >
                    {SigninData1.text1}
                  </SignupSubmitButton>

                  <SignupLinkWrapper>
                    <p>
                      {SigninData1.text2}
                      <SignupLink to="/signup">{SigninData1.text3}</SignupLink>
                    </p>
                  </SignupLinkWrapper>

                  <SignupLinkWrapper>
                    <p>
                      <SignupLink to="/forgetpassword">
                        {SigninData1.text4}
                      </SignupLink>
                    </p>
                  </SignupLinkWrapper>
                </Form>
              );
            }}
          </Formik>
        </SignupWrapper>
      </SigninContainer>
    </>
  );
};

export default SignIn;
