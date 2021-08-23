import { useState } from "react";
import styled from "styled-components";
import { GreenPlay, GreenPause } from "svg";
import { useSelector } from "react-redux";
import { greenButtonToggle } from "slices/audioContextSlice";
import { useDispatch } from "react-redux";

const ControlsLayout = styled.div`
  width: 100%;
  height: 5em;
  display: flex;
  align-items: center;
`;

const GreenButton = styled.div`
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`;

const Button = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const { isPlaying, currentPlaylistPlaying, currentPlaylist } = useSelector(
    (state: any) => state.audio
  );
  return (
    <GreenButton
      role="button"
      onClick={() => dispatch(greenButtonToggle(currentPlaylist))}
    >
      {currentPlaylistPlaying === currentPlaylist ? (
        isPlaying ? (
          <GreenPause role="pausebutton" />
        ) : (
          <GreenPlay role="playbutton"/>
        )
      ) : (
        <GreenPlay role="playbutton" />
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
