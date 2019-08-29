import {combineReducers} from "redux";
import books from './bookRdc';
import cart from './cartRdc';
import filter from './filterRdc';

export default combineReducers ({
    books,
    cart,
    filter
})