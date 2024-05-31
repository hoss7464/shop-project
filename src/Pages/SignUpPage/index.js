import React from "react";
import "./SignUp.css";
import {
  SignupContainer,
  SignupWrapper,
  SignupHeaderWrapper,
  SignupHeader,
  SignupSubmitButton,
  SignupLinkWrapper,
  SignupLink,
} from "./SignUpElements";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../Components/Formik/FormikControl";
import myFieldPersonIcon from "../../Assets/Svg/personIcon.svg";
import myFieldUserIcon from "../../Assets/Svg/userIcon.svg";
import myFieldMailIcon from "../../Assets/Svg/mailIcon.svg";
import myFieldPassIcon from "../../Assets/Svg/passIcon.svg";
import myFieldConfPassIcon from "../../Assets/Svg/confPassIcon.svg";
import { SignUpData1 } from "../../Helpers/SignUpPageData";
import { supabase } from "../../Supabase/Client";
import { useNavigate } from "react-router-dom";

//-------------------------------------------------------------------------
const initialValues = {
  fullname: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  fullname: Yup.string().required("تکمیل فیلد ضروریست"),
  username: Yup.string().required("تکمیل فیلد ضروریست"),
  email: Yup.string()
    .email("فرمت ایمیل نادرست است")
    .required("تکمیل فیلد ضروریست"),
  password: Yup.string().required("تکمیل فیلد ضروریست"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "رمز عبور مطابقت ندارد")
    .required("تکمیل فیلد ضروریست"),
});
//------------------------------------------------------------------------------

const SignUpPage = () => {
  const navigate = useNavigate();

  async function onSubmit(values, onSubmitProps) {
    try {
      const { error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          data: {
            full_name: values.fullname,
          },
        },
      });
      if (error) throw error;
      alert("check your email for verification link");
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
      navigate("/SignIn");
    } catch (error) {
      alert(error);
    }
  }
  return (
    <>
      <SignupContainer>
        <SignupWrapper>
          <SignupHeaderWrapper>
            <SignupHeader>{SignUpData1.text1}</SignupHeader>
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
                    type="text"
                    label="حسین"
                    name="fullname"
                    fieldSrc={myFieldPersonIcon}
                    fieldAlt="icon1"
                    header="نام و نام خانوادگی"
                  />
                  <FormikControl
                    control="input"
                    type="text"
                    label="Username"
                    name="username"
                    fieldSrc={myFieldUserIcon}
                    fieldAlt="icon2"
                    header="نام کاربری"
                  />
                  <FormikControl
                    control="input"
                    type="email"
                    label="Email"
                    name="email"
                    fieldSrc={myFieldMailIcon}
                    fieldAlt="icon3"
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
                  <FormikControl
                    control="input"
                    type="password"
                    label="Confirm Password"
                    name="confirmPassword"
                    fieldSrc={myFieldConfPassIcon}
                    fieldAlt="icon5"
                    header="تایید رمز عبور"
                  />
                  <SignupSubmitButton
                    type="submit"
                    disabled={!formik.isValid || formik.isSubmitting}
                  >
                    {SignUpData1.text2}
                  </SignupSubmitButton>
                  <SignupLinkWrapper>
                    <p>
                      {SignUpData1.text3}
                      <SignupLink to="/SignIn">{SignUpData1.text4}</SignupLink>
                    </p>
                  </SignupLinkWrapper>
                </Form>
              );
            }}
          </Formik>
        </SignupWrapper>
      </SignupContainer>
    </>
  );
};

export default SignUpPage;
