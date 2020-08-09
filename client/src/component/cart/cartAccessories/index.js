import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCartAccessoriesRq, putCartAccessoriesItemRq, deleteCartAccessoriesItemRq } from '../../../redux/action';

Index.propTypes = {

};

function Index(props) {
    const id = localStorage.getItem("ID");
    const token = localStorage.getItem("token");
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        // props.getCartAccessories(id, token)
    }, []);
    const showCartItem = () => {
        const data = props.cartAccessories;

        return data.map((item, key) => {
            if (window.screen.width <= 1024) {
                return (
                    <div className="cart__accessories-item" key={key}>
                        <img className="cart-model__img cart__accessories-img" src={item.product_image}></img>
                        <div >
                            <p className="cart__accessories-name">{item.product_name}</p>
                            <div className="cart__accessories-quantity">
                                <p className="cart__accessories-quantityTitle">quantity : </p>
                                <div className="cart__accessories-quantityControl">
                                    <i class="fa fa-sort-asc" aria-hidden="true" onClick={() => plusQuantity(item)}></i>
                                    <p className="cart__accessories-quantityNumber">{item.quantity}</p>
                                    <i class="fa fa-caret-down" aria-hidden="true" onClick={() => minusQuantity(item)}></i>
                                </div>
                            </div>
                            <div class="cart__accessories-quantity">
                                <p className="cart__accessories-quantityTitle">Total : </p>
                                <p className="cart__accessories-totalNumber">{item.quantity * item.price} $</p>
                            </div>
                            <i class="fa fa-times cart__accessories-delete" aria-hidden="true" onClick={() => deleteCartItem(item.id, item)}></i>
                        </div>
                    </div>
                )
            }
            return (
                <div className="row cart__accessories-item" key={key}>
                    <div className="col-xl-3 cart__item cart__accessories-container">
                        <img className="cart-model__img cart__accessories-img" src={item.product_image}></img>
                    </div>
                    <div className="col-xl-3 cart__item">
                        <p className="cart__accessories-name">{item.product_name}</p>
                    </div>
                    <div className="col-xl-2 cart__item cart__accessories-controlPrice">
                        <p className="cart__accessories-price">{item.price} $</p>
                    </div>
                    <div className="col-xl-2 cart__item ">
                        <div className="cart__accessories-quantity">
                            <p className="cart__accessories-quantityNumber">{item.quantity}</p>
                            <div className="cart__accessories-control">
                                <i class="fa fa-sort-asc" aria-hidden="true" onClick={() => plusQuantity(item)}></i>
                                <i class="fa fa-caret-down" aria-hidden="true" onClick={() => minusQuantity(item)}></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 cart__item cart__accessories-total">
                        <p className="cart__accessories-totalNumber">{item.quantity * item.price} $</p>
                    </div>
                    <i class="fa fa-times cart__accessories-delete" aria-hidden="true" onClick={() => deleteCartItem(item.id, item)}></i>
                </div>
            )
        })
    }

    const plusQuantity = (item) => {
        if (item.quantity < 3) {
            props.putQuantity(item.id, token, { ...item, quantity: item.quantity + 1 });
            props.getCartAccessories(id, token);
        }
    }

    const minusQuantity = (item) => {
        if (item.quantity > 1) {
            props.putQuantity(item.id, token, { ...item, quantity: item.quantity - 1 });
            props.getCartAccessories(id, token);
        }

    }

    const deleteCartItem = (id, item) => {
        const token = localStorage.getItem("token");
        props.deleteCartItemAcc(id, token, item);
    }

    return (
        <div className="cart__accessories">
            {/* <div className="row cart__accessories-content">
                <div className="col-xl-3">
                </div>
                <div className="col-xl-3">
                    <p>Name</p>
                </div>
                <div className="col-xl-2">
                    <p>Price</p>
                </div>
                <div className="col-xl-2">
                    <p>quantity</p>
                </div>
                <div className="col-xl-2">
                    <p>total</p>
                </div>
            </div> */}
            {showCartItem()}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.cartAccessories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        getCartAccessories: (id, token) => {
            dispatch(getCartAccessoriesRq(id, token))
        },
        putQuantity: (id, token, data) => {
            dispatch(putCartAccessoriesItemRq(id, token, data))
        },
        deleteCartItemAcc: (id, token) => {
            dispatch(deleteCartAccessoriesItemRq(id, token))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);