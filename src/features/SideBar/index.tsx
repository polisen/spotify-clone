import styled from 'styled-components';
import { Resizable } from 're-resizable';
import { Github } from 'svg';
import Text from 'components/Text';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPlaylist } from 'slices/audioContextSlice';
import React, { useEffect } from 'react';

const SidebarLayout = styled(Resizable)`
  /* width: 30%; */
  height: 100%;
  background-color: black;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  padding-left: 1em;
`;

const SidebarLayoutProps = {
  defaultSize: {
    width: '15%',
    height: '100%',
  },
  maxWidth: '25%',
  minWidth: '15%',
};

const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 1em;
  cursor: pointer;
  :hover ${Text.Dimmed} {
    color: white;
  }
`;

const GithubIcon = styled(Github)`
  width: 2em;
  margin: 5px;
  height: 2em;
`;
// const StorybookIcon = styled(StorybookLogo)`
//   width: 2em;
//   margin: 5px;
//   height: 2em;
// `;

const MenuItem = ({ text, icon }: any) => (
  <MenuItemContainer>
    {icon}
    <Text.Dimmed>{text}</Text.Dimmed>
  </MenuItemContainer>
);

const Divider: any = styled.hr`
  border: none;
  border-top: 2px solid;
  border-color: ${({ color }) => (color || '#444444')};
  width: calc(100% - 1.5em);
  margin: ${({ sm }: any) => (sm ? '1em 0 1em 0' : '2em 0 2em 0')};
`;

const PlaylistItem = ({ text, slug, setPlaylist }: any) => (
  <MenuItemContainer onClick={() => setPlaylist(slug)}>
    <Text.Dimmed>{text}</Text.Dimmed>
  </MenuItemContainer>
);

const items = {
  github: {
    text: 'polisen/spotify-clone',
    icon: <GithubIcon />,
  },
  // storybook: {
  //   text: "Storybook",
  //   icon: <StorybookIcon />,
  // },
};

const SideBar = () => {
  const dispatch = useDispatch();

  const playlists = useSelector((state: any) => state.audio.availablePlaylists);
  useEffect(() => {
    dispatch(setCurrentPlaylist(playlists[0].slug));
  }, []);

  function handlePlaylistChange(slug: string) {
    dispatch(setCurrentPlaylist(slug));
  }

  return (
    <SidebarLayout {...SidebarLayoutProps}>

      {/* <Divider {...{ color: "black", sm: true }} /> */}
      {Object.entries(items).map(([key, value]) => <MenuItem key={key} {...value} />)}
      <Divider {...{ sm: true }} />
      {playlists.map(({ name, slug }: any) => (
        <PlaylistItem
          key={slug}
          text={name}
          slug={slug}
          setPlaylist={handlePlaylistChange}
        />
      ))}
    </SidebarLayout>
  );
};

export default SideBar;
