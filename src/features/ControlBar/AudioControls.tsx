import React from 'react';
import {
  PlayButton, PauseButton, SkipBack, SkipForward,
} from 'svg';
import styled from 'styled-components';
import Container from 'components/ControlBarContainer';

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  height: 20%;
  justify-content: center;
  align-items: center;
  :hover {
    transform: scale(1.06);
  }
`;

const SkipContainer = styled.div`
  width: 100%;
  display: flex;
  height: 20%;
  justify-content: center;
  align-items: center;
  :hover {
    svg > path {
        fill: #fff;
  }
  }
`;

const Previous = styled(SkipBack)`
  width: 1em;
  margin-right: .5em;
`;

const Next = styled(SkipForward)`
  width: 1em;
  margin-left: .1em;

`;

const ControlsContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  min-width: 2em;
  max-width: 8em;
`;

interface AudioControlsProps {
  isPlaying: boolean;
  onPlayPauseClick: Function;
  onPrevClick: Function;
  onNextClick: Function;
}

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}: AudioControlsProps) => (
  <ControlsContainer>
    <SkipContainer>
      <Previous onClick={() => onPrevClick()} />
    </SkipContainer>
    <ButtonContainer onClick={() => onPlayPauseClick(!isPlaying)}>
      {isPlaying ? <PauseButton /> : <PlayButton />}
    </ButtonContainer>
    <SkipContainer>
      <Next onClick={() => onNextClick()} />
    </SkipContainer>
  </ControlsContainer>
);

export default AudioControls;
