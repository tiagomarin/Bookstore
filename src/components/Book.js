import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './Book.css';
import { removeBook } from '../Redux/book/book';

const Book = (props) => {
  const {
    id, author, title, category,
  } = props;
  const dispatch = useDispatch();

  const removeClickHandler = () => {
    dispatch(removeBook(id));
  };

  return (
    <li className="book">
      <div className="book-content">
        <p>{category}</p>
        <h3>{title}</h3>
        <h4>{author}</h4>
        <div className="actions">
          <p>Comments</p>
          <button type="button" onClick={removeClickHandler}>Remove</button>
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
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  // removeClickHandler: PropTypes.func.isRequired,
};
export default Book;
