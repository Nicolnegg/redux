import { createSlice } from '@reduxjs/toolkit';

const headerSlice = createSlice({
  name: 'header',
  initialState: {
    title: 'Mi Página',
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    // Puedes agregar más acciones según sea necesario
  },
});

export const { setTitle } = headerSlice.actions;
export default headerSlice.reducer;