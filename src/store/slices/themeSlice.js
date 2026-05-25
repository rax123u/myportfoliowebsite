import { createSlice } from '@reduxjs/toolkit'
 
const initialState = {
  mode: localStorage.getItem('theme') || 'dark',
  accentColor: 'cyan',
}
 
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark'
      localStorage.setItem('theme', state.mode)
    },
    setTheme: (state, action) => {
      state.mode = action.payload
      localStorage.setItem('theme', action.payload)
    },
    setAccentColor: (state, action) => {
      state.accentColor = action.payload
    },
  },
})
 
export const { toggleTheme, setTheme, setAccentColor } = themeSlice.actions
export default themeSlice.reducer