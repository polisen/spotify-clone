import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import playlists from "./playlists";

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
  elapsed: {
    timeLeft: '',
    timeElapsed: '',
  },
  currentPlaylist: "playlist1",
  availablePlaylists: Object.entries(playlists).map(([key, value]: any)=>  ({
      name: value.name,
      slug: key
  })),
  playlists,
  volume: 1
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
        if (state.playlists[state.currentPlaylist].tracks[index]) {
          state.currentlyPlaying =
            state.playlists[state.currentPlaylist].tracks[index];
          state.isPlaying = true;
        } else if (index < 0) {
          state.currentlyPlaying = initialState.currentlyPlaying;
        } else if (index > state.playlists[state.currentPlaylist].tracks.length - 1) {
          if (state.looping) {
            state.currentlyPlaying = state.playlists[state.currentPlaylist].tracks[0];
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
    updateTrackProgress: (state, action: PayloadAction<any>) => {
        let {trackProgress, duration} = action.payload;
        state.elapsed = {
            timeElapsed: getTimeString(Math.floor(trackProgress)),
            timeLeft: getTimeString(Math.floor(duration - trackProgress))
        }
    },
    updateVolume: (state, action: PayloadAction<number>) => {
        state.volume = action.payload;
    }
  },
});


function getTimeString(seconds: number){
    var minutes = Math.floor(seconds / 60);
    var seconds = Math.floor(seconds - minutes * 60);
    return `${minutes}:${String(seconds).length === 1 ? `0${seconds}` : seconds}`
}

export const { togglePlayState, setCurrentTrack, setCurrentPlaylist, updateTrackProgress, updateVolume } =
  audioContext.actions;

export default audioContext.reducer;
