import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { playlist1, playlist2 } from "./playlists";
export interface FileStructureState {
  files: {
    [key: string]: object;
  };
}

const initialState: any = {
  isPlaying: false,
  looping: false,
  currentlyPlaying: {},
  currentIndex: 0,
  currentPlaylist: "",
  playlists: {
    playlist1,
    playlist2,
  },
};

export const audioContext = createSlice({
  name: "audioContext",
  initialState,
  reducers: {
    togglePlayState: (state, action: PayloadAction<boolean | undefined>) => {
      state.isPlaying =
        action.payload !== undefined ? action.payload : !state.isPlaying;
    },
    setCurrentTrack: (state, action: PayloadAction<string | number>) => {
      const proposeTrackIndex = (index: number) => {
        if (state.playlists[state.currentPlaylist][index]) {
          state.currentlyPlaying =
            state.playlists[state.currentPlaylist][index];
            state.currentIndex = index;
        } else if (index < 0) {
          state.currentlyPlaying = initialState.currentlyPlaying;
          state.currentIndex = undefined;
        } else if (index > state.playlists[state.currentPlaylist].length) {
          if (state.looping) {
            state.currentlyPlaying = state.playlists[state.currentPlaylist][0];
            state.currentIndex = 0;
          } else {
            state.currentlyPlaying = initialState.currentlyPlaying;
            state.currentIndex = undefined;
          }
        }
      };

      if (typeof action.payload === "number") {
        proposeTrackIndex(action.payload);
      } else if (action.payload === "increment") {
        proposeTrackIndex(state.currentIndex + 1);
      } else if (action.payload === "decrement") {
        proposeTrackIndex(state.currentIndex - 1);
      }
    },
  },
});

export const { togglePlayState, setCurrentTrack } = audioContext.actions;

export default audioContext.reducer;
