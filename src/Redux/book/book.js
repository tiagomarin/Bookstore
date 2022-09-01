import booksURL from '../apiURL';

// ACTIONS
const GET_BOOKLIST = 'GET_BOOKLIST';
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// ACTION CREATORS ------------------------------------------
// Get book list
export const getBooklist = () => async (dispatch) => {
  const response = await fetch(booksURL);
  const data = await response.json();
  const bookList = [];
  Object.keys(data).forEach((ID) => {
    bookList.push({ ...data[ID][0], item_id: ID });
  });
  if (response.ok) {
    dispatch({
      type: GET_BOOKLIST,
      payload: bookList,
    });
  }
};
// Add book
export const addBook = (payload) => async (dispatch) => {
  const response = await fetch(booksURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: payload.item_id,
      title: payload.title,
      author: payload.author,
      category: payload.category,
    }),
  });
  if (response.ok) {
    dispatch({ type: ADD_BOOK, payload });
  }
};
// Remove book
export const removeBook = (payload) => async (dispatch) => {
  const response = await fetch(`${booksURL}/${payload}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: payload,
    }),
  });
  if (response.ok) {
    dispatch({ type: REMOVE_BOOK, payload });
  }
};

// REDUCER ---------------------------------------------------
const initialState = [];
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((element) => element.item_id !== action.payload);
    case GET_BOOKLIST:
      return action.payload;
    default:
      return state;
  }
};
export default bookReducer;
