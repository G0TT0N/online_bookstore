import {combineReducers} from "redux";
import books from './bookRdc';
import cart from './cartRdc';

export default combineReducers ({
    books,
    cart
})