import React from 'react';
import {connect} from 'react-redux';
import Menu from "../Components/Menu";
import * as cartActions from "../actions/cartAct";
import {bindActionCreators} from "redux";
import uniqBy from 'lodash/uniqBy';

const mapStateToProps = ({cart}) => ({
    totalPrice: cart.items.reduce((total, book) => total + book.price, 0),
    count: cart.items.length,
    items: uniqBy(cart.items, o => o.id)
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Menu);
