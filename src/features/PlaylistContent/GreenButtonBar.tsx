import React from 'react';
import styled from 'styled-components';
import { GreenPlay, GreenPause } from 'svg';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { greenButtonToggle } from 'slices/audioContextSlice';

const ControlsLayout = styled.div`
  width: 100%;
  height: 5em;
  display: flex;
  align-items: center;
`;

const GreenButton = styled.div`
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`;

const Button = () => {
  const dispatch = useAppDispatch();
  const { isPlaying, currentPlaylistPlaying, currentPlaylist } = useAppSelector(
    (state) => state.audio,
  );
  return (
    <GreenButton role="button" onClick={() => dispatch(greenButtonToggle(currentPlaylist))}>
      {() => {
        if (currentPlaylistPlaying === currentPlaylist) {
          if (isPlaying) {
            return <GreenPause role="button" />;
          }
            <GreenPlay role="button" />;
        }
        return <GreenPlay role="button" />;
      }}
    </GreenButton>
  );
};

const GreenButtonBar = () => (
  <ControlsLayout>
    <Button />
  </ControlsLayout>
);

export default GreenButtonBar;
