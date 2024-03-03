import React from "react";
import "../SignUpPage/SignUp.css";
import { ResetContainer } from "./ResetElements";
import {
  SignupWrapper,
  SignupHeaderWrapper,
  SignupHeader,
  SignupSubmitButton,
} from "../SignUpPage/SignUpElements";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../Components/Formik/FormikControl";
import myFieldPassIcon from "../../Assets/Svg/passIcon.svg";
import myFieldConfPassIcon from "../../Assets/Svg/confPassIcon.svg";
import { ResetPassData1 } from "../../Helpers/ResetPassData";
import { useNavigate } from "react-router-dom";
//---------------------------------------------------------------------
const initialValues = {
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  password: Yup.string().required("تکمیل فیلد ضروریست"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "رمز عبور مطابقت ندارد")
    .required("تکمیل فیلد ضروریست"),
});
//---------------------------------------------------------------------

const ResetPass = () => {
  const navigate = useNavigate();

  function onSubmit(values, onSubmitProps) {
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
    navigate("/signin");
    console.log("Form Data", values);
  }
  return (
    <>
      <ResetContainer>
        <SignupWrapper>
          <SignupHeaderWrapper>
            <SignupHeader>{ResetPassData1.text1}</SignupHeader>
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
                    {ResetPassData1.text2}
                  </SignupSubmitButton>
                </Form>
              );
            }}
          </Formik>
        </SignupWrapper>
      </ResetContainer>
    </>
  );
};

export default ResetPass;
