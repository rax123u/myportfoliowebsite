import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './slices/themeSlice'
import uiReducer from './slices/uiSlice'
import pageReducer from './slices/pageSlice'
import soundReducer from './slices/soundSlice'
 
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    ui: uiReducer,
    page: pageReducer,
    sound: soundReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['ui/setActiveModal'],
        // Ignore these paths in the state
        ignoredActionPaths: ['payload.ref'],
        ignoredPaths: ['ui.modalRef'],
      },
    }),
})
 
export default store