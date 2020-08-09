import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { NavLink, Link } from 'react-router-dom';
import { Formik, Form, FastField, useFormik } from 'formik';
import inputField from '../customField/inputField';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import { change } from 'redux-form';
import Axios from 'axios';

Register.propTypes = {

};

function Register(props) {

    const [avatar, setAvatar] = useState("");

    const initialValues = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        verification: "",
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('email cannot be empty !')
            .email('Invalid email')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        password: Yup.string()
            .required('pass cannot be empty !')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        firstname: Yup.string().required('First name cannot be empty !'),
        lastname: Yup.string().required('Last name cannot be empty !'),
        verification: Yup.string().required('Verification cannot be empty !')
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),



    });


    const hanldeChange = (data) => {
        console.log(data)
    }

    const hanldeChangeAvatar = (e) => {
        const files = e.target.files;
        const data = new FormData()
        data.append('file', files[0]);
        data.append('upload_preset', 'imagereact');
        setAvatar(data);
    }

    const submitRegister = async (values) => {

        const res = await fetch("https://api.cloudinary.com/v1_1/dj3vw4obq/image/upload",
            {
                method: "POST",
                body: avatar
            });
        const file = await res.json();
        const formValue = await {
            firstname: values.firstname,
            lastname: values.lastname,
            email: values.email,
            password: values.password,
            avatar: file.secure_url
        };
        await Axios.post("http://localhost:8000/auth/register", formValue).then(() => {
            console.log(res.data)
        }).catch((err) => console.log(err))
    }

    return (
        <div className="register">
            <h1>Register</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => { submitRegister(values) }}
            >
                {formikProps => {
                    const { values, errors, touched } = formikProps;
                    return (
                        <Form className="register__form">
                            <div className="register__name">
                                <div>
                                    <label className="form-login__label" for="firstname">First Name</label>
                                    <FastField
                                        name="firstname"
                                        component={inputField}
                                        placeholder="First Name"
                                        onChange={hanldeChange}
                                        className="lol"
                                    >
                                    </FastField>
                                </div>
                                <div>
                                    <label className="form-login__label" for="lastname">Last Name</label>
                                    <FastField
                                        name="lastname"
                                        component={inputField}
                                        placeholder="Last Name"
                                        onChange={hanldeChange}
                                        type="text"
                                    >
                                    </FastField>
                                </div>
                            </div>
                            <label className="form-login__label" for="email">Last Name</label>
                            <FastField
                                name="email"
                                component={inputField}
                                placeholder="Email"
                                onChange={hanldeChange}
                                type="text"
                            >
                            </FastField>
                            <label className="form-login__label" for="password">Last Name</label>
                            <FastField
                                name="password"
                                component={inputField}
                                placeholder="Password"
                                onChange={hanldeChange}
                                type="password"

                            >
                            </FastField>
                            <label className="form-login__label" for="verification">Password Verification</label>
                            <FastField
                                name="verification"
                                component={inputField}
                                placeholder="Password Verification"
                                onChange={hanldeChange}
                                type="password"
                            >
                            </FastField>
                            <label className="form-login__label" for="avatar">Avartar</label>
                            <input
                                name="avatar"
                                placeholder="avatar"
                                onChange={hanldeChangeAvatar}
                                type="file">
                            </input>
                            <Button type="submit" className="btn register__btn" color="primary"  >Register</Button>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    );
}

export default React.memo(Register);