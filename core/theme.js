// src/core/theme.js
import { selectThemeColor } from '../redux/themeSlice';

export const getTheme = (state) => ({
  text: '#1e212b',
  primary: selectThemeColor(state),
  secondary: '#1F2732',
  error: '#ED1C24',
  // Add the backgroundColor property
  backgroundColor: state.theme.color || '#171980', // Default value
});
