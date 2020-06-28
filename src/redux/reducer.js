import { combineReducers } from "redux";
import model from "./model_reducer";
import accessories from "./accessories_reducer";


const reducer = combineReducers({
    model: model,
    accessories: accessories
});

export default reducer;