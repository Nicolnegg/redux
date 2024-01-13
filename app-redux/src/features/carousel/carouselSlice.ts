import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CarouselState {
  currentSlide: number;
}

const initialState: CarouselState = {
  currentSlide: 0,
};

export const carouselSlice = createSlice({
  name: 'carousel',
  initialState,
  reducers: {
    setCurrentSlide: (state, action: PayloadAction<number>) => {
      state.currentSlide = action.payload;
    },
  },
});

export const { setCurrentSlide } = carouselSlice.actions;

export default carouselSlice.reducer;
