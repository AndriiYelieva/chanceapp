import { createSlice } from '@reduxjs/toolkit';

interface HeaderState {
  isShowHeader: boolean;
}

const initialHeaderState: HeaderState = {
  isShowHeader: true,
};

const headerSlice = createSlice({
  name: 'header',
  initialState: initialHeaderState,
  reducers: {
    showSubHeader: (state) => {
      state.isShowHeader = true;
      sessionStorage.setItem('isShowHeader', 'true');
    },
    hideSubHeader: (state) => {
      state.isShowHeader = false;
      sessionStorage.setItem('isShowHeader', 'false');
    },
  },
});

export const { showSubHeader, hideSubHeader } = headerSlice.actions;

export default headerSlice.reducer;
