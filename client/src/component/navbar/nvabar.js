import React, { useEffect, useState } from 'react';
import './navbar.scss';
import PropTypes from 'prop-types';
import { Link, Redirect, useHistory } from "react-router-dom";
import logo from '../../public/background/logo.png';
import { connect } from 'react-redux';
import { openFormLoginRq, getCartItemRq, getCartAccessoriesRq, getUserLocal } from '../../redux/action';

Nvabar.propTypes = {

};

function Nvabar(props) {
    const [open, setOpen] = useState(false);
    const menu = props.menu;
    const history = useHistory();
    useEffect(() => {
        const id = localStorage.getItem("ID");
        const token = localStorage.getItem("token");
        props.getUserLocalRq();
        props.acGetCartItem(id, token);
        props.acgetCartAccessories(id, token);
    }, []);

    function scrollNav() {
        if (props.offset > 0) {
            return "navbar navbar--white";
        } else {
            return "navbar";
        }
    }
    function showForm() {
        setOpen(!open)
    }

    function navbarShow() {
        if (menu === false || menu === "") {
            return "navbar__menu"
        } else {
            return "navbar__menu navbar__menu--white"
        }
    }

    function showIconMenu() {
        if (menu === false || menu === "") {
            return (
                <div className="navbar__icon-show">
                    <div className="navbar__line navbar__line--1"></div>
                    <div className="navbar__line navbar__line--2"></div>
                    <div className="navbar__line navbar__line--3"></div>
                </div>
            )
        }
        else {
            return (
                <div className="navbar__icon-hide">
                    <div className="navbar__line navbar__line--4"></div>
                    <div className="navbar__line navbar__line--5"></div>
                </div>
            )
        }
    }

    function showMenuRq() {
        const showMenu = props.showMenu;
        showMenu();
    }

    const openFormLogin = () => {
        props.openLoginRq();
    }


    const logoUser = () => {
        console.log(props.user)
        if (props.user.firstName) {
            return <img className="navbar__logo-user" src={props.user.avatar} onClick={openFormLogin}></img>
        } else {
            return <i className="navbar__login-icon fa fa-user-circle" aria-hidden="true" onClick={openFormLogin}></i>
        }

    }

    const getToCart = () => {
        if (!props.user.firtName && props.user.firstName === "") {
            return props.openLoginRq();
        } else {
            return <Redirect to="/cart"></Redirect>
        }
    }

    const numberOfCart = () => {
        return props.cartModel.length + props.cartAccessories.length;
    }

    return (
        <div className={scrollNav()}>
            <div className="navbar__main">
                <div className={navbarShow()} onClick={showMenuRq}>
                    {showIconMenu()}
                    <div className="navbar__content">
                        <p className="navbar__title">Menu</p>
                    </div>
                </div>
                <Link className="navbar__link" to="/">
                    <img src={logo} className="navbar__logo" />
                </Link>
                <div className="navbar__support">
                    {
                        logoUser()
                    }
                    <div>
                        <Link onClick={getToCart}>
                            <i className="navbar__login-icon fa fa-cart-plus" aria-hidden="true" ></i>
                            <p>{numberOfCart()}</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user.user,
        cartModel: state.cart,
        cartAccessories: state.cartAccessories
    }
}
const mapDispatchToProps = dispatch => {
    return {
        openLoginRq: () => {
            dispatch(openFormLoginRq())
        },
        getUserLocalRq: () => {
            dispatch(getUserLocal())
        },
        acGetCartItem: (id, token) => {
            dispatch(getCartItemRq(id, token));

        },
        acgetCartAccessories: (id, token) => {
            dispatch(getCartAccessoriesRq(id, token))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nvabar);