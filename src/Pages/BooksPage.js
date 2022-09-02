import React from 'react';
import AddBookForm from '../components/AddBookForm';
import './BooksPage.css';
import BooksList from '../components/BookList';

const BooksPage = () => (
  <div className="books-page">
    <BooksList />
    <span className="br" />
    <AddBookForm />
  </div>
);
export default BooksPage;
