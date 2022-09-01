import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import bookReducer from './book/book';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    book: bookReducer,
    categories: categoriesReducer,
  },
}, applyMiddleware(thunk));

export default store;
