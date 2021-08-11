import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as PlayButton } from "./play.svg";
import { ReactComponent as PauseButton } from "./pause.svg";
export interface PlaylistContentProps {}

const ContentWrapper = styled.div`
  background-color: yellow;
  max-width: 100%;
  height: 200%;
  margin: 0 25px 0 25px;
  flex: 1;
  min-height: 0; /*ADDED 2021*/
`;

const Button = () => {
  const [state, setState] = useState(false);
  return (
    <div onClick={() => setState(!state)}>
      {state ? <PauseButton /> : <PlayButton />}
    </div>
  );
};
const ControlsLayout = styled.div`
  width: 100%;
  background-color: blue;
  height: 6em;
  display: flex;
  align-items: center;
`;

const Controls = () => {
  return (
    <ControlsLayout>
      <Button />
    </ControlsLayout>
  );
};


const HeaderItem = ({text, width}: any) => {
  return (<div style={{width}}>{text}</div>)
}

const Header = () => {
  const items = {'#': '10%', title: "25%", album: "25%", dateAdded: "25%", time: "25%" };
  return (
    <div style={{display: 'flex', border: '1px grey', borderBottomStyle: 'solid'}}>
      {Object.entries(items).map(([k, v]) => (
        <HeaderItem text={k} width={v}/>
      ))}
    </div>
  );
};

const PlaylistContent: React.SFC<PlaylistContentProps> = () => {
  return (
    <ContentWrapper>
      <Controls />
      <Header />
      {/* <Playlist /> */}
    </ContentWrapper>
  );
};

export default PlaylistContent;
