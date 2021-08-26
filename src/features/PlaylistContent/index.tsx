import styled from 'styled-components';
import React from 'react';
import GreenButtonBar from './GreenButtonBar';
import { Header } from './Header';
import Playlist from './Playlist';

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
  background: linear-gradient(180deg, #101010 0%, #070707 50%);
`;

const PlaylistContent = () => (
  <PlaylistContentLayout>
    <ContentLayout>
      <GreenButtonBar />
      <Header />
      <Playlist />
    </ContentLayout>
  </PlaylistContentLayout>
);

export default PlaylistContent;
