import { combineReducers } from "redux";
import model from "./model_reducer";
import accessories from "./accessories_reducer";
import userLogin from "./user_reducer";
import cart from "./cart_reducer";
import cartAccessoriesReducer from "./cart_accessories_reducer";


const reducer = combineReducers({
    model: model,
    accessories: accessories,
    user: userLogin,
    cart: cart,
    cartAccessories: cartAccessoriesReducer
});

export default reducer;