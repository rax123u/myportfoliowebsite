import { createSlice } from '@reduxjs/toolkit'
 
const initialState = {
  activeModal: null,
  isMenuOpen: false,
  isSoundEnabled: localStorage.getItem('sound') !== 'false',
  showScrollProgress: true,
  projectFilter: 'all',
}
 
const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setActiveModal: (state, action) => {
      state.activeModal = action.payload
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen
    },
    closeMenu: (state) => {
      state.isMenuOpen = false
    },
    toggleSound: (state) => {
      state.isSoundEnabled = !state.isSoundEnabled
      localStorage.setItem('sound', state.isSoundEnabled)
    },
    setProjectFilter: (state, action) => {
      state.projectFilter = action.payload
    },
  },
})
 
export const { 
  setActiveModal, 
  toggleMenu, 
  closeMenu, 
  toggleSound,
  setProjectFilter 
} = uiSlice.actions
export default uiSlice.reducer