import { configureStore } from '@reduxjs/toolkit'
import type { Action } from '@reduxjs/toolkit'
import postsReducer from '@/features/posts/postsSlice'

export const store = configureStore({
  // Pass in the root reducer setup as the `reducer` argument
  reducer: {
    // Declare that `state.counter` will be updated by the `counterReducer` function
    posts: postsReducer
  }
})

// Infer type AppStore from the store itself
export type AppStore = typeof store
// Infer the RootState from the store itself
export type RootState = ReturnType<typeof store.getState>
// Infer the AppDispatch from the store itself
export type AppDispatch = typeof store.dispatch