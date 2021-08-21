import styled from "styled-components";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Controls from "./ControlsLayout";
import Volume from "./Volume";

const ControlBarLayout = styled.div`
  background-color: #181818;
  position: fixed;
  height: 6em;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid #3b3b3b;
`;

const ControlBar = () => {
  return (
    <ControlBarLayout>
      <CurrentlyPlaying />
      <Controls />
      <Volume />
    </ControlBarLayout>
  );
};

export default ControlBar;
