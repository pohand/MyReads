import React from 'react'
import PropTypes from 'prop-types'
import ListBooks from './ListBooks'

function Shelf(props) {

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ListBooks books={props.books} onUpdateShelf={props.onUpdateShelf} />
            </div>
        </div>
    )
}

Shelf.PropTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
}

export default Shelf
