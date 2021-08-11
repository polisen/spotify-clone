import styled from "styled-components";
import { Resizable } from "re-resizable";
import PlaylistContent from './PlaylistContent'
const Layout = styled.div`
  width: 100vw;
  height: calc(100vh - 3em);
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
  height: 100%;
  background-color: #3e3e3e;
`;

const SidebarLayoutProps = {
  defaultSize: {
    width: "20%",
    height: "100%",
  },
  maxWidth: "30%",
  minWidth: "20%",
};

const PlaylistHeader = styled.div`
  width: 100%;
  height: 30%;
  background-color: #3e3e3e;
`

const PlaylistContentLayout = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #1A1A1A 0%, #070707 100%);
`

export const MainContent = () => {
  return (
    <Layout>
      <SidebarLayout {...SidebarLayoutProps}></SidebarLayout>
      <PlaylistLayout>
        <PlaylistHeader>
        </PlaylistHeader>
        <PlaylistContentLayout>
          <PlaylistContent/>
        </PlaylistContentLayout>

      </PlaylistLayout>
    </Layout>
  );
};
