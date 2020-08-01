import {combineReducers} from "redux";
import {productReducer} from "./productReducer";
import {userReducer} from "./userReducer";

export const allReducers = combineReducers({
    product: productReducer,
    user: userReducer
});