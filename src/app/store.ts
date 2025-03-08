import { configureStore } from '@reduxjs/toolkit'
import type { Action } from '@reduxjs/toolkit'

interface CounterState {
  value: number
}

// An example slice reducer function that shows how a Redux reducer works inside.
// We'll replace this soon with real app logic.
function counterReducer(state: CounterState = { value: 0 }, action: Action) {
  switch (action.type) {
    // Handle actions here
    default: {
      return state
    }
  }
}

export const store = configureStore({
  // Pass in the root reducer setup as the `reducer` argument
  reducer: {
    // Declare that `state.counter` will be updated by the `counterReducer` function
    counter: counterReducer
  }
})

// Infer type AppStore from the store itself
export type AppStore = typeof store
// Infer the RootState from the store itself
export type RootState = ReturnType<typeof store.getState>
// Infer the AppDispatch from the store itself
export type AppDispatch = typeof store.dispatch