import * as Types from './constant';
var initialState = {};

const model = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_MODEL_ITEM:
            state = action.model;
            return state;
        default:
            return state;
    }
}

export default model;