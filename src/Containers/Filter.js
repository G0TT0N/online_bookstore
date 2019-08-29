import React from 'react';
import {connect} from 'react-redux';
import FilterContainer from "../Components/Filter";
import * as filterActions from "../actions/filterAct";
import {bindActionCreators} from "redux";

const mapStateToProps = ({books}) => ({
    filterBy: books.filterBy,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(filterActions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
