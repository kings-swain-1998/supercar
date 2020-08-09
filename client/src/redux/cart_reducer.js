import * as Types from './constant';
var initialState = [];

const cart = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_CART_SUCCSES:
            return state = action.cart
        default: return state;
    }
}

export default cart;