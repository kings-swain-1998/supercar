import React from 'react';
import PropTypes from 'prop-types';

CartModel.propTypes = {

};

function CartModel(props) {
    const data = props.cartModelItem;
    const cartActive = props.cartActive;

    console.log(data);

    const showCartItem = () => {
        return data.map((item, key) => {
            return (
                <div className="row cart-model__main" key={key}>
                    {/* <div className="col-xl-12 cart-model__content"> */}
                    <div className="col-lg-6">
                        <img className="cart-model__img" src={item.product_imgBG}></img>
                    </div>
                    <div className="col-lg-6">
                        <p className="cart-model__name" >{item.product_name}</p>
                        <div className="col-xl-3 cart-model__option">
                            <p className="cart-model__option-title">Price : </p>
                            <p className="cart-model__option-title">{item.price}</p>
                        </div>
                        <div className="col-xl-3 cart-model__option">
                            <p className="cart-model__option-title">Exterior color : </p>
                            <p className="cart-model__option-title">{item.product_color}</p>
                        </div>
                    </div>
                </div>
                // </div>
            )
        })
    }

    return (
        <div className={`cart-model`}>
            {showCartItem()}
            <div className="row">
                <p>
                    "Due to the large value of the product, we have prepared a form for you to submit your information for us to contact. We will contact you as soon as possible to discuss your prices as well as your options and requirements. Or you can go to our nearest showroom around the world to exchange directly and receive our best deals. "</p>
            </div>
        </div>
    );
}

export default CartModel;