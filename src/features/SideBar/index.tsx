import styled from "styled-components";
import { Resizable } from "re-resizable";
import {Github, StorybookLogo} from "svg";
import Text from 'components/Text'

const SidebarLayout = styled(Resizable)`
  width: 30%;
  height: 100%;
  background-color: black;
  flex-direction: column;
  display: flex;
  align-items: center;
  padding-left: 1.5em;
`;

const SidebarLayoutProps = {
  defaultSize: {
    width: "15%",
    height: "100%",
  },
  maxWidth: "25%",
  minWidth: "15%",
};



const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 1em;
  cursor: pointer;
  :hover ${Text.Dimmed}{
    color: white;
  }
`;


const GithubIcon = styled(Github)`
  width: 2em;
  margin: 5px;
  height: 2em;
`;
const StorybookIcon = styled(StorybookLogo)`
  width: 2em;
  margin: 5px;
  height: 2em;
`



const MenuItem = ({ text, icon }: any) => (
  <MenuItemContainer>
    {icon}
    <Text.Dimmed>{text}</Text.Dimmed>
  </MenuItemContainer>
);

const Divider = styled.hr`
  border: none;
  border-top: 2px solid;
  border-color: ${({ color }) => (color ? color : "#444444")};
  width: calc(100% - 1.5em);
  margin: ${({ sm }: any) => (sm ? "1em 0 1em 0" : "2em 0 2em 0")};
`;

const PlaylistItem = ({ text }: any) => {
  return (
    <MenuItemContainer>
      <Text.Dimmed {...{inset:true}}>{text}</Text.Dimmed>
    </MenuItemContainer>
  );
};

const Margins = styled.div`
  width: 100%;
`;

const SideBar = () => {
  const items = {
    github: {
      text: "polisen/spotify-clone",
      icon: <GithubIcon/>,
    },
    storybook: {
      text: "Storybook",
      icon: <StorybookIcon/>,
    },
  };
  const playlists = ["Playlist 1", "Playlist 2"];
  return (
    <SidebarLayout {...SidebarLayoutProps}>
      <Margins>
        <Divider {...{ color: "black", sm: true }} />
        {Object.entries(items).map(([key, value]) => {
          return <MenuItem key={key} {...value} />;
        })}
        <Divider />
        {playlists.map((text) => {
          return <PlaylistItem key={text} text={text} />;
        })}
      </Margins>
    </SidebarLayout>
  );
};

export default SideBar;
