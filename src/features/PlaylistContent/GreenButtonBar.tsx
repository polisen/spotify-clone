import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as PlayButton } from "../../svg/play.svg";
import { ReactComponent as PauseButton } from "../../svg/pause.svg";

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
        <PlayButton role="playbutton" />
      ) : (
        <PauseButton role="pausebutton" />
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
