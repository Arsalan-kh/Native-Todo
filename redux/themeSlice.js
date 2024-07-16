import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { color: '#ffc800' }, // Initial theme color
  reducers: {
    setThemeColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { setThemeColor } = themeSlice.actions;
export const selectThemeColor = (state) => state.theme.color;

export default themeSlice.reducer;
