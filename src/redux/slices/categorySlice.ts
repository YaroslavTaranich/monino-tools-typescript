/* eslint-disable no-param-reassign */
import { createAsyncThunk, createEntityAdapter, createSelector, createSlice, EntityState } from '@reduxjs/toolkit'

import { Category } from '../../models/category'
import { getCategory } from '../../services/API'
import type { RootState } from '../store'

const categoryAdapter = createEntityAdapter<Category>({ selectId: (category) => category.id })

interface CategoryState extends EntityState<Category> {
  fetchStatus: 'pending' | 'fulfilled' | 'rejected'
  error: any | null
}

const initialState: CategoryState = categoryAdapter.getInitialState({
  fetchStatus: 'pending',
  error: null,
})

export const getAllCategory = createAsyncThunk('category/getAll', async (_, { rejectWithValue }) =>
  getCategory()
    .then((category) => category)
    .catch((e) => rejectWithValue(e))
)

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCategory.pending, (state) => {
      state.fetchStatus = 'pending'
    })
    builder.addCase(getAllCategory.rejected, (state, action) => {
      state.fetchStatus = 'rejected'
      state.error = action.payload
    })
    builder.addCase(getAllCategory.fulfilled, (state, action) => {
      state.fetchStatus = 'fulfilled'
      state.error = null
      categoryAdapter.addMany(state, action.payload)
    })
  },
})

export default categorySlice.reducer

const selectCategory = (state: RootState) => state.category

export const selectCategoryStatus = createSelector(selectCategory, (category) => {
  const { fetchStatus, error } = category
  return {
    fetchStatus,
    error,
  }
})

export const selectAllCategory = categoryAdapter.getSelectors<RootState>((state) => state.category)
