import { createSlice } from '@reduxjs/toolkit';

interface cookiesState {
  showCookies: boolean;
}

const initialState: cookiesState = {
  showCookies: true,
};

const cookiesSlice = createSlice({
  name: 'cookies',
  initialState,
  reducers: {
    hideCookies: (state) => {
      state.showCookies = false;
    },
    toggleCookies: (state) => {
      state.showCookies = !state.showCookies;
    },
  },
});

export const { hideCookies, toggleCookies } = cookiesSlice.actions;

export default cookiesSlice.reducer;