import React from 'react';
import styled from 'styled-components';
import PlaylistContent from './PlaylistContent';
import PlaylistHeader from './PlaylistHeader';
import Sidebar from './SideBar';

const Layout = styled.div`
  width: 100vw;
  height: calc(100vh - 6em);
  display: flex;
  overflow: hidden;
`;

const PlaylistLayout = styled.div`
  width: 100%;
  /* height: 100%; */
  overflow: scroll;
  height: 100%;
  background: #070707;`;

const MainContent = () => (
  <Layout>
    <Sidebar />
    <PlaylistLayout>
      <PlaylistHeader />
      <PlaylistContent />
    </PlaylistLayout>
  </Layout>
);

export default MainContent;
