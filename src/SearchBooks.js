import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks'
//import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateStatus: PropTypes.func.isRequired
    }

    state = {
        query: '',
        searchingBooks: []        
    }

    updateQuery = (e) => {        
        let searchText = e.target.value
        let books = []
        if (searchText === undefined ||searchText === '') {
            this.setState({query: searchText, searchingBooks: []})
        } else {
            BooksAPI.search(searchText, 20).then((results) => {
                if (results.length >= 1) {
                    results.sort(sortBy('title'))
                    books = results
                    this.setState({query: searchText, searchingBooks: books})
                } else {
                    this.setState({query: searchText, searchingBooks: []})    
                }
            })
        }
    }
    
    render() {
        const { onUpdateStatus } = this.props

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        className="close-search"
                        to='/'
                    >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                            //value={this.state.query}
                            onChange={this.updateQuery}
                            placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    <ListBooks books={this.state.searchingBooks} onUpdateShelf={onUpdateStatus} search={true} />
                </div>
            </div>


        )
    }
}

export default SearchBooks