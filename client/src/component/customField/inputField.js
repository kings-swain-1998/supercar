import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup } from '@material-ui/core';
import { ErrorMessage } from 'formik';
import { FormFeedback, Input } from 'reactstrap';



inputField.propTypes = {

};

function inputField(props) {
    const { field, form, type, label, placeholder, disabled } = props;
    const { name, value, onChange, onBlur } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];
    return (
        <FormGroup>
            {label && <label for={name}>{label}</label>}
            <Input
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                type={type}
                disabled={disabled}
                placeholder={placeholder}
                invalid={showError}
            ></Input>
            <ErrorMessage name={name} component={FormFeedback}></ErrorMessage>
        </FormGroup>
    );
}

export default inputField;