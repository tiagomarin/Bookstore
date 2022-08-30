import React, { Dispatch } from 'react';
import './BooksPage.css';
import bookList from '../fakeBooksData';
import Book from '../components/Book';
import AddBook from '../components/AddBook';
import { removeBook } from '../Redux/book/books';

const removeClickHandler = (bookID) => {
  Dispatch(removeBook(bookID));
};
const BooksPage = () => (
  <>
    <ul className="books-list">
      {bookList.map((book) => (
        <Book
          key={book.id}
          author={book.author}
          title={book.title}
          category={book.category}
          removeClickHandler={removeClickHandler(book.id)}
        />
      ))}
    </ul>
    <span className="br" />
    <AddBook />
  </>
);
export default BooksPage;
