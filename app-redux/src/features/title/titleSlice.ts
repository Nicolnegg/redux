import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TitleState {
  description: string;
}

const initialState: TitleState = {
  description: 'Conecta con mentes curiosas, desde novatos hasta expertos, y colabora en proyectos innovadores. Aquí, tu pasión por la investigación se traduce en impacto real y oportunidades de monetización. ',
};

export const titleSlice = createSlice({
  name: 'title',
  initialState,
  reducers: {
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
  },
});

export const { setDescription } = titleSlice.actions;

export default titleSlice.reducer;
