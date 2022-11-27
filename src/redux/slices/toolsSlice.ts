/* eslint-disable no-param-reassign */
import { createAsyncThunk, createEntityAdapter, createSelector, createSlice, EntityState } from '@reduxjs/toolkit'

import { Tool } from '../../models/tools'
import { getTools } from '../../services/TESTAPI'
import type { RootState } from '../store'

const toolAdapter = createEntityAdapter<Tool>({ selectId: (tool) => tool.id })

interface ToolsState extends EntityState<Tool> {
  fetchStatus: 'pending' | 'fulfilled' | 'rejected'
  error: any | null
}

const initialState: ToolsState = toolAdapter.getInitialState({
  fetchStatus: 'pending',
  error: null,
})

export const getAllTools = createAsyncThunk('tools/getAll', async (_, { rejectWithValue }) =>
  getTools()
    .then((tools) =>
      tools.map((tool) => {
        tool.specification = tool.toolSpecification.split(';').map((elem) => {
          const splitedElement = elem.split(':')
          return { name: splitedElement[0].trim(), value: splitedElement[1].trim() }
        })
        return tool
      })
    )
    .catch((e) => rejectWithValue(e))
)

export const toolsSlice = createSlice({
  name: 'tools',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTools.pending, (state) => {
      state.fetchStatus = 'pending'
    })
    builder.addCase(getAllTools.rejected, (state, action) => {
      state.fetchStatus = 'rejected'
      state.error = action.payload
    })
    builder.addCase(getAllTools.fulfilled, (state, action) => {
      state.fetchStatus = 'fulfilled'
      state.error = null
      toolAdapter.addMany(state, action.payload)
    })
  },
})

export default toolsSlice.reducer

const selectTools = (state: RootState) => state.tools

export const selectToolsStatus = createSelector(selectTools, (tools) => {
  const { fetchStatus, error } = tools
  return {
    fetchStatus,
    error,
  }
})

export const selectAllTools = toolAdapter.getSelectors<RootState>((state) => state.tools)

export const selectToolsByCategoryId = (categoryId: number) =>
  createSelector(selectTools, ({ ids, entities }) =>
    ids.filter((id) => entities[id]?.categoryId === categoryId).map((id) => entities[id])
  )

export const selectPopularTools = createSelector(selectTools, ({ ids, entities }) =>
  ids.filter((id) => entities[id]?.popular === 1).map((id) => entities[id])
)
