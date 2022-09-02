import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './Book.css';
import CircularProgress from '@mui/material/CircularProgress';
import { removeBook } from '../Redux/book/book';

const Book = (props) => {
  const {
    id, author, title, category,
  } = props;
  const dispatch = useDispatch();
  const removeClickHandler = () => {
    dispatch(removeBook(id));
  };
  const clickHandlerNotReady = () => ('');

  // progress circle helper funcion
  const [chapterName, setChapterName] = useState('intro');
  const [chapterNumber, setChapterNumber] = useState(0);
  const [porcentage, setPorcentage] = useState(0);
  const updateProgress = (e) => {
    e.preventDefault();
    if (porcentage < 100) {
      setPorcentage(porcentage + 5);
    }
  };

  return (
    <li className="book">
      <div className="book-content">
        <p>{category}</p>
        <h3>{title}</h3>
        <h4>{author}</h4>
        <div className="actions">
          <button type="button" onClick={clickHandlerNotReady}>Comments</button>
          <button type="button" className="remove-btn" onClick={removeClickHandler}>Remove</button>
          <button type="button" onClick={clickHandlerNotReady}>Edit</button>
        </div>
      </div>
      <div className="book-progress-section">
        <div className="progress-status">
          <div className="progress-grey-circle">
            <CircularProgress variant="determinate" value={porcentage} />
            <div className="progress-circle-middle" />
          </div>
          <div className="progress-percent">
            {`${porcentage}%`}
            <br />
            <span>Completed</span>
          </div>
        </div>
        <form className="update-progress" onSubmit={updateProgress}>
          <input value={chapterName} maxLength="40" required onInput={(e) => setChapterName(e.target.value)} />
          <input value={chapterNumber} maxLength="40" required onInput={(e) => setChapterNumber(e.target.value)} />
          <button id={id} type="submit" className="update-progress">UPDATE PROGRESS</button>
        </form>
      </div>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Book;
