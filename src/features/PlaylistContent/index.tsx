import styled from "styled-components";
import { GreenButtonBar } from "./GreenButtonBar";
import { Header } from "./header";
import { Playlist } from "./Playlist";

const ContentLayout = styled.div`
  max-width: 100%;
  height: 100%;
  margin: 0 25px 0 25px;
  flex: 1;
  min-height: 0;
`;
const PlaylistContentLayout = styled.div`
  width: 100%;
  height: 100%;
`;

export interface PlaylistContentProps {}

const PlaylistContent: React.SFC<PlaylistContentProps> = () => {
  return (
    <PlaylistContentLayout>
      <ContentLayout>
        <GreenButtonBar />
        <Header />
        <Playlist />
      </ContentLayout>
    </PlaylistContentLayout>
  );
};

export default PlaylistContent;
