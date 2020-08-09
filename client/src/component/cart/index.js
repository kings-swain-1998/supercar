import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { getCartItemRq, getCartAccessoriesRq } from '../../redux/action';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import CartModel from './cartModel/index';
import Accessories from './cartAccessories/index';

Index.propTypes = {

};

function Index(props) {
    const [cartActive, setCartActive] = useState(1);
    useEffect(() => {
        const id = localStorage.getItem("ID");
        const token = localStorage.getItem("token");
        props.acGetCartItem(id, token);
        props.getCartAccessories(id, token);
    }, []);
    const showTotal = () => {
        const cart = props.cartAccessories;
        return cart.reduce((a, b) => {
            return a + (b.price * b.quantity)
        }, 0)
    }

    const classCartActive = (i) => {
        if (i === cartActive) {
            return "cart__option-control--active"
        }
    }

    const classCartIconActive = (i) => {
        if (i === cartActive) {
            return "cart__option-icon--active"
        }
    }

    const classCartTitleActive = (i) => {
        if (i === cartActive) {
            return "cart__option-item--active"
        }
    }

    const hanldeChangeCartActive = (i) => {
        setCartActive(i);
    }

    const showBill = () => {
        if (cartActive === 2) {
            return (
                <>
                    <div className="cart__bill-subtotal">
                        <p className="cart__bill-title">Subtotal </p>
                        <p className="cart__bill-title cart__bill-title--price">$ {showTotal()}.<span className="cart__bill-sub">00</span></p>
                    </div>
                    <div className="cart__bill-subtotal">
                        <p className="cart__bill-title">discount code</p>
                        <input className="cart__bill-input" placeholder="discount code"></input>
                    </div>
                    <div className="cart__bill-subtotal">
                        <p className="cart__bill-title">Total </p>
                        <p className="cart__bill-title cart__bill-title--price">$ {showTotal()}.<span className="cart__bill-sub">00</span></p>
                    </div>
                </>

            )
        } else {
            return (
                <>
                    <div>
                        <p className="cart__bill-name">
                            Your name
                        </p>
                        <input className="cart__bill-input" placeholder="Name"></input>
                    </div>
                    <div>
                        <p className="cart__bill-name">
                            your email
                        </p>
                        <input className="cart__bill-input" placeholder="Email"></input>
                    </div>
                    <div>
                        <p className="cart__bill-name">
                            your phone number
                        </p>
                        <input className="cart__bill-input" placeholder="Phone"></input>
                    </div>
                    <div>
                        <p className="cart__bill-name">
                            your address
                        </p>
                        <input className="cart__bill-input" placeholder="adress"></input>
                    </div>
                    <p className="cart__bill-contact">
                        We will contact you within the next 24 hours.
                    </p>
                    <p className="btn cart__bill-btn">send information</p>
                </>
            )
        }
    }


    return (
        <div className="cart">
            <p className="title-second cart__title">Shopping Cart</p>
            <div className="container cart__container">
                <div className="row">
                    <div className="cart__option">
                        <div
                            className={`home__model-control cart__option-control ${classCartActive(1)}`}
                            onClick={() => hanldeChangeCartActive(1)}
                        >
                            <i
                                class={`fa fa-chevron-right home__model-icon cart__option-icon ${classCartIconActive(1)}`}
                                aria-hidden="true"
                            ></i>
                        </div>
                        <p onClick={() => hanldeChangeCartActive(1)} className={`cart__option-item ${classCartTitleActive(1)}`} >Cart Model Car</p>
                        <div
                            className={`home__model-control cart__option-control ${classCartActive(2)}`}
                            onClick={() => hanldeChangeCartActive(2)}
                        >
                            <i
                                class={`fa fa-chevron-right home__model-icon cart__option-icon ${classCartIconActive(2)}`}
                                aria-hidden="true"
                            ></i>
                        </div>
                        <p onClick={() => hanldeChangeCartActive(2)} className={`cart__option-item ${classCartTitleActive(2)}`}> Cart Accessories</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-9 cart__select">
                        {
                            cartActive === 1 ? <CartModel cartActive={cartActive} cartModelItem={props.cartModel}></CartModel> : <Accessories cartActive={cartActive} cartAccessories={props.cartAccessories}></Accessories>
                        }
                    </div>
                    <div className="col-xl-3 ">
                        <div className="cart__bill">
                            {showBill()}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        cartModel: state.cart,
        cartAccessories: state.cartAccessories
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        acGetCartItem: (id, token) => {
            dispatch(getCartItemRq(id, token))
        },
        getCartAccessories: (id, token) => {
            dispatch(getCartAccessoriesRq(id, token))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);