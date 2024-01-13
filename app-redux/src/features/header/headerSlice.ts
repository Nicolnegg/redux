import { createSlice } from '@reduxjs/toolkit';

interface HeaderState {
  title: string;
  // Otros campos del estado según sea necesario
}

const initialState: HeaderState = {
  title: 'Mi Página',
  // Inicializa otros campos del estado si es necesario
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    // Otras acciones según sea necesario
  },
});

export const { setTitle } = headerSlice.actions;
export default headerSlice.reducer;
