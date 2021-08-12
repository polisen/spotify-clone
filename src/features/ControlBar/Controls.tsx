import { Container } from "./components";
import styled from "styled-components";
import { ReactComponent as Play } from "../../svg/PlayButton.svg";
import { ReactComponent as Pause } from "../../svg/PauseButton.svg";
import { ReactComponent as SkipBack } from "../../svg/SkipBack.svg";
import { ReactComponent as SkipForward } from "../../svg/SkipForward.svg";
import { useState } from "react";

const PlayPause = ({ playing }: any) => {
  return <div>{!playing ? <PlayButton /> : <PauseButton />}</div>;
};

const ControlsContainer = styled(Container)`
flex-direction: 'column';
`

const Scrubber = () => {
  return <div
  style={{ backgroundColor: 'white', width: '100%', height: '40%'}}
  ></div>;
};

const ButtonContainer = styled.div`
  width:100%;
  display: flex;
  height: 60%;
  justify-content: center;
  background-color: blue;
`;

const ButtonDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const SkipBackButton = styled(SkipBack)`

`

const PlayButton = styled(Play)`
  margin: 10px;
`

const PauseButton = styled(Pause)`
  margin: 10px;

`

const ControlButtons = () => {
  const [playing, setPlaying] = useState(false);
  return (
    <ButtonContainer onClick={() => setPlaying(!playing)}>
      <ButtonDiv>
      <SkipBackButton/>
      <PlayPause playing={playing} />
      <SkipForward />
      </ButtonDiv>
    </ButtonContainer>
  );
};

const Flex = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
align-items: center;

`
const Controls = () => {
  return (
    <ControlsContainer>
      <Flex>
      <ControlButtons />
      <Scrubber />
      </Flex>
    </ControlsContainer>
  );
};

export default Controls;
