import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    }

    state = {
        book: this.props.book,
        value: this.props.shelf,
        options: [
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
            }
        ]
    }

    render() {
        const { onUpdateShelf } = this.props

        const createItem = (item, key) =>
            <option
                key={key}
                value={item.value}
            >
                {item.name}
            </option>

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.state.book.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select
                            onChange={event => onUpdateShelf(this.state.book, event.target.value)}
                            value={this.state.book.shelf}
                        >
                            <option value='none' disabled>Move to...</option>
                            {this.state.options.map(createItem)}
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.state.book.title}</div>
                <div className="book-authors">
                    {this.state.book.authors.map((author) => (
                        author
                    ))}
                </div>
            </div>
        )
    }
}

export default Book