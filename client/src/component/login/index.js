import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import { useState } from 'react';
import { connect } from 'react-redux';
import { loginRq, hideFormLoginRq, LogoutRq } from '../../redux/action';
import { Formik, Form, FastField, useFormik } from 'formik';
import inputField from '../customField/inputField';
import * as Yup from 'yup';
import './style.scss';
import logo from '../../public/background/logo.png';
import { Link } from 'react-router-dom';

Index.propTypes = {

};

function Index(props) {
    const [valueForm, setValueForm] = useState({
        email: '',
        password: ''
    }
    );
    const onHandleChange = (e) => {
        console.log(e.target.value)
        setValueForm({
            ...valueForm,
            [e.target.name]: e.target.value
        })
    }


    const logoutAc = () => {
        props.logout()

    }

    const handleClose = () => {
        props.hideFormLogin();
    };

    const hanldeSubmit = (values) => {
        props.login(values);
    }



    const initialValues = {
        email: "",
        password: ""
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('email cannot be empty !')
            .email('Invalid email'),
        password: Yup.string().required('pass cannot be empty !')

    });



    const showFormLogin = () => {
        console.log(props.user);
        if (!props.user.firtName && props.user.firstName === "") {
            return (
                <Dialog className="form-login__dialog" open={props.isLogin} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <img className="form-login__img" src={logo}></img>
                    <p className="title-second form-login__title">Login Now</p>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={
                            (values) => {
                                hanldeSubmit(values)
                            }
                        }
                    >
                        {formikProps => {
                            const { values, errors, touched } = formikProps;
                            return (
                                <Form className="form-login__control">
                                    <p className="form-login__label" for="email">Email</p>
                                    <FastField
                                        name="email"
                                        component={inputField}
                                        placeholder="Email"
                                        className="form-login__input"
                                    >
                                    </FastField>
                                    <p className="form-login__label" for="password">Password</p>
                                    <FastField
                                        name="password"
                                        component={inputField}
                                        placeholder="Password"
                                        type="password"
                                        className="form-login__input"
                                    >
                                    </FastField>
                                    <div className="form-login__controlBtn">
                                        <Button type="submit" className="btn" color="primary" label="" >Login</Button>
                                        <Button color="primary" className="btn" onClick={handleClose}>Cancel</Button>
                                    </div>
                                    <p className="form-login__register">No account, click register to <Link to='/register' onClick={handleClose} className="form-login__link">register</Link> account</p>
                                </Form>
                            )
                        }}
                    </Formik>
                </Dialog >
            )
        } else {
            return (
                <Dialog className="form-login__dialog" open={props.isLogin} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <img className="form-login__img" src={logo}></img>
                    <div>
                        <img className="navbar__logo-user" src={props.user.avatar}></img>
                        <p>{props.user.firstName}</p>
                        <p>{props.user.lastName}</p>
                        <Button type="submit" color="primary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button type="submit" color="primary" onClick={logoutAc}>
                            Đăng Xuất
                        </Button>

                    </div>

                </Dialog>
            )
        }
    }



    return (
        <>
            {showFormLogin()}
        </>
    )
}


const mapStateToProps = state => {
    return {
        isLogin: state.user.isLogin,
        user: state.user.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => {
            dispatch(loginRq(data))
        },
        hideFormLogin: () => {
            dispatch(hideFormLoginRq());
        },
        logout: () => {
            dispatch(LogoutRq())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);