import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


Model.propTypes = {

};

function Model(props) {
    const menu = props.menu;
    const handleMenu = props.handleMenu;
    const model = props.model;

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
        props.handleInContent("");
    }
    function openContent(i) {
        props.setContent();
        props.handleInContent(i);
    }


    function showModel() {
        switch (model) {
            case "aventador":
                if (window.screen.width <= 1024) {
                    return props.data.aventador.map((item) => {
                        return (
                            <Link to={`/model/${item.title}`} className={`menu__model ${showLink()}`} style={{ backgroundImage: `url(${item.image})` }}>
                                <p>{item.title}</p>
                            </Link>
                        )
                    })
                } else {
                    return props.data.aventador.map((item, i) => {
                        return (
                            <p
                                key={i}
                                className={`menu__link ${showLink()}`}
                                onClick={() => openContent(item.title)}
                            >
                                {item.title}
                            </p>
                        );
                    });
                }
            case "huracan":
                if (window.screen.width <= 1024) {
                    return props.data.huracan.map((item) => {
                        return (
                            <Link to={`/model/${item.title}`} className={`menu__model ${showLink()}`} style={{ backgroundImage: `url(${item.image})` }}>
                                <p>{item.title}</p>
                            </Link>
                        )
                    })
                } else {
                    return props.data.huracan.map((item, i) => {
                        return (
                            <p
                                key={i}
                                className={`menu__link ${showLink()}`}
                                onClick={() => openContent(item.title)}
                            >
                                {item.title}
                            </p>
                        );
                    });
                }
            case "urus":
                if (window.screen.width <= 1024) {
                    return props.data.urus.map((item) => {
                        return (
                            <Link to={`/model/${item.title}`} className={`menu__model ${showLink()}`} style={{ backgroundImage: `url(${item.image})` }}>
                                <p>{item.title}</p>
                            </Link>
                        )
                    })
                } else {
                    return props.data.urus.map((item, i) => {
                        return (
                            <p
                                key={i}
                                className={`menu__link ${showLink()}`}
                                onClick={() => openContent(item.title)}
                            >
                                {item.title}
                            </p>
                        );
                    });
                }
            case "limit":
                if (window.screen.width <= 1024) {
                    return props.data.limit.map((item) => {
                        return (
                            <Link to={`/model/${item.title}`} className={`menu__model ${showLink()}`} style={{ backgroundImage: `url(${item.image})` }}>
                                <p>{item.title}</p>
                            </Link>
                        )
                    })
                } else {
                    return props.data.limit.map((item, i) => {
                        return (
                            <p
                                key={i}
                                className={`menu__link ${showLink()}`}
                                onClick={() => openContent(item.title)}
                            >
                                {item.title}
                            </p>
                        );
                    });
                }
            case "concept":
                if (window.screen.width <= 1024) {
                    return props.data.concept.map((item) => {
                        return (
                            <Link to={`/model/${item.title}`} className={`menu__model ${showLink()}`} style={{ backgroundImage: `url(${item.image})` }}>
                                <p>{item.title}</p>
                            </Link>
                        )
                    })
                } else {
                    return props.data.concept.map((item, i) => {
                        return (
                            <p
                                key={i}
                                className={`menu__link ${showLink()}`}
                                onClick={() => openContent(item.title)}
                            >
                                {item.title}
                            </p>
                        );
                    });
                }

            default:
                return

        }
    }

    return (
        <div>
            <div className="menu__list  menu__list--option">
                <Link className={`menu__link ${showLink()}`} onClick={() => nextmenu(2)}>back</Link>
                {showModel()}
            </div>
        </div>
    );
}

export default Model;