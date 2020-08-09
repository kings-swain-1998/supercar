import * as Types from './constant';

const initalState = [];

const cartAccessoriesReducer = (state = initalState, action) => {
    switch (action.type) {
        case Types.ADD_ITEM_ACCESSORIES_SUCCES:
            return [
                ...state,
                state.push(action.data)
            ]
        case Types.GET_CART_ACCESS_SUCCSES:
            return state = action.data;
        case Types.DELETE_CART_ACCESS_SUCCSES:
            const index = findIndex(state, action.id);
            if (index !== -1) {
                state.splice(index, 1)
            };
            console.log(index)
            return [...state];

        default: return state;
    }
};

const findIndex = (state, id) => {
    for (let i = 0; i <= state.length; i++) {
        if (state[i].id === id) {
            return i;
        }
    }
}

export default cartAccessoriesReducer;