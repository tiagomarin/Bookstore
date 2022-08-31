// Actions
const GET_STATUS = 'GET_STATUS';

// Action Creators
export const getStatus = (payload) => ({ type: GET_STATUS, payload });

// Reducer
const initialState = '';

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STATUS:
      return 'under construction';
    default:
      return state;
  }
};
export default categoriesReducer;
