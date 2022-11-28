/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '../store'

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    inputValue: '',
  },
  reducers: {
    setSearchInput: (state, action) => {
      state.inputValue = action.payload
    },
  },
})

export default searchSlice.reducer

export const { setSearchInput } = searchSlice.actions

export const selectSearchInput = (state: RootState) => state.search.inputValue
