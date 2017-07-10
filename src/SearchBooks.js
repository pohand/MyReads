import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class SearchBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateStatus: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
    }
    
    render() {
        const { onUpdateStatus } = this.props
        let showingBooks

        if (this.state.query) {
            const match = new RegExp(escapeRegExp(this.state.query), 'i')
            showingBooks = this.props.books.filter((book) => match.test(book.title))
        }
        else {
            showingBooks = []
        }

        showingBooks.sort(sortBy('title'))

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link 
                        className="close-search" 
                        to='/'
                    >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                        onChange={event => this.updateQuery(event.target.value)} 
                        placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    <ListBooks books={showingBooks} onUpdateShelf={onUpdateStatus}/>
                </div>
            </div>

            
        )
    }
}

export default SearchBooks