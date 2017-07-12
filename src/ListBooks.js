import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

function ListBooks(props) {
    return (
        <ol className="books-grid">
            {props.books.map((book) => (
                <li key={book.id} >
                    <Book book={book} onUpdateShelf={props.onUpdateShelf} />
                </li>
            ))}

        </ol>
    )
}

ListBooks.PropTypes = {
    books: PropTypes.array.isRequired
}

export default ListBooks