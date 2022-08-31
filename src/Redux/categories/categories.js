// Actions
export const GET_STATUS = 'bookstore/categories/GET_STATUS';

// Action Creators
export const getStatus = (payload = 'under construction') => ({ type: GET_STATUS, payload });

// Reducer
const initialState = [];

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STATUS:
      return [...state, action.payload];
    default:
      return state;
  }
};
export default categoriesReducer;
