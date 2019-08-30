import React from 'react';
import {connect} from 'react-redux';
import BookCard from "../Components/BookCard";
import * as cartActions from "../actions/cartAct";
import {bindActionCreators} from "redux";

const mapStateToProps = ({cart}, {id}) => ({
    addedCount: cart.items.reduce((count, book) =>
        count + (book.id === id ? 1 : 0), 0)

});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(BookCard);