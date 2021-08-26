/* eslint-disable no-param-reassign */
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { AudioState, initialState } from './audioSlice.types';

function getTimeString(secs: number) {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs - minutes * 60);
  return `${minutes}:${String(seconds).length === 1 ? `0${seconds}` : seconds}`;
}

const togglePlayState: CaseReducer<AudioState, PayloadAction<boolean | undefined>> = (
  state,
  action,
) => {
  state.isPlaying = action.payload !== undefined ? action.payload : !state.isPlaying;
};

const setCurrentTrack: CaseReducer<AudioState, PayloadAction<string | number>> = (
  state,
  action,
) => {
  const proposeTrackIndex = (index: number) => {
    if (state.playlists[state.currentPlaylist].tracks[index]) {
      state.currentlyPlaying = state.playlists[state.currentPlaylist].tracks[index];
      state.isPlaying = true;
    } else if (index < 0) {
      state.currentlyPlaying = initialState.currentlyPlaying;
    } else if (index > state.playlists[state.currentPlaylist].tracks.length - 1) {
      if (state.looping) {
        const [currentlyPlaying] = state.playlists[state.currentPlaylist].tracks;
        state.currentlyPlaying = currentlyPlaying;
        state.isPlaying = true;
      } else {
        state.currentlyPlaying = initialState.currentlyPlaying;
      }
    }
    state.currentPlaylistPlaying = state.currentPlaylist;
  };

  if (typeof action.payload === 'number') {
    proposeTrackIndex(action.payload);
  } else if (action.payload === 'increment') {
    proposeTrackIndex(state.currentlyPlaying.index + 1);
  } else if (action.payload === 'decrement') {
    proposeTrackIndex(state.currentlyPlaying.index - 1);
  }
};

const setCurrentPlaylist: CaseReducer<AudioState, PayloadAction<string>> = (
  state,
  action,
) => {
  state.currentPlaylist = action.payload;
};
const updateTrackProgress: CaseReducer<AudioState, PayloadAction<any>> = (state, action) => {
  const { trackProgress, duration } = action.payload;
  state.elapsed = {
    timeElapsed: trackProgress ? getTimeString(Math.floor(trackProgress)) : '0:00',
    timeLeft: trackProgress ? getTimeString(Math.floor(duration - trackProgress)) : '0:00',
  };
};
const updateVolume: CaseReducer<AudioState, PayloadAction<number>> = (
  state,
  action: PayloadAction<number>,
) => {
  state.volume = action.payload;
};
const greenButtonToggle: CaseReducer<AudioState, PayloadAction<string>> = (
  state,
  action,
) => {
  const [currentlyPlaying] = state.playlists[state.currentPlaylist].tracks;
  if (state.currentPlaylistPlaying.length === 0) {
    state.currentPlaylistPlaying = action.payload;
    state.currentlyPlaying = currentlyPlaying;
    state.isPlaying = !state.isPlaying;
  } else if (state.currentPlaylistPlaying !== action.payload) {
    state.currentPlaylistPlaying = action.payload;
    state.currentlyPlaying = currentlyPlaying;
    state.isPlaying = true;
  } else {
    state.isPlaying = !state.isPlaying;
  }
};

export default {
  togglePlayState,
  setCurrentTrack,
  setCurrentPlaylist,
  updateTrackProgress,
  updateVolume,
  greenButtonToggle,
};
