import React from 'react';
import {connect} from 'react-redux';
import * as booksActions from "../actions/booksAct";
import App from '../Components/App'
import {bindActionCreators} from "redux";

const mapStateToProps = ({books}) => ({
    books: books.items,
    isReady: books.isReady
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(booksActions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
