import styled from "styled-components";
import { HeaderText } from "./HeaderText";
import { PlaylistImage } from "./HeaderImage";
import { useSelector } from "react-redux";
import {Container} from 'components/common'
const HeaderContainer = styled(Container)`
  height: 30%;
  background-color: #5a5a5a;
`;
const HeaderLayout = styled(Container.Flex)`
  align-items: flex-end;
  justify-content: flex-start;
`;

const PlaylistHeader = () => {
  const currentPlaylist = useSelector(
    (state: any) => state.audio.currentPlaylist
  );
  const { name, coverArt } = useSelector(
    (state: any) => state.audio.playlists[currentPlaylist]
  );
  console.log(name, coverArt);
  return (
    <HeaderContainer>
      <HeaderLayout>
        {coverArt[0] && <PlaylistImage coverArt={coverArt} />}
        <HeaderText text={name} />
      </HeaderLayout>
    </HeaderContainer>
  );
};

export default PlaylistHeader;
