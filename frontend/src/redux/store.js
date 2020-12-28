import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import  { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import { cartReducer } from './reducers/cartReducers';
import { getProductsReducer, getProductDetailsReducer } from './reducers/productReducers';

const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
});

const middleware = [thunk];

const cartFromLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

const INIT_STATE = {
    cart: {
        cartItems: cartFromLocalStorage,
    }
}

const store = createStore(
    reducer,
    INIT_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;