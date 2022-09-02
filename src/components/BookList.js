import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooklist } from '../Redux/book/book';
import Book from './Book';
import './BookList.css';

const BooksList = () => {
  const bookList = useSelector((state) => state.book);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooklist());
  }, []);

  return (
    <ul className="books-list">
      {bookList.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          author={book.author}
          title={book.title}
          category={book.category}
        />
      ))}
    </ul>
  );
};
export default BooksList;
