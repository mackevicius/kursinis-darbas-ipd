//here you combine all of the reducers u use

import { combineReducers } from "redux";
import shoppingCartReducer from "./shoppingCartReducer";

const reducers = combineReducers({
  prekes: shoppingCartReducer,
});

export default reducers;
