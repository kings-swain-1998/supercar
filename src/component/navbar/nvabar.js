import React, { useEffect, useState } from 'react';
import './navbar.scss';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import logo from '../../public/background/logo.png';

Nvabar.propTypes = {

};

function Nvabar(props) {
    const [open, setOpen] = useState(false);
    const menu = props.menu;

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
                </div>
            </div>
        </div>
    );
}

export default Nvabar;