import React from 'react';
import './BooksPage.css';
import bookList from '../fakeBooksData';
import Book from '../components/Book';
import AddBook from '../components/AddBook';

const removeClickHandler = () => {

};
const BooksPage = () => (
  <>
    <ul className="books-list">
      {bookList.map((book) => (
        <Book
          key={book.book_id}
          author={book.author}
          title={book.title}
          category={book.category}
          removeClickHandler={removeClickHandler}
        />
      ))}
    </ul>
    <span className="br" />
    <AddBook />
  </>
);
export default BooksPage;
