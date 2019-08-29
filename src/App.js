import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {setBooks} from "./actions/booksAct";

class App extends Component {
    componentWillMount() {
        const {setBooks} = this.props;
        axios.get('/books.json').then(response => {
            setBooks(response.data);
        })
    }

    render() {
        const {books, isReady} = this.props;
        return (
            <ul>
                {!isReady
                    ? 'Download...'
                    : books.map(book => (
                        <li><b>{book.title}</b> - {book.author}</li>
                    ))}
            </ul>
        );
    }
}

const mapStateToProps = ({books}) => ({
    books: books.items,
    isReady: books.isReady
});

const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
