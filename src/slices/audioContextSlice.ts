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
  currentPlaylist: "playlist1",
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
          state.isPlaying = true;
        } else if (index < 0) {
          state.currentlyPlaying = initialState.currentlyPlaying;
        } else if (index > state.playlists[state.currentPlaylist].length - 1) {
          if (state.looping) {
            state.currentlyPlaying = state.playlists[state.currentPlaylist][0];
            state.isPlaying = true;
          } else {
            state.currentlyPlaying = initialState.currentlyPlaying;
          }
        }
      };

      if (typeof action.payload === "number") {
        proposeTrackIndex(action.payload);
      } else if (action.payload === "increment") {
        proposeTrackIndex(state.currentlyPlaying.index + 1);
      } else if (action.payload === "decrement") {
        proposeTrackIndex(state.currentlyPlaying.index - 1);
      }
    },
    setCurrentPlaylist: (state, action: PayloadAction<string>) => {
      state.currentPlaylist = action.payload;
    },
  },
});

export const { togglePlayState, setCurrentTrack, setCurrentPlaylist } =
  audioContext.actions;

export default audioContext.reducer;
