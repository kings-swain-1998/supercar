import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink, useHistory, useRouteMatch } from 'react-router-dom';
import aventadorsImg from '../../../public/background/model/aventador/aventadors.jpg';
import aventadorsroadsterImg from '../../../public/background/model/aventador/aventadorsroadster.jpg';
import aventadorsvjImg from '../../../public/background/model/aventador/aventadorsvj.jpg';
import aventadorsvjroadsterImg from '../../../public/background/model/aventador/aventadorsvjroadster.jpg';

import huracanevoImg from '../../../public/background/model/huracan/huracanevo.jpg';
import huracanevospyderImg from '../../../public/background/model/huracan/huracanevospyder.jpg';
import huracanrwdImg from '../../../public/background/model/huracan/huracanrwd.jpg';
import huracanrwdspyderImg from '../../../public/background/model/huracan/huracanrwdspyder.jpg';

import urusImg from '../../../public/background/model/urus/urus.jpg';
import uruspealcapsuleImg from '../../../public/background/model/urus/uruspealcapsule.jpg';


import sianfkp37Img from '../../../public/background/model/limit/sianfkp37.jpg';
import centenarioImg from '../../../public/background/model/limit/centenario.jpg';
import centenarioroadsterImg from '../../../public/background/model/limit/centenarioroadster.jpg';

import asterionImg from '../../../public/background/model/concept/asterion.jpg';
import terzomillennioImg from '../../../public/background/model/concept/terzomillennio.jpg';
import estoqueImg from '../../../public/background/model/concept/estoque.jpg';

import clotherImg from '../../../public/background/accessories/clother.jpg';
import shoesImg from '../../../public/background/accessories/shoes.jpg';
import hatImg from '../../../public/background/accessories/hat.jpg';
import walletImg from '../../../public/background/accessories/wallet.jpg';
import beltImg from '../../../public/background/accessories/belt.jpg';


import toymodelImg from '../../../public/background/toymodel/toymodel.jpg';








DiscoverMain.propTypes = {

};

function DiscoverMain(props) {
    const content = props.content;
    const inContent = props.inContent;
    const indexContent = props.indexContent;
    const clother = props.inContent;


    const model = [
        { title: "aventadors", image: aventadorsImg },
        { title: "aventadorsvj", image: aventadorsvjImg },
        { title: "aventadorsvjroadster", image: aventadorsvjroadsterImg },
        { title: "aventadorsroadster", image: aventadorsroadsterImg },
        { title: "huracanevo", image: huracanevoImg },
        { title: "huracanevospyder", image: huracanevospyderImg },
        { title: "huracanrwd", image: huracanrwdImg },
        { title: "huracanrwdspyder", image: huracanrwdspyderImg },
        { title: "urus", image: urusImg },
        { title: "uruspearlcapsule", image: uruspealcapsuleImg },
        { title: "sianfkp37", image: sianfkp37Img },
        { title: "centenario", image: centenarioImg },
        { title: "centenarioroadster", image: centenarioroadsterImg },
        { title: "asterion", image: asterionImg },
        { title: "terzomillennio", image: terzomillennioImg },
        { title: "estoque", image: estoqueImg },
    ];

    const accessories = [
        { title: "clother", image: clotherImg },
        { title: "shoes", image: shoesImg },
        { title: "hat", image: hatImg },
        { title: "wallet", image: walletImg },
        { title: "belt", image: beltImg },
    ];

    function classDiscover() {
        if (content === true) {
            return "menu__content--show"
        } else if (content === "") {
            return
        }
        else {
            return "menu__content--hide"
        }
    }


    const toLink = (id) => {
        props.hideMenu();
        props.hideContent();
    }


    function hanldeShowContent() {
        switch (indexContent) {
            case 2:
                if (inContent) {
                    for (let i = 0; i <= model.length; i++) {
                        const title = inContent.trim().split(" ").join('').toLowerCase();
                        if (model[i].title === title) {
                            return <>
                                <img className="menu__content-img" src={model[i].image}></img>

                                <Link
                                    className="menu__content-link"
                                    to={`/model/${inContent}`}
                                    onClick={() => toLink(model[i].title)}
                                >View Model</Link>
                            </>
                        }
                        else {

                        }
                    }
                }

            case 4:
                if (inContent) {
                    if (accessories.length > 0) {
                        for (let i = 0; i <= accessories.length; i++) {
                            const title = inContent.trim().split(" ").join('').toLowerCase();
                            if (accessories[i].title === title) {
                                return (
                                    <>
                                        <img className="menu__content-img" src={accessories[i].image}></img>
                                        <Link
                                            className="menu__content-link"
                                            to={`/accessories/${accessories[i].title}`}
                                            onClick={() => toLink(model[i].title)}
                                        >View Model</Link>
                                    </>
                                )
                            }
                        }
                    }

                }
            case 5:
                return <img className="menu__content-img" src={toymodelImg}></img>
            default:
                return <img className="menu__content-img" src={toymodelImg}></img>
        }
    }




    return (
        <div className={`menu__content ${classDiscover()} `}>
            {hanldeShowContent()}
        </div>
    );
}

export default DiscoverMain;