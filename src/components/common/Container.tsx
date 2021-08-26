import styled from 'styled-components';
import React from 'react';

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = (props: any) => <StyledContainer {...props} />;

Container.Flex = styled(StyledContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

Container.ControlBar = styled(Container)`
  display: flex;
  align-items: center;
  width: 33%;
`;

export default Container;
