import { createSlice } from "@reduxjs/toolkit";

export const switchPage = createSlice({
  name: 'switchPage',
  initialState: {
    value: true
  },
  reducers: {
    toggleMain: state => {
      state.value = !state.value
    }
  }
});

export const { toggleMain } = switchPage.actions;

export default switchPage.reducer;