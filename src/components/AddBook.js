import React from 'react';
import './AddBook.css';

const AddBook = () => (
  <div className="add-book-section">
    <h3 className="add-book-section-title">Add a new book</h3>
    <form className="add-book-form">
      <input placeholder="Book Title" />
      <input placeholder="Author" />
      <button type="button">category</button>
      <button type="button">Add book</button>
    </form>
  </div>
);

export default AddBook;
