import React from 'react';
import AddBookForm from '../components/AddBookForm';
import './BooksPage.css';
import BooksList from '../components/BookList';

const BooksPage = () => (
  <>
    <BooksList />
    <span className="br" />
    <AddBookForm />
  </>
);
export default BooksPage;
