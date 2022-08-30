import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {},
  reducers: {
    getStatus: (state, payload = 'underconstruction') => {
      state.push(payload);
    },
    removeBook: (state, id) => {
      state.filter((element) => element.id !== id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBook, removeBook } = categoriesSlice.actions;

export default categoriesSlice.reducer;
