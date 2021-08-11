import styled from "styled-components";
import { Resizable } from "re-resizable";
import PlaylistContent from "./PlaylistContent";
import PlaylistHeader from './PlaylistHeader'

const Layout = styled.div`
  width: 100vw;
  height: calc(100vh - 5em);
  display: flex;
  overflow: hidden;
`;

const SidebarLayout = styled(Resizable)`
  width: 30%;
  height: 100%;
  background-color: black;
`;

const PlaylistLayout = styled.div`
  width: 100%;
  /* height: 100%; */
  overflow: scroll;
  height: 100%;
  background: linear-gradient(180deg, #1a1a1a 0%, #070707 100%);
`;

const SidebarLayoutProps = {
  defaultSize: {
    width: "15%",
    height: "100%",
  },
  maxWidth: "25%",
  minWidth: "15%",
};


export const MainContent = () => {
  return (
    <Layout>
      <SidebarLayout {...SidebarLayoutProps}></SidebarLayout>
      <PlaylistLayout>
        <PlaylistHeader />
        <PlaylistContent />
      </PlaylistLayout>
    </Layout>
  );
};
