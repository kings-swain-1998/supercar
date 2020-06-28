import * as Type from './constant';
var initialState = [];

const accessories = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_ACCESSORIES_PRODUCTS:
            state = action.products;
            return state;
        default:
            return [...state];
    }
}

export default accessories;