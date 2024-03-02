import React from 'react';
import { TextErrorContainer } from './FormikElements';

const TextError = (props) => {
    return (
        <TextErrorContainer>
             {props.children}
        </TextErrorContainer>
    );
};

export default TextError;