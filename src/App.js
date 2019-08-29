import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {setBooks} from "./actions/booksAct";
import MenuComponent from "./Components/Menu";
import {Container} from "semantic-ui-react";
import BookCard from "./Components/BookCard";
import { Card } from 'semantic-ui-react'


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
            <Container>
                <MenuComponent/>
                <Card.Group itemsPerRow={4}>
                    {!isReady
                        ? 'Download...'
                        : books.map(book => (
                            <BookCard {...book}/>
                        ))}
                </Card.Group>
            </Container>
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
