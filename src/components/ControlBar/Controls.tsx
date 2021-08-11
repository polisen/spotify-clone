import { Container } from "./components";
import styled from "styled-components";
import { ReactComponent as PlayButton } from "../../svg/PlayButton.svg";
import { ReactComponent as PauseButton } from "../../svg/PauseButton.svg";
import { ReactComponent as SkipBack } from "../../svg/SkipBack.svg";
import { ReactComponent as SkipForward } from "../../svg/SkipForward.svg";
import { useState } from "react";

const PlayPause = ({ playing }: any) => {
  return <div>{!playing ? <PlayButton /> : <PauseButton />}</div>;
};

const Scrubber = () => {
  return <></>;
};

const ControlDiv = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const ControlButtons = () => {
  const [playing, setPlaying] = useState(false);
  return (
    <ControlDiv onClick={() => setPlaying(!playing)}>
      <SkipBack />
      <PlayPause playing={playing} />
      <SkipForward />
    </ControlDiv>
  );
};
const Controls = () => {
  return (
    <Container>
      <ControlButtons />
      <Scrubber />
    </Container>
  );
};

export default Controls;
