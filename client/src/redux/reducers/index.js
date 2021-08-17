import { combineReducers } from 'redux'
import auth from './authReducer'
import token from './tokenReducer'
import { cartReducer } from './cartReducers'
import { getProductsReducer } from './productReducers'
import { getProductDetailsReducer } from './productReducers'
//import users from './usersReducer'

export default combineReducers({
    auth,
    token,
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    //users
})