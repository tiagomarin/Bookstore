import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

const Book = (props) => {
  const { author, title, category } = props;
  return (
    <li className="book">
      <div className="book-content">
        <p>{category}</p>
        <h3>{title}</h3>
        <h4>{author}</h4>
        <div className="actions">
          <p>Comments</p>
          <button type="button">Remove</button>
          <p>Edit</p>
        </div>
      </div>
      <div className="progress-status">Progress</div>
      <div className="update-progress">
        <span>CURRENT CHAPTER</span>
        <span>Chapter 17</span>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Book;
