import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './home.scss';
import { Player } from 'video-react';
import ReactPlayer from "react-player";
import videoBg from '../../public/video/video.mp4';
import { Link } from 'react-router-dom';


Home.propTypes = {

};

function Home(props) {
    const [model, setModel] = useState(0);
    const [accessories, setAccessories] = useState(0);


    const prevModel = () => {
        if (model > 0 || model === 2) {
            setModel(model - 1)
        } else if (model === 0) {
            setModel(2)
        }
    }

    const nextModel = () => {
        if (model < 2) {
            setModel(model + 1)
        } else if (model === 2) {
            setModel(0)
        }
    }


    // accessories


    const prevAccess = () => {
        if (accessories > 0 || accessories === 2) {
            setAccessories(accessories - 1)
        } else if (accessories === 0) {
            setAccessories(2)
        }
    }

    const nextAccess = () => {
        if (accessories < 2) {
            setAccessories(accessories + 1)
        } else if (accessories === 2) {
            setAccessories(0)
        }
    }

    // change class model

    const showModel = (i) => {
        if (i === model) {
            return "home__model-active"
        }
        if (model === 0) {
            if (i === 1) {
                return "home__model-1"
            } else if (i === 2) {
                return "home__model-2"
            }
        }
        if (i - model === 1) {
            return "home__model-1"
        } else if (i - model === -1) {
            return "home__model-2"
        }

        if (i - model === -2) {
            return "home__model-1"
        }
    }

    const showAccessories = (i) => {
        if (i === accessories) {
            return "home__model-active"
        }
        if (accessories === 0) {
            if (i === 1) {
                return "home__model-1"
            } else if (i === 2) {
                return "home__model-2"
            }
        }
        if (i - accessories === 1) {
            return "home__model-1"
        } else if (i - accessories === -1) {
            return "home__model-2"
        }

        if (i - accessories === -2) {
            return "home__model-1"
        }
    }

    const showModelContent = () => {
        if (model === 0) {
            return (
                <>
                    <h1 className="home__model-name">AVENTARDO S</h1>
                    <h3 className="home__model-title ">REAL EMOTIONS SHAPE THE FUTURE</h3>
                    <Link className='btn home__model-btn home__model-btn--1'>See details</Link>
                </>

            )
        }
        if (model === 1) {
            return (
                <>
                    <h1 className="home__model-name home__model-name--1 ">HURACAN EVO</h1>
                    <h3 className="home__model-title home__model-title--1">REWIND TO REAR-WHEEL DRIVE</h3>
                    <Link className='btn home__model-btn home__model-btn--2'>See details</Link>
                </>

            )
        }
        if (model === 2) {
            return (
                <>
                    <h1 className="home__model-name home__model-name--2">URUS</h1>
                    <h3 className="home__model-title home__model-title--2">UNLOCK ANY ROAD</h3>
                    <Link className='btn home__model-btn home__model-btn--3'>See details</Link>
                </>

            )
        }
    }

    const showAcessoriesContent = () => {
        if (accessories === 0) {
            return (
                <>
                    <h1 className="home__model-name">MEN'S SWEATSHIRTS</h1>
                    <h3 className="home__model-title ">REAL EMOTIONS SHAPE THE FUTURE</h3>
                    <Link className='btn home__model-btn home__model-btn--1'>See details</Link>
                </>

            )
        }
        if (accessories === 1) {
            return (
                <>
                    <h1 className="home__model-name home__model-name--1 ">CAP HALVED SHIELD</h1>
                    <h3 className="home__model-title home__model-title--1">REAL EMOTIONS SHAPE THE FUTURE</h3>
                    <Link className='btn home__model-btn home__model-btn--2'>See details</Link>
                </>

            )
        }
        if (accessories === 2) {
            return (
                <>
                    <h1 className="home__model-name home__model-name--2">MODISH SNEAKER</h1>
                    <h3 className="home__model-title home__model-title--2">REAL EMOTIONS SHAPE THE FUTURE</h3>
                    <Link className='btn home__model-btn home__model-btn--3'>See details</Link>
                </>

            )
        }
    }

    return (
        <div className="home">
            <div className="home__header">
                <div className="home__header-background">
                    <ReactPlayer
                        className="home__header-video"
                        url={videoBg}
                        playing={true}
                        controls={false}
                        muted={true}
                        loop={true}
                        vimeoConfig={{ iframeParams: { fullscreen: 1 } }}
                        autoPlay

                    />
                </div>
                <div className="home__header-content">
                </div>
            </div>
            <div className="home__model">
                <h1 className="home__model-container">models</h1>
                <div className="home__model-carousel">
                    <div className={`home__model-item ${showModel(0)}`}>
                        <img class="home__model-img " src="https://i.pinimg.com/originals/6f/1e/17/6f1e17a68b9e5f86d78d3bb4437b7ec2.jpg"></img>
                    </div>
                    <div className={`home__model-item ${showModel(1)}`}>
                        <img class="home__model-img" src="https://www.hdcarwallpapers.com/walls/adv1_lamborghini_huracan_4k-wide.jpg"></img>
                    </div>
                    <div className={`home__model-item ${showModel(2)}`}>
                        <img class="home__model-img " src="https://i.pinimg.com/originals/38/8f/9e/388f9e57b91f19c7d8b911b5d4989941.jpg"></img>
                    </div>
                </div>
                <div className="home__model-content">
                    {showModelContent()}
                </div>
                <div className="home__model-control" onClick={nextModel}>
                    <i class="fa fa-chevron-right home__model-icon" aria-hidden="true" ></i>
                </div>
            </div>
            <div className="home__model">
                <h1 className="home__model-container">accessories</h1>
                <div className="home__model-carousel">
                    <div className={`home__model-item ${showAccessories(0)}`}>
                        <img class="home__model-img " src="https://www.dhresource.com/0x0/f2/albu/g9/M00/1E/9F/rBVaVVwYr6GAB75MAAOYghf4ksg017.jpg"></img>
                    </div>
                    <div className={`home__model-item ${showAccessories(1)}`}>
                        <img class="home__model-img" src="https://cf.shopee.com.my/file/8d3d21717b0f310cb5e0921c05915347"></img>
                    </div>
                    <div className={`home__model-item ${showAccessories(2)}`}>
                        <img class="home__model-img " src="https://3dkingstore.com/wp-content/uploads/2019/05/mb-6.jpg"></img>
                    </div>
                </div>
                <div className="home__model-content">
                    {showAcessoriesContent()}
                </div>
                <div className="home__model-control" onClick={prevAccess}>
                    <i class="fa fa-chevron-right home__model-icon" aria-hidden="true" ></i>
                </div>

            </div>
            <div className=" home__new">
                <h1 className="home__new-title">Upcoming events</h1>
                <div className=" home__new-content">
                    <div className=" home__new-item">
                        <div className=" home__new-header">
                            <img className="home__new-img" src="https://i.ytimg.com/vi/ZshOGhxIaHo/maxresdefault.jpg"></img>
                        </div>
                        <div className=" home__new-main">
                            <div className="home__new-information  home__new-information--name">
                                <i class="fa fa-calendar" aria-hidden="true"></i>
                                <p className=" home__new-date">20-10-2020</p>
                            </div>
                            <div className="home__new-information">
                                <i class="fa fa-podcast" aria-hidden="true"></i>
                                <p className=" home__new-name">Lamborghini Declares It Is Done With Traditional Auto Shows</p>
                            </div>
                            <div className="home__new-information">
                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                <p className="home__new-adress">Ha Noi City</p>
                            </div>
                            <Link className='btn home__new-btn'>Read more</Link>
                        </div>
                    </div>
                    <div className=" home__new-item">
                        <div className=" home__new-header">
                            <img className="home__new-img" src="https://images.hgmsites.net/hug/a-fashion-show-marks-the-opening-of-russias-first-lamborghini-dealership_100388390_h.jpg"></img>
                        </div>
                        <div className=" home__new-main">
                            <div className="home__new-information">
                                <i class="fa fa-calendar" aria-hidden="true"></i>
                                <p className=" home__new-date">20-10-2020</p>
                            </div>
                            <div className="home__new-information">
                                <i class="fa fa-podcast" aria-hidden="true"></i>
                                <p className=" home__new-name">lamboghini autumn and winter fashion week 2020</p>
                            </div>
                            <div className="home__new-information">
                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                <p className=" home__new-adress">Ho Chi Minh City</p>
                            </div>
                            <Link className='btn home__new-btn'>Read more</Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className="home__footer">
                <div className="home__footer-content">
                    <h1 className="home__footer-title">lamborghini</h1>
                </div>
                <div className="home__footer-more">
                    <img className="home__footer-img" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/people/ferruccio-right.jpg"></img>
                    <img className="home__footer-img1" src="https://i.pinimg.com/originals/ca/36/bf/ca36bfef6966bea4cb8c2ed33f38c06a.png"></img>
                </div>
            </div>
        </div>
    );
}

export default Home;