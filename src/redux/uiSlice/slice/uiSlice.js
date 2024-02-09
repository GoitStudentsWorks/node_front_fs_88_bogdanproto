import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getAllWallpapers } from '../operations';
import {
  handleFulfilledGetAllWallpapers,
  handlePendingUiData,
  handleRejectedUiData,
} from '../handleStatus';

const initialState = {
  wallpapers: [],
  isOpenSidebar: false,
  error: null,
  isLoading: null,
};

const uiSlice = createSlice({
  name: 'uiData',
  initialState,
  reducers: {
    toggleSidebar(state, action) {
      state.isOpenSidebar = !state.isOpenSidebar;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllWallpapers.fulfilled, handleFulfilledGetAllWallpapers)
      .addMatcher(isAnyOf(getAllWallpapers.pending), handlePendingUiData)
      .addMatcher(isAnyOf(getAllWallpapers.rejected), handleRejectedUiData);
  },
});

export const uiReducer = uiSlice.reducer;
export const { toggleSidebar } = uiSlice.actions;
