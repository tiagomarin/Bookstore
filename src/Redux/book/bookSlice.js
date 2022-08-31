import { createSlice } from '@reduxjs/toolkit';

export const booksSlice = createSlice({
  name: 'book',
  initialState: {},
  reducers: {
    addBook: (state, payload) => {
      state.push(payload);
    },
    removeBook: (state, id) => {
      state.filter((element) => element.id !== id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
