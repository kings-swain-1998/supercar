import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

Main.propTypes = {

};

function Main(props) {
    const menu = props.menu;
    const handleMenu = props.handleMenu;

    function showLink() {
        if (menu === true) {
            return "menu__link--show"
        }
        else {
            return "menu__link--hide"
        }
    }



    function nextmenu(i) {
        handleMenu(i);
        props.handleIndexContent(i);

    }
    function nextContent(i) {
        props.setContent();
        props.handleIndexContent(i);
    }


    return (
        <div className={`menu__list `}>
            <p className={`menu__link ${showLink()}`} onClick={() => nextmenu(2)}>Model</p>
            <p className={`menu__link ${showLink()}`} onClick={() => nextmenu(4)}>accessories</p>
            <p className={`menu__link ${showLink()}`} onClick={() => nextContent(5)}>toys model</p>
            <Link className={`menu__link ${showLink()}`} onClick={() => nextmenu(5)} to="/">support for you</Link>
            <Link className={`menu__link ${showLink()}`} onClick={() => nextmenu(6)} to="/">support for you</Link>
            <Link className={`menu__link ${showLink()}`} onClick={() => nextmenu(7)} to="/">about us</Link>
        </div>
    );
}

export default Main;