
import React from 'react';
import { createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './reducers'


// Reducers
// import { cartReducer } from "./reducers/cartReducers";
// import {
//   getProductsReducer,
//   getProductDetailsReducer,
// } from "./reducers/productReducers";
// import {auth} from '../pages/signIn/redux/reducers/authReducer';
// import {token } from '../pages/signIn/redux/reducers/tokenReducer';

// const reducer = combineReducers({
//   cart: cartReducer,
//   getProducts: getProductsReducer,
//   getProductDetails: getProductDetailsReducer,

// });

//const middleware = [thunk];
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
  getProducts:{products:[]},
};

const store = createStore(
  rootReducer,
  INITIAL_STATE,
  composedEnhancer
);

export default store;
