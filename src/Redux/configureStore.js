import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './book/book';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    book: bookReducer,
    categories: categoriesReducer,
  },
});

export default store;
