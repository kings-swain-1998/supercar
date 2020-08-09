import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

Option.propTypes = {

};

function Option(props) {

    const menu = props.menu;
    const handleMenu = props.handleMenu;

    function showLink() {
        if (menu === true) {
            return "menu__link--show"
        } else {
            return "menu__link--hide"
        }
    }

    function nextmenu(i) {
        handleMenu(i);
        props.hideContent();
        props.handleInContent('');
        // props.handleIndexContent(0);
    }
    function openModel(i) {
        handleMenu(3);
        props.hanldeModel(i);
        console.log(i)
        // props.handleInContent(i);
    }

    function openContent(i) {
        props.setContent();
        props.handleInContent(i);
    }



    function hanldeOption() {
        const menuLink = props.menuLink;
        switch (menuLink) {
            case 2:
                return (
                    <>
                        <p className={`menu__link ${showLink()}`} onClick={() => openModel("aventador")}>Aventador</p>
                        <p className={`menu__link ${showLink()}`} onClick={() => openModel("huracan")}>Huracan</p>
                        <p className={`menu__link ${showLink()}`} onClick={() => openModel("urus")}>Urus</p>
                        <p className={`menu__link ${showLink()}`} onClick={() => openModel("limit")}>Limited Series</p>
                        <p className={`menu__link ${showLink()}`} onClick={() => openModel("concept")}>Concept</p>
                    </>

                )
            case 4:
                return (
                    <>
                        <p className={`menu__link ${showLink()}`} onClick={() => openContent("clother")}>clother</p>
                        <p className={`menu__link ${showLink()}`} onClick={() => openContent("shoes")}>shoes</p>
                        <p className={`menu__link ${showLink()}`} onClick={() => openContent("hat")}>hat</p>
                        <p className={`menu__link ${showLink()}`} onClick={() => openContent("wallet")}>wallet</p>
                        <p className={`menu__link ${showLink()}`} onClick={() => openContent("belt")}>belt</p>
                    </>
                )
            default:
                return
        }
    }

    return (
        <div className="menu__list  menu__list--option">
            <p className={`menu__link ${showLink()}`} onClick={() => nextmenu(1)}>back</p>
            {hanldeOption()}
        </div>
    );
}

export default Option;