import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FooterState {
  showContact: boolean;
}

const initialState: FooterState = {
  showContact: false,
};

const footerSlice = createSlice({
  name: 'footer',
  initialState,
  reducers: {
    toggleContact: (state) => {
      state.showContact = !state.showContact;
    },
  },
});

export const { toggleContact } = footerSlice.actions;
export default footerSlice.reducer;
