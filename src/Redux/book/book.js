import bookList from '../../fakeBooksData';
// Actions
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// Action Creators

export const addBook = (payload) => ({ type: ADD_BOOK, payload });
export const removeBook = (payload) => ({ type: REMOVE_BOOK, payload });

// Reducer
const initialState = bookList;

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((element) => element.id !== action.payload);
    default:
      return state;
  }
};
export default bookReducer;
