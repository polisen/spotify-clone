import { useAppSelector } from 'app/hooks';
import React from 'react';
import Text from 'components/Text';
import Container from 'components/ControlBarContainer';
import styled from 'styled-components';

const LeftContainer = styled(Container)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  margin-right: 1em;
`;

const RightContainer = styled(Container)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 1em;
`;

const Elapsed = () => {
  const timeElapsed = useAppSelector(
    (state) => state.audio.elapsed.timeElapsed,
  );
  return (
    <LeftContainer>
      <Text.Dimmed>{timeElapsed}</Text.Dimmed>
    </LeftContainer>
  );
};

const Left = () => {
  const timeLeft = useAppSelector((state) => state.audio.elapsed.timeLeft);
  return (
    <RightContainer>
      <Text.Dimmed>{timeLeft}</Text.Dimmed>
    </RightContainer>
  );
};

export default {
  Elapsed,
  Left,
};
