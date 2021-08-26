import styled from 'styled-components';
import React from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { setCurrentTrack } from 'slices/audioContextSlice';
import { nanoid } from '@reduxjs/toolkit';
import Track from './Track';

const PlaylistBox = styled.div`
  /* overflow: scroll; */
  height: calc(100% - 3em);
  width: 100%;
`;

const Playlist = () => {
  const dispatch = useAppDispatch();
  const {
    currentPlaylist, currentPlaylistPlaying, currentlyPlaying, isPlaying,
  } = useAppSelector(
    (state) => state.audio,
  );
  const tracks = useAppSelector(
    (state) => state.audio.playlists[currentPlaylist].tracks,
  );

  function handleTrackChange(index: number) {
    dispatch(setCurrentTrack(index));
  }

  return (
    <PlaylistBox>
      {tracks.map((e: object, index: number) => (
        <Track
          key={nanoid()}
          index={index + 1}
          isSelected={currentlyPlaying.index === index
            && currentPlaylist === currentPlaylistPlaying}
          info={e}
          handleClick={handleTrackChange}
          isPlaying={isPlaying}
        />
      ))}
    </PlaylistBox>
  );
};

export default Playlist;
