import { createSelector } from '@reduxjs/toolkit'
 
export const selectTheme = (state) => state.theme
export const selectThemeMode = (state) => state.theme.mode
export const selectAccentColor = (state) => state.theme.accentColor
 
export const selectUI = (state) => state.ui
export const selectActiveModal = (state) => state.ui.activeModal
export const selectIsMenuOpen = (state) => state.ui.isMenuOpen
export const selectProjectFilter = (state) => state.ui.projectFilter
 
export const selectPage = (state) => state.page
export const selectCurrentPage = (state) => state.page.current
 
export const selectSound = (state) => state.sound
export const selectIsSoundEnabled = (state) => state.sound.enabled
 
// Memoized selectors
export const selectIsLightTheme = createSelector(
  [selectThemeMode],
  (mode) => mode === 'light'
)
 
export const selectThemeVars = createSelector(
  [selectThemeMode, selectAccentColor],
  (mode, accent) => ({
    isDark: mode === 'dark',
    accent,
  })
)