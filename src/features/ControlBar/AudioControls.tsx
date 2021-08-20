import React from "react";
import { PlayButton, PauseButton, SkipBack, SkipForward } from "svg";
import styled from "styled-components";
import { Container } from "components/ControlBarContainer";

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  height: 60%;
  justify-content: center;
  /* background-color: blue; */
`;



const ControlsContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    width: 15%;
    /* margin: 0 auto 15px; */
`

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}: any) => (
  <ControlsContainer >
    <SkipBack onClick={() => onPrevClick} />
    <ButtonContainer onClick={() => onPlayPauseClick(!isPlaying)}>
      {isPlaying ? <PauseButton /> : <PlayButton />}
    </ButtonContainer>
    <SkipForward />
  </ControlsContainer>
);

export default AudioControls;
