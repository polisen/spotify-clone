import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as PlayButton } from "../../svg/play.svg";
import { ReactComponent as PauseButton } from "../../svg/pause.svg";

const ControlsLayout = styled.div`
  width: 100%;
  height: 6em;
  display: flex;
  align-items: center;
`;

const Button = () => {
  const [state, setState] = useState(false);
  return (
    <div onClick={() => setState(!state)}>
      {state ? <PauseButton /> : <PlayButton />}
    </div>
  );
};

export const GreenButtonBar = () => {
  return (
    <ControlsLayout>
      <Button />
    </ControlsLayout>
  );
};
