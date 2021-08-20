import React, { useState, useEffect, useRef } from "react";
import { Container } from "components/ControlBarContainer";
import AudioControls from "./AudioControls";
import styled from "styled-components";
import { useAudioPlayer } from "./ControlsLayout.hooks";
const ControlsContainer = styled(Container)`
  flex-direction: "column";
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const Controls = ({ tracks }: any) => {
  let {
    isPlaying,
    volume,
    setVolume,
    playNext,
    playPrevious,
    togglePlaying,
    progress,
  } = useAudioPlayer();

  const trackStyling = `
      -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${progress}, #fff), color-stop(${progress}, #777))
    `;
  return (
    <ControlsContainer>
      <Flex>
        <AudioControls
          isPlaying={isPlaying}
          onPrevClick={playPrevious}
          onNextClick={playNext}
          onPlayPauseClick={togglePlaying}
        />
        <input
          type="range"
          value={trackProgress}
          // step="1"
          // min="0"
          // max={duration ? duration : `${duration}`}
          // className="progress"
          // onChange={(e) => onScrub(e.target.value)}
          // onMouseUp={onScrubEnd}
          // onKeyUp={onScrubEnd}
          style={{ background: trackStyling, width: "80%" }}
        />
      </Flex>
    </ControlsContainer>
  );
};

export default Controls;
