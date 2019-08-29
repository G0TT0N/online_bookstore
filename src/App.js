import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
    render() {
        const  {books} = this.props.books;
        return (
            <div className="container">
                {books[0].title}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps,)(App);
