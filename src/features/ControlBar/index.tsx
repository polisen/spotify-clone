import styled from 'styled-components';
import CurrentlyPlaying from './CurrentlyPlaying';
import Controls from './Controls'
import Volume from './Volume'
const ControlBarLayout = styled.div`
  background-color: #181818;
  position: fixed;
  height: 5em;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ControlBar = () => {
  return <ControlBarLayout>
      <CurrentlyPlaying/>
      <Controls/>
      <Volume/>
  </ControlBarLayout>;
};

export default ControlBar;
