import { useState } from "react";
import styled from "styled-components";
import {GreenPlay, GreenPause} from "svg";


const ControlsLayout = styled.div`
  width: 100%;
  height: 5em;
  display: flex;
  align-items: center;
`;

const GreenButton = styled.div`
  cursor: pointer;
`

const Button = () => {
  const [state, setState] = useState(false);
  return (
    <GreenButton role="button" onClick={() => setState(!state)}>
      {state ? (
        <GreenPlay role="playbutton" />
      ) : (
        <GreenPause role="pausebutton" />
      )}
    </GreenButton>
  );
};

export const GreenButtonBar = () => {
  return (
    <ControlsLayout>
      <Button />
    </ControlsLayout>
  );
};
