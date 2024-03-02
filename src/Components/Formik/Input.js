import React from "react";
import "./Fromik.css";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import {
  FormikInputContainer,
  FormikInputLabelWrapper,
  FormikInputLabel,
  FormikFieldIconWrapper,
  FormikFieldWrapper,
  FormikIconWrapper,
  FormikIcon,
} from "./FormikElements";

const Input = (props) => {
  const { label, header, name, fieldAlt, fieldSrc, ...rest } = props;
  return (
    <>
      <FormikInputContainer>
        <FormikInputLabelWrapper>
          <FormikInputLabel htmlFor={header}>{header}</FormikInputLabel>
        </FormikInputLabelWrapper>

        <FormikFieldIconWrapper>
          <FormikFieldWrapper>
            <Field
              className="formik-input-field"
              id={name}
              name={name}
              {...rest}
            />
          </FormikFieldWrapper>
          <FormikIconWrapper>
            <FormikIcon alt={fieldAlt} src={fieldSrc} />
          </FormikIconWrapper>
        </FormikFieldIconWrapper>

        <ErrorMessage name={name} component={TextError} />
      </FormikInputContainer>
    </>
  );
};

export default Input;
