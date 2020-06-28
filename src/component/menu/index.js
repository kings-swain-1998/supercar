import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Link } from 'react-router-dom';
import Option from './menulist/option/option';
import Main from './menulist/main/main';
import Model from './menulist/model/model';
import aventadorsImg from '../../public/background/model/aventador/aventadors.jpg';
import aventadorsvjImg from '../../public/background/model/aventador/aventadorsvj.jpg';
import aventadorsroadsterImg from '../../public/background/model/aventador/aventadorsroadster.jpg';
import aventadorsvjroadsterImg from '../../public/background/model/aventador/aventadorsvjroadster.jpg';
import huracanevoImg from '../../public/background/model/huracan/huracanevo.jpg';
import huracanevospyderImg from '../../public/background/model/huracan/huracanevospyder.jpg';
import huracanrwdImg from '../../public/background/model/huracan/huracanrwd.jpg';
import huracanrwdspyderImg from '../../public/background/model/huracan/huracanrwdspyder.jpg';
import urusImg from '../../public/background/model/urus/urus.jpg';
import uruspealcapsuleImg from '../../public/background/model/urus/uruspealcapsule.jpg';
import sianfkp37Img from '../../public/background/model/limit/sianfkp37.jpg';
import centenarioroadsterImg from '../../public/background/model/limit/centenarioroadster.jpg';
import centenarioImg from '../../public/background/model/limit/centenario.jpg';
import asterionImg from '../../public/background/model/concept/asterion.jpg';
import terzomillennioImg from '../../public/background/model/concept/terzomillennio.jpg';
import estoqueImg from '../../public/background/model/concept/estoque.jpg';





Menu.propTypes = {

};

function Menu(props) {

    const menu = props.menu;
    const [menuLink, setMenuLink] = useState(1);
    const [model, setModel] = useState(1);
    const data = {
        aventador: [
            { title: "aventador s", image: aventadorsImg },
            { title: "aventador svj", image: aventadorsvjImg },
            { title: "aventador svj roadster", image: aventadorsvjroadsterImg },
            { title: "aventadors roadster", image: aventadorsroadsterImg },
        ],
        huracan: [
            { title: "huracan evo", image: huracanevoImg },
            { title: "huracan evo spyder", image: huracanevospyderImg },
            { title: "huracan rwd", image: huracanrwdImg },
            { title: "huracan rwd spyder", image: huracanrwdspyderImg },
        ],
        urus: [
            { title: "urus", image: urusImg },
            { title: "urus pearl capsule", image: uruspealcapsuleImg },
        ],
        limit: [
            { title: "sian fkp 37", image: sianfkp37Img },
            { title: "centenario", image: centenarioImg },
            { title: "centenario roadster", image: centenarioroadsterImg },
        ],
        concept: [
            { title: "asterion", image: asterionImg },
            { title: "terzomillennio", image: terzomillennioImg },
            { title: "estoque", image: estoqueImg },
        ]
    }


    function showForm() {
        if (menu === true) {
            return " menu--show";
        } else if (menu === "") {
            return;
        }
        else {
            return " menu--hide";
        }
    }

    function showMenuRq() {
        const hideMenu = props.hideMenu;
        hideMenu();
        setMenuLink(1);
        props.hideContent()
    }


    function handleMenu(i) {
        setMenuLink(i)
    }
    function hideContent() {
        props.hideContent()
    }


    function hanldeModel(i) {
        setModel(i)
    }


    function showMenu() {
        switch (menuLink) {
            case 1:
                return <Main
                    handleMenu={(i) => handleMenu(i)}
                    menu={menu}
                    handleIndexContent={props.handleIndexContent}
                    setContent={props.setContent}
                ></Main>

            case 2:
                return <Option
                    handleInContent={(i) => props.handleInContent(i)}
                    hideContent={hideContent}
                    setContent={props.setContent}
                    setOption={props.setOption}
                    handleMenu={(i) => handleMenu(i)}
                    menu={menu}
                    hanldeModel={(i) => hanldeModel(i)}
                    menuLink={menuLink}
                    handleIndexContent={(i) => props.handleIndexContent(i)}
                ></Option>
            case 3:
                return <Model
                    handleInContent={(i) => props.handleInContent(i)}
                    handleIndexContent={(i) => props.handleIndexContent(i)}
                    hideContent={hideContent}
                    setContent={props.setContent}
                    setOption={props.setOption}
                    handleMenu={(i) => handleMenu(i)}
                    menu={menu}
                    model={model}
                    data={data}
                ></Model>
            case 4:
                return <Option
                    handleInContent={(i) => props.handleInContent(i)}
                    hideContent={hideContent}
                    setContent={props.setContent}
                    setOption={props.setOption}
                    handleMenu={(i) => handleMenu(i)}
                    menu={menu}
                    menuLink={menuLink}
                    handleIndexContent={(i) => props.handleIndexContent(i)}
                ></Option>
            default:
                return
        }
    }


    return (
        <div className={`menu ${showForm()}`}>
            <div className="icon-hide navbar__icon-hide" onClick={showMenuRq}>
                <div className="navbar__line navbar__line--4"></div>
                <div className="navbar__line navbar__line--5"></div>
            </div>
            {showMenu()}
        </div>

    );
}

export default React.memo(Menu);