import React from 'react';
import './CategoriesPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { getStatus } from '../Redux/categories/categories';

const CategoriesPage = () => {
  const message = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const statusClickHandler = () => {
    dispatch(getStatus('under construction'));
  };

  return (
    <div className="categories">
      <button type="button" onClick={statusClickHandler}>Check status</button>
      <span className="message">{message}</span>
    </div>
  );
};

export default CategoriesPage;
