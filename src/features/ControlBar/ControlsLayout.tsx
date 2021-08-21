import React, { useState, useEffect, useRef } from "react";
import { Container } from "components/ControlBarContainer";
import AudioControls from "./AudioControls";
import styled from "styled-components";
import { useAudioPlayer } from "./ControlsLayout.hooks";
import Progress from "./Progress";
const ControlsContainer = styled(Container)`
  flex-direction: "column";
  height: 100%;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const InputContainer = styled(Flex)`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const StyledInput: any = styled.input`
  height: 5px;
  appearance: none;
  display: flex;
  width: 80%;
  /* margin-bottom: 10px; */
  border-radius: 12px;
  transition: background 0.2s ease;
  cursor: pointer;
  background: ${({ percentage }: any) =>
    `-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${percentage}, #fff), color-stop(${percentage}, #777))`};
  ::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 0px;
    border-radius: 100%; /* Set a specific slider handle width */
    height: 0px; /* Slider handle height */
    background: #fff; /* Green background */
    cursor: pointer; /* Cursor on hover */
  }
  :hover {
    background: ${({ percentage }: any) =>
      `-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${percentage}, #1cb955), color-stop(${percentage}, #777))`};
    ::-webkit-slider-thumb {
      width: 12px; /* Set a specific slider handle width */
      height: 12px; /* Slider handle height */
    }
  }
`;

const Controls = ({ tracks }: any) => {
  let {
    isPlaying,
    volume,
    currentPercentage,
    trackProgress,
    setVolume,
    onScrubEnd,
    duration,
    onScrub,
    playNext,
    playPrevious,
    togglePlaying,
  } = useAudioPlayer();

  return (
    <ControlsContainer>
      <Flex>
        <InputContainer>
          <AudioControls
            isPlaying={isPlaying}
            onPrevClick={playPrevious}
            onNextClick={playNext}
            onPlayPauseClick={togglePlaying}
          />
        </InputContainer>
        <InputContainer>
          <Progress.Elapsed />
          <StyledInput
            type="range"
            value={trackProgress}
            step="1"
            min="0"
            max={duration ? duration : `${duration}`}
            onChange={(e: any) => onScrub(e.target.value)}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
            percentage={currentPercentage}
          />
          <Progress.Left />
        </InputContainer>
      </Flex>
    </ControlsContainer>
  );
};

export default Controls;
