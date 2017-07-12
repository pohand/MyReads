import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Shelf from './Shelf'

function ListShelfs(props) {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Shelf books={props.books.filter((c) => c.shelf === 'currentlyReading')} title={"Currently Reading"} onUpdateShelf={props.onUpdateShelf} />
                    <Shelf books={props.books.filter((c) => c.shelf === 'wantToRead')} title={"Want to Read"} onUpdateShelf={props.onUpdateShelf} />
                    <Shelf books={props.books.filter((c) => c.shelf === 'read')} title={"Read"} onUpdateShelf={props.onUpdateShelf} />
                </div>
            </div>
            <div className="open-search">
                <Link
                    to='/search'
                >Add a book</Link>
            </div>
        </div>
    )
}

ListShelfs.PropTypes = {
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
}
export default ListShelfs