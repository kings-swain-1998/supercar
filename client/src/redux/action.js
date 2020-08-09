import * as Types from './constant';
import Axios from 'axios';
// get model car 

export const getModelRq = (name) => {
    return dispatch => {
        Axios.get(`http://localhost:3000/model?name=${name}`
        )
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
    return async dispatch => {
        try {
            const res = await Axios.get(` http://localhost:3000/accessories?type=${name}`);
            dispatch(getAccessories(res.data))
        } catch (err) {
            console.log("AXIOS ERROR: ", err);
        }
    }
}

export const getAccessories = (products) => {
    return {
        type: Types.GET_ACCESSORIES_PRODUCTS,
        products: products
    }
}

// login


export const loginRq = (data) => {
    return async dispatch => {
        try {
            const res = await Axios.post("http://localhost:8080/auth/login", data);
            const { token, userID } = res.data;
            dispatch(login(res.data));
            localStorage.setItem("token", token);
            localStorage.setItem("ID", userID);
        } catch (err) {
            console.log("AXIOS ERROR: ", err);
        }
    }

}

export const login = (user) => {
    return {
        type: Types.LOGIN_SUCCES,
        user
    }
}



export const getUserLocal = () => {
    return async dispatch => {
        try {
            const id = localStorage.getItem("ID");
            const token = localStorage.getItem("token");
            const res = await Axios.get(`http://localhost:8080/userLocal/?userLocal=${id}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                });
            const data = res.data;
            dispatch(login(data[0]));
        } catch (err) {
            console.log("AXIOS ERROR: ", err);
        }
    }
}


// logout 
export const LogoutRq = () => {
    return dispatch => {
        dispatch(Logout());
        dispatch(openFormLogin(false));
        localStorage.removeItem("ID");
        localStorage.removeItem("token");
    }
}
export const Logout = () => {
    return {
        type: Types.LOGOUT_SUCCES
    }
}









export const openFormLoginRq = () => {
    return dispatch => {
        dispatch(openFormLogin(true))
    };
}
export const hideFormLoginRq = () => {
    return dispatch => {
        dispatch(openFormLogin(false))
    };
}

export const openFormLogin = (open) => {
    return {
        type: Types.OPEN_FORM_LOGIN,
        openForm: open
    }
}


// add to cart 


export const addToCartRq = (data) => {
    return dispatch => {
        Axios.post(`http://localhost:8080/carts`,
            data,
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`,
                }
            })
            .then(res => {
            })
            .catch((err) => {

                console.log("AXIOS ERROR: ", err);
            })
    }
}

// export const getAccessories = (products) => {
//     return {
//         type: Types.GET_ACCESSORIES_PRODUCTS,
//         products: products
//     }
// }


// get to cart

export const getCartItemRq = (id, token) => {
    return dispatch => {
        Axios.get(`http://localhost:8080/carts?buyer_id=${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(res => {
                return dispatch(getCartItem(res.data))

            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export const getCartItem = (cart) => {
    return {
        type: Types.GET_CART_SUCCSES,
        cart
    }
}

// add to cart accessories

export const addToCartAccessoriesRq = (data, token) => {
    return dispatch => {
        Axios.post(`http://localhost:8080/cartsAccessories`,
            data,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            })
            .then(res => {
                dispatch(addToCartAccessories(res.data))
            })
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            })
    }
}

export const addToCartAccessories = (data) => {
    return {
        type: Types.ADD_ITEM_ACCESSORIES_SUCCES,
        data
    }
}

// get cart accessories

export const getCartAccessoriesRq = (id, token) => {
    return async dispatch => {
        try {
            const res = await Axios.get(`http://localhost:8080/cartsAccessories?buyer_id=${id}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                });
            dispatch(getCartAccessories(res.data));
        } catch (err) {
            console.log("AXIOS ERROR: ", err);
        }
    }
}

export const getCartAccessories = (data) => {
    return {
        type: Types.GET_CART_ACCESS_SUCCSES,
        data
    }
}

// put cart accessories 

export const putCartAccessoriesItemRq = (id, token, data) => {
    return dispatch => {
        Axios.put(`http://localhost:8080/cartsAccessories/${id}`,
            data,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            })
            .then(res => {
                console.log(res.data);
                // dispatch(getCartAccessories(res.data));
            })
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            })
    }
}

export const putCartAccessoriesItem = (data) => {
    return {
        type: Types.GET_CART_ACCESS_SUCCSES,
        data
    }
}


// delete cart accessories


export const deleteCartAccessoriesItemRq = (id, token) => {
    return dispatch => {
        Axios.delete(`http://localhost:8080/cartsAccessories/${id}`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            })
            .then(res => {
                dispatch(deleteCartAccessoriesItem(id))
            })
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            })
    }
}

export const deleteCartAccessoriesItem = (id) => {
    return {
        type: Types.DELETE_CART_ACCESS_SUCCSES,
        id
    }
}






