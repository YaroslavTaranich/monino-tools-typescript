import { configureStore } from '@reduxjs/toolkit'
import type { ThunkAction, Action } from '@reduxjs/toolkit'

import toolsReducer from './slices/toolsSlice'
import categoryReducer from './slices/categorySlice'

export const store = configureStore({
  reducer: {
    tools: toolsReducer,
    category: categoryReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
