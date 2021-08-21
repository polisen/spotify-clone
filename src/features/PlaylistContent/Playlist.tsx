import Track from './Track'
import styled from "styled-components";
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {setCurrentTrack} from 'slices/audioContextSlice'

const PlaylistBox = styled.div`
    /* overflow: scroll; */
    height: calc(100% - 3em);
    width: 100%;
`

export const Playlist = () => {
  const dispatch = useDispatch()
  const currentPlaylist = useSelector((state: any) => state.audio.currentPlaylist)
  const currentlyPlaying = useSelector((state: any) => state.audio.currentlyPlaying)
  const tracks = useSelector((state: any) => state.audio.playlists[currentPlaylist])
  console.log(tracks)

  function handleTrackChange(index: number) {
    dispatch(setCurrentTrack(index))
  }

  return (
    <PlaylistBox>
      {tracks.map((e: object, index: number) => (
        <Track key={index} index={index + 1} isSelected={currentlyPlaying.index === index} info={e} handleClick={handleTrackChange}/>
      ))}
    </PlaylistBox>
  );
};
