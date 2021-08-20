import React from "react";
import { PlayButton, PauseButton, SkipBack, SkipForward } from "svg";
import styled from "styled-components";
import { Container } from "components/ControlBarContainer";

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  height: 20%;
  justify-content: center;
  align-items: center;
`;

const Previous = styled(SkipBack)`
  width: 1em;
`

const Next = styled(SkipForward)`
  width: 1em;
`

const ControlsContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: space-between;
    min-width: 2em;
    max-width: 6em;
`

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}: any) => (
  <ControlsContainer >
    <Previous onClick={() => onPrevClick} />
    <ButtonContainer onClick={() => onPlayPauseClick(!isPlaying)}>
      {isPlaying ? <PauseButton /> : <PlayButton />}
    </ButtonContainer>
    <Next />
  </ControlsContainer>
);

export default AudioControls;
