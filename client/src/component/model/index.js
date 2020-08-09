import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import "./style.scss";
import { connect } from 'react-redux';
import { getModelRq, addToCartRq } from '../../redux/action';
import bgOption from '../../public/icon/lamborghini.png';
import { Link } from 'react-router-dom';
import LocomotiveScroll from "locomotive-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';



Index.propTypes = {

};

function Index(props) {
    const id = props.match.match.params.id.toLowerCase();
    const [index, setIndex] = useState(0);
    const [loaded, setLoaded] = useState(id);
    const [optionBg, setOptionBg] = useState({
        color: "",
        imageColor: ""
    });

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        setLoaded(id);
        props.getModelRq(id);
        const scroll = new LocomotiveScroll({
            el: document.querySelector(".App"),
            // smooth: true
        });
        AOS.init({
            duration: 1000
        })
    }, [id]);

    const loadedImg = (item) => {
        if (item === loaded) {
            return "model__header-img--loaded"
        }
    }


    const showBGR = () => {
        const item = props.model;
        if (item.length > 0) {
            return (
                <>
                    <img src={item[0].avatar} className={`model__header-img ${loadedImg(item[0].name)}`}></img>
                    <div className='model__header-content'>
                        <p className="model__header-name" style={setSpacing(item[0].name)}>{item[0].name}</p>
                        <p className="model__header-title">free your power</p>
                    </div>
                    <div className='model__header-footer'>
                        <div className='model__header-parameter'>
                            <p className='model__header-wattage'>Size</p>
                            <p className='model__header-wattage'>{item[0].size}</p>
                        </div>
                        <div className='model__header-parameter'>
                            <p className='model__header-wattage'>Max Speed</p>
                            <p className='model__header-wattage'>{item[0].speed}</p>
                        </div>
                        <div className='model__header-parameter'>
                            <p className='model__header-wattage'>0 - 100 km/h</p>
                            <p className='model__header-wattage'>{item[0].time}</p>
                        </div>

                    </div>
                </>
            )

        }

    }

    const setSpacing = (item) => {
        if (item === "aventador svj roadster") {
            return {
                letterSpacing: "8px",
            }
        }
    }

    const showOverview = () => {
        const item = props.model;
        if (item.length > 0) {
            return (
                <>
                    <div className="model__overview" >
                        <div className="model__overview-bg" data-scroll-container >
                            <img className="model__overview-img model__overview-img--top" data-aos="fade-right"
                                src={item[0].overview.img2}></img>
                            <img className="model__overview-img model__overview-img--bottom" data-aos="fade-left" src={item[0].overview.img1}></img>

                        </div>
                        <div className="model__overview-content"
                            data-aos="zoom-out"
                            data-aos-delay="500"
                        >
                            <div className="model__overview-main">
                                <p className="title model__overview-name">Overview</p>
                                <p style={{ color: "#d19c1e" }}>{item[0].overview.title}</p>
                            </div>
                        </div>

                    </div>
                    <div className="model__exterios"
                        data-aos="fade-up"
                        data-aos-offset="100"
                        data-aos-duration="1500"
                    >
                        <div className="model__exterios-bg "  >
                            <img className="model__exterios-img model__exterios-img--1" src={item[0].exterios.img1}></img>
                        </div>
                        <div
                            className="model__overview-content model__exterios-content"                >
                            <div
                                className="model__overview-main"
                                data-aos="zoom-in"
                                data-aos-offset="100"
                                data-aos-duration="1500"
                            >
                                <p className="title model__exterios-name">exterios</p>
                                <p>{item[0].exterios.title}</p>
                            </div>
                        </div>
                    </div>
                </>
            )

        }
    }

    const showOption = () => {
        const data = props.model;
        if (data.length > 0) {
            return data[0].option.map((item, i) => {
                return (
                    <div
                        className={`model__option-bg ${changeOptionItem(i)}`}
                        style={{ backgroundColor: Object.keys(item) }}
                        onClick={() => changeOption(i, Object.keys(item), item[`${Object.keys(item)}`])}
                    ></div>
                )
            })

        }
    }

    const showImgOption = () => {
        const model = props.model;
        if (model.length > 0) {
            return model[0].option.map((item, i) => {
                const index = Object.keys(item)[0];
                return <img
                    className={`model__option-img ${changeOptionImg(i)}`}
                    src={item[`${index}`]}
                ></img>
            })
        }
    }

    const changeOption = (i, colorBG, imgColor) => {
        setIndex(i);
        setOptionBg({
            ...optionBg,
            color: colorBG[0],
            imageColor: imgColor
        })

    }

    const changeColor = () => {
        setIndex(index + 1);
        if (index === 3) {
            setIndex(0);
        }
    }
    const changeOptionItem = (i) => {
        if (i === index) {
            return "model__option-bg--active"
        }
    }
    const changeOptionImg = (i) => {
        if (i === index) {
            return "model__option-img--block"
        }
    }


    const addToCart = () => {
        const model = props.model;
        const { id, name, price, } = model[0];
        const data = {
            buyer_id: 1,
            product_id: id,
            product_name: name,
            price: price,
            product_type: "model",
            product_color: optionBg.color,
            product_imgBG: optionBg.imageColor
        }
        props.addToCart(data);
    }

    const next = () => {
        const model = props.model;
        const item = model[0].option;

        if (index === item.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1);
        }


    }
    const prev = () => {
        const model = props.model;
        const item = model[0].option;
        console.log(index, item.length)
        if (index === 0) {
            setIndex(item.length - 1)
        } else {
            setIndex(index - 1);
        }
    }





    const optionCpn = () => {
        if (window.screen.width <= 1024) {
            return (
                <>
                    <i className="fa fa-chevron-left model__option-next" aria-hidden="true" onClick={prev} ></i>
                    <i className="fa fa-chevron-right model__option-next model__option-next--prev" aria-hidden="true" onClick={next} ></i>
                    <div className="model__option-changeImg scaleBg">
                        <img
                            data-scroll
                            className={`model__option-img model__option-img--bg`}
                            src={bgOption}
                        ></img>
                        {showImgOption()}
                    </div>
                </>
            )
        }
        return (
            <>
                <div className="model__option-change">
                    {showOption()}
                    <p className="title-first model__option-name">color options</p>
                </div>
                <div className="home__model-control" onClick={changeColor}>
                    <i class="fa fa-chevron-right home__model-icon" aria-hidden="true" ></i>
                </div>
                <div className="model__option-changeImg scaleBg">
                    <img
                        data-scroll
                        className={`model__option-img model__option-img--bg`}
                        src={bgOption}
                    ></img>
                    {showImgOption()}
                </div>
            </>
        )
    }


    const showTechnical = () => {
        const model = props.model;
        console.log(model);
        if (model.length > 0) {
            return (
                <>
                    <div className="model__wattage-technical">
                        <p className="model__wattage-name">displacement</p>
                        <p className="model__wattage-number">{model[0].size}</p>
                    </div>
                    <div className="model__wattage-technical">
                        <p className="model__wattage-name">max power</p>
                        <p className="model__wattage-number">{model[0].speed}</p>
                    </div>
                    <div className="model__wattage-technical">
                        <p className="model__wattage-name">acceleration 0-100 km/h</p>
                        <p className="model__wattage-number">{model[0].time}</p>
                    </div></>
            );
        }

    }



    return (
        <div className="model">
            <div className="model__header" data-scroll-container>
                {showBGR()}
                <div className="model__header-add">
                    <p className="btn">Add To Cart</p>
                </div>
            </div>
            <div className="model__content">
                {showOverview()}
            </div>
            <div
                className="model__option"
                data-aos="zoomBG"
                data-aos-offset="100"
                data-aos-duration="2500"
            >
                {optionCpn()}
            </div>
            <div className="model__wattage"
                data-aos="zoom-in"
                data-aos-offset="-900"
                data-aos-duration="1500"
            >
                <div className="model__wattage-title">
                    <p className="title-second">technical specification</p>
                </div>
                <div className="model__wattage-main">
                    <div className="model__wattage-technical">
                        <p className="model__wattage-name">engine</p>
                        <p className="model__wattage-number">V12 6.5l 60° 700 PS</p>
                    </div>
                    {showTechnical()}
                </div>
                <div className="model__wattage-more">
                    <div>
                        <img className="model__wattage-img" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/s/driving_dynamics/Aventador%20S%20RuoSterz.jpg"></img>
                        <p className="model__wattage-number model__wattage-moreTitle">4-WHEEL STEERING SYSTEM </p>
                        <p className="model__wattage-moreContent">The Aventador S offers a unique combination of the active steering system (Lamborghini Dynamic Steering) and the rear-steering system (Lamborghini Rear-wheel Steering), ensuring top-of-the-line dynamic performance. The LDS system adapts to the speed and the selected driving mode, moving between direct steering and a more indirect mode, while the LRS system manages the rear-steering axle through two electromechanical actuators. This system improves agility at low speeds, providing optimum vehicle control and greater stability at highway speeds.</p>
                    </div>
                    <div>
                        <img className="model__wattage-img" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/s/driving_dynamics/Aventador%20S%20Suspension.jpg"></img>
                        <p className="model__wattage-number model__wattage-moreTitle">4 ACTIVE SUSPENSION </p>
                        <p className="model__wattage-moreContent">The new Aventador S features magneto-rheological front and rear shock absorbers with pushrod system, which constantly modify the behaviour of the suspensions according to the road conditions and the driving mode selected. In addition to compensating roll and undesired body movements, the system has been specially designed to work with the Rear-wheel Steering System, thus ensuring a perfect response in any type of condition.</p>
                    </div>
                    <div>
                        <img className="model__wattage-img" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/s/driving_dynamics/Aventador%20S%204WheelDrive.jpg"></img>
                        <p className="model__wattage-number model__wattage-moreTitle">4-WHEEL DRIVE </p>
                        <p className="model__wattage-moreContent">The 4-wheel-drive system on the Aventador S is optimized to work specifically with the new active systems, in particular rear-wheel steering. This system delivers optimum performance in situations with poor grip. Here, torque distribution between the front and rear axles varies dynamically, depending on the selected driving mode and the driving conditions. Additionally, the Aventador S makes use of a brand-new Pirelli P Zero tire design, specifically developed to further enhance the vehicle’s innovative active driver-assistance systems.</p>
                    </div>
                    <div>
                        <img className="model__wattage-img" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/s/driving_dynamics/Aventador%20S%20DrivingModes.jpg"></img>
                        <p className="model__wattage-number model__wattage-moreTitle">4 DRIVING MODES</p>
                        <p className="model__wattage-moreContent">In any driving condition you might find yourself in, the new Aventador S gives you full control thanks to the driving mode selector, which provides optimal regulation of the engine, transmission, drive, steering, suspensions, and stability control based on the mode selected between STRADA, SPORT, and CORSA. But it’s the addition of the fourth mode that makes the Aventador S a truly unique species: the EGO mode. With this new option, each individual setting becomes customisable, creating the most personal driving experience ever.</p>
                    </div>
                    <div>
                        <img className="model__wattage-img" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/s/driving_dynamics/Aventador%20S%20Engine.png"></img>
                        <p className="model__wattage-number model__wattage-moreTitle"> engine</p>
                        <p className="model__wattage-moreContent">The mid-mount 6.5 liter V-12, generating 740 CV at 8,400 rpm, offers remarkable pick-up at high engine speeds and an incredibly fast response. The incredible acceleration, achieving a 0 to 100 km/h time of just 2.9 seconds, only partially describes the Aventador S, which is a genuine benchmark in the supercar sector.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        model: state.model
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getModelRq: (name) => {
            dispatch(getModelRq(name))
        },
        addToCart: (data) => {
            dispatch(addToCartRq(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);