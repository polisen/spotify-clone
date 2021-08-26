import playlists from './playlists';

export interface FileStructureState {
  files: {
    [key: string]: object;
  };
}

export interface CurrentlyPlaying {
  album?: string;
  artist?: string;
  coverArt?: string;
  trackName?: string;
  duration?: string;
  mediaLink?: string;
  index: number;
}

interface PlaylistInfo {
  name: string;
  slug: string;
}

export interface AudioState {
  isPlaying: boolean;
  looping: false;
  currentlyPlaying: CurrentlyPlaying;
  currentPlaylistPlaying: string;
  currentIndex: number;
  elapsed: {
    timeLeft: string;
    timeElapsed: string;
  };
  currentPlaylist: string;
  availablePlaylists: PlaylistInfo[];
  playlists: any;
  volume: number;
}

export const initialState: AudioState = {
  isPlaying: false,
  looping: false,
  currentlyPlaying: {
    index: 0, coverArt: '', artist: '', trackName: '',
  },
  currentPlaylistPlaying: '',
  currentIndex: 0,
  elapsed: {
    timeLeft: '',
    timeElapsed: '',
  },
  currentPlaylist: 'playlist1',
  availablePlaylists: Object.entries(playlists).map(([key, value]: any) => ({
    name: value.name,
    slug: key,
  })),
  playlists,
  volume: 1,
};
