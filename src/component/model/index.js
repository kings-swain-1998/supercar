import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "./style.scss";
import { connect } from 'react-redux';
import { getModelRq } from '../../redux/action';
import bgOption from '../../public/icon/lamborghini.png';

Index.propTypes = {

};

function Index(props) {
    const [index, setIndex] = useState(0);

    const id = props.match.match.params.id.toLowerCase();
    useEffect(() => {
        console.log(id)
        props.getModelRq(id);
    }, [id]);

    const showBGR = () => {
        const item = props.model;
        if (item.length > 0) {
            return (
                <>
                    <img src={item[0].avatar} className="model__header-img"></img>
                    <p className="model__header-name">{item[0].name}</p>
                </>
            )

        }

    }

    const showOverview = () => {
        const item = props.model;
        if (item.length > 0) {
            return (
                <>
                    <div className="model__overview">
                        <div className="model__overview-bg">
                            <img className="model__overview-img" src={item[0].avatar}></img>
                        </div>
                        <div className="model__overview-content">
                            <div className="model__overview-main">
                                <p className="title">Overview</p>
                                <p>{item[0].overview}</p>
                            </div>

                        </div>
                    </div>
                    <div className="model__overview model__overview--exterios">
                        <div className="model__overview-content">
                            <div className="model__overview-main">
                                <p className="title">exterios</p>
                                <p>{item[0].exterios}</p>
                            </div>

                        </div>
                        <div className="model__overview-bg">
                            <img className="model__overview-img" src={item[0].option[1].green}></img>
                        </div>
                    </div>
                </>
            )

        }
    }

    const showOption = () => {
        const item = props.model;
        if (item.length > 0) {
            return item[0].option.map((item, i) => {
                return (
                    <div
                        className={`model__option-bg ${changeOptionItem(i)}`}
                        style={{ backgroundColor: Object.keys(item) }}
                        onClick={() => changeOption(i)}
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

    const changeOption = (i) => {
        setIndex(i)
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


    return (
        <div className="model">
            <div className="model__header">
                {showBGR()}
            </div>
            <div className="model__content">
                {showOverview()}
            </div>
            <div className="model__option">
                <div className="model__option-change">
                    {showOption()}
                </div>
                <div className="model__option-changeImg">
                    <img
                        className={`model__option-img model__option-img--bg`}
                        src={bgOption}
                    ></img>
                    {showImgOption()}
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);