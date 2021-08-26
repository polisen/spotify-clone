import styled from 'styled-components';
import React from 'react';
import { useAppSelector } from 'app/hooks';
import { Container } from 'components/common';
import HeaderText from './HeaderText';
import { PlaylistImage } from './HeaderImage';

const HeaderContainer = styled(Container)`
  height: 30%;
  background-color: #5a5a5a;
`;
const HeaderLayout = styled(Container.Flex)`
  align-items: flex-end;
  justify-content: flex-start;
`;

const PlaylistHeader = () => {
  const currentPlaylist = useAppSelector(
    (state) => state.audio.currentPlaylist,
  );
  const { name, coverArt } = useAppSelector(
    (state) => state.audio.playlists[currentPlaylist],
  );
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
