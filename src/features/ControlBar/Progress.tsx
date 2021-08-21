import { useSelector } from "react-redux";
import Text from 'components/Text'
import {Container} from 'components/ControlBarContainer'
import styled from 'styled-components'


const ProgressContainer = styled(Container)`
display: flex;
align-items: center;
justify-content: center;
`

const Elapsed = () => {
  let timeElapsed = useSelector(
    (state: any) => state.audio.elapsed.timeElapsed
  );
  return (<ProgressContainer><Text.Dimmed>{timeElapsed}</Text.Dimmed></ProgressContainer>);
};

const Left = () => {
  let timeLeft = useSelector(
    (state: any) => state.audio.elapsed.timeLeft
  );
  return (<ProgressContainer><Text.Dimmed>{timeLeft}</Text.Dimmed></ProgressContainer>);
};

export default {
  Elapsed,
  Left,
};
