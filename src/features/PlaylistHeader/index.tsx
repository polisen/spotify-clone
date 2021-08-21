import styled from "styled-components";
import {HeaderText} from './HeaderText'
import {PlaylistImage} from './HeaderImage';
import {useSelector} from 'react-redux'

const HeaderContainer = styled.div`
  width: 100%;
  height: 30%;
  background-color: #5a5a5a;
`;
const HeaderLayout = styled.div`
display:flex;
align-items: flex-end;
width: 100%;
height: 100%;
`

const PlaylistHeader = () => {
  const currentPlaylist = useSelector((state: any) => state.audio.currentPlaylist)
  const {name, coverArt} = useSelector((state: any) => state.audio.playlists[currentPlaylist])
  console.log(name, coverArt)
  return (
    <HeaderContainer>
      <HeaderLayout>
        {coverArt[0] && <PlaylistImage coverArt={coverArt}/>}
        <HeaderText text={name}/>
      </HeaderLayout>
    </HeaderContainer>
  );
};

export default PlaylistHeader;