import React, {Component} from 'react';
import axios from 'axios';
import MenuComponent from "./Menu";
import {Container} from "semantic-ui-react";
import BookCard from "./BookCard";
import { Card } from 'semantic-ui-react'
import Filter from "../Containers/Filter";


class App extends Component {
    componentDidMount() {
        const {setBooks} = this.props;
        axios.get('/books.json').then(response => {
            setBooks(response.data);
        })
    }

    render() {
        const {books, isReady, setFilter} = this.props;
        return (
            <Container>
                <MenuComponent/>
                <Filter/>
                <Card.Group itemsPerRow={4}>
                    {!isReady
                        ? 'Download...'
                        : books.map(book => (
                            <BookCard {...book} key={book.id}/>
                        ))}
                </Card.Group>
            </Container>
        );
    }
}

export default App;
