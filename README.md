1.	Introduction 
This is the project for the final assessment project for Udacity's React Fundamentals course, developed by [React Training](https://reacttraining.com). 
In the MyReads project, I create a bookshelf app that allows user to select and categorize books user has read, are currently reading, or want to read.

2.	Prerequisites
Download and install nodejs(https://nodejs.org/) into machine to start server
After installing, check npm version by commands line:
	- npm -v
	
3.	Installation
In order to run project, you can use npm to install with command lines
	- npm install
	- npm start
This will start a development server for you.

4.	Code Structure
There are four components created in this project.
	a.	Book.js: This component exposes how the book display in browser. It include thumbnail, title, author and a control allowing users to move book between shelves.  
	b.	ListBooks.js: This component is a collection of books. 
	c.	ListShelfs.js: All books are grouped by categories. There are 3 categories in the project: "Currently Reading", "Want to Read" and "Read".
	d. 	SeachBooks.js: This component has a search input field. As the user types into the search field, books that match the query are displayed on the page.
	
5.	API Reference

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results. 
