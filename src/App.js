import React from 'react'
import { Route } from 'react-router-dom'
import ListShelfs from './ListShelfs'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    }
    )
  }

  updateShelf = (book, shelf) => {
    this.setState(state => ({
        books: state.books.filter((c) => c.id !== book.id)
      }))

    BooksAPI.update(book, shelf)

    book.shelf = shelf

    this.setState(state => ({
        books: state.books.concat([ book ])
      }))
  }

  render() {

    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListShelfs books={this.state.books} onUpdateShelf={this.updateShelf} />
        )} />
        <Route path='/search' render={() =>
          <SearchBooks books={this.state.books} onUpdateStatus={this.updateShelf}/>
        }
        />
      </div>
    )
  }
}

export default BooksApp
