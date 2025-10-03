import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './slices/themeSlice'
import authSlice from './slices/authSlice'
import postSlice from './slices/postSlice'

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    auth: authSlice,
    posts: postSlice,
  },
})

export default store