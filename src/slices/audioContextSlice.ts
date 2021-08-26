/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import audioSlice from './audioReducers';
import { initialState } from './audioSlice.types';

export const audioContext = createSlice({
  name: 'audioContext',
  initialState,
  reducers: audioSlice,
});

export const {
  togglePlayState,
  setCurrentTrack,
  setCurrentPlaylist,
  updateTrackProgress,
  updateVolume,
  greenButtonToggle,
} = audioContext.actions;

export default audioContext.reducer;
