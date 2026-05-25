import { createSlice } from '@reduxjs/toolkit'
 
const initialState = {
  current: 'home',
  isLoading: false,
  error: null,
}
 
const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.current = action.payload
    },
    setPageLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setPageError: (state, action) => {
      state.error = action.payload
    },
  },
})
 
export const { setCurrentPage, setPageLoading, setPageError } = pageSlice.actions
export default pageSlice.reducer