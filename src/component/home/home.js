import React from 'react';
import PropTypes from 'prop-types';
import './home.scss';
import { Player } from 'video-react';
import ReactPlayer from "react-player";
import videoBg from '../../public/video/video.mp4';


Home.propTypes = {

};

function Home(props) {
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
                    />
                </div>
                <div className="home__header-content">
                    <div>
                        <div className="home__header-mainTitle">
                            <h1 className="home__header-title">SPACE TRAVEL</h1>
                        </div>
                        <h2 className="home__header-subtitle">Discover the universe</h2>
                        <button>Go Go Go</button>
                    </div>

                </div>
            </div>
            <div className="home__main">
                <div className="container home__container">
                    <div className="row home__content">
                        <div className="col-sm col-xl-6 col-md-6 home__about">
                            <p className="home__about-title">"Actualization the dream to bring people to space. And we are the ones who accomplish this"</p>
                            {/* <img className="home__image home__image--3" src={Astronaut3}></img> */}
                        </div>
                        <div className="home__description-line"></div>
                        <div className="col-sm col-xl-6 col-md-6 home__description">
                            <div className="home__description-BG home__description-BG--1"></div>
                            <div className="home__description-BG home__description-BG--2"></div>
                            <div className="home__description-BG home__description-BG--3"></div>

                            <h2 className="home__description-content">"bring space travel to commercialization"</h2>
                            <p className="home__description-title">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veritatis nisi, consequatur, laborum libero a neque ducimus. Porro rem illum quo nostrum quisquam asperiores, blanditiis, consectetur. Possimus facilis velit, voluptatibus!
					        </p>
                        </div>
                    </div>
                    <div className="row home__service">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;