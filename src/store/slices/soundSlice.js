import { createSlice } from '@reduxjs/toolkit'
 
const initialState = {
  enabled: localStorage.getItem('sound') !== 'false',
  volume: parseFloat(localStorage.getItem('volume')) || 0.5,
}
 
const soundSlice = createSlice({
  name: 'sound',
  initialState,
  reducers: {
    toggleSound: (state) => {
      state.enabled = !state.enabled
      localStorage.setItem('sound', state.enabled)
    },
    setVolume: (state, action) => {
      state.volume = Math.max(0, Math.min(1, action.payload))
      localStorage.setItem('volume', state.volume)
    },
  },
})
 
export const { toggleSound, setVolume } = soundSlice.actions
export default soundSlice.reducer
 