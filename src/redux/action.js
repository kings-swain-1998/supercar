import * as Types from './constant';
import Axios from 'axios';

// get model car 

export const getModelRq = (name) => {
    return dispatch => {
        Axios.get(`http://localhost:3000/model?name=${name}`)
            .then(res => {
                dispatch(getModel(res.data))
            })
    }
}

export const getModel = (item) => {
    return {
        type: Types.GET_MODEL_ITEM,
        model: item
    }
}

// accessories 


export const getAccessoriesRq = (name) => {
    return dispatch => {
        Axios.get(`http://localhost:3000/accessories?name=${name}`)
            .then(res => {
                const data = res.data;
                dispatch(getAccessories(data[0].products))
            })
    }
}

export const getAccessories = (products) => {
    return {
        type: Types.GET_ACCESSORIES_PRODUCTS,
        products: products
    }
}

