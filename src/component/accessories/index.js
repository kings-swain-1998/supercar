import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { connect } from 'react-redux';
import { getAccessoriesRq } from '../../redux/action';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';

Index.propTypes = {

};

function Index(props) {
    console.log(props.match.match.params.name);
    const name = props.match.match.params.name;
    useEffect(() => {

        props.getAccessories(name);
    }, [name]);
    const showProducts = () => {
        const products = props.products;
        return products.map((item, i) => {
            return (
                <div className="col-xl-3 col-6 col-sm-6 col-md-4 acces__item" key={i}>
                    <div className="acces__item-img">
                        <img src={item.image} className="acces__img"></img>
                    </div>
                    <div className="acces__content">
                        <p className="acces__name">{item.name}</p>
                        <p className="acces__name acces__name--price">USD: {item.price}$</p>
                    </div>
                    <div className="acces__action">
                        <p><ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon> Add to Cart</p>
                        <Link><RemoveRedEyeOutlinedIcon></RemoveRedEyeOutlinedIcon> View detail </Link>

                    </div>
                </div>
            )
        })
    }

    return (
        <div className="acces">
            <div className="acces__header">

            </div>
            <div className="acces__products">
                <div className="acces__option-products">

                </div>
                <div className="acces__list container">
                    <div className="row acces__list-item" >
                        {showProducts()}
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        products: state.accessories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAccessories: (name) => {
            dispatch(getAccessoriesRq(name))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);