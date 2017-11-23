import React from 'react'
import PropTypes from 'prop-types'

function Book(props) {
    const options = [
        {
            name: 'Currently Reading',
            value: 'currentlyReading',
        },
        {
            name: 'Want to Read',
            value: 'wantToRead',
        },
        {
            name: 'Read',
            value: 'read',
        },
        {
            name: 'None',
            value: 'none',
        }
    ]

    const createItem = (item, key) =>
        <option
            key={key}
            value={item.value}
        >
            {item.name}
        </option>

    const createAuthors = (author, key) =>
        <div className="book-authors" key={key}>
            {author}
        </div>

    let showingAuthors

    if (props.book.authors) {
        showingAuthors = props.book.authors
    }
    else {
        showingAuthors = []
    }

    let showingThumnail

    if (props.book.imageLinks) {
        showingThumnail = props.book.imageLinks.thumbnail
    }
    else {
        showingThumnail = ''
    }

    function checkShelf () {
        return props.search === true ? 'none' : props.book.shelf;
    }

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${showingThumnail})` }}></div>
                <div className="book-shelf-changer">
                    <select
                        onChange={event => props.onUpdateShelf(props.book, event.target.value)}
                        value={checkShelf()}
                    >
                        <option value='none' disabled>Move to...</option>

                        {options.map(createItem)}
                    </select>
                </div>
            </div>
            <div className="book-title">{props.book.title}</div>
            {showingAuthors.map(createAuthors)}
        </div>
    )
}

Book.PropTypes = {
    book: PropTypes.object.isRequired,
    onUpdateShelf: PropTypes.func.isRequired,
    search: PropTypes.bool.isRequired
}

export default Book