import styled from 'styled-components';
import Text from 'components/Text';
import React from 'react';

const PlaylistTitle = styled(Text.Playlist)`
  margin-bottom: 0.5em;
`;

const HeaderText = ({ text }: any) => (
  <div>
    <Text>PLAYLIST</Text>
    <PlaylistTitle>{text}</PlaylistTitle>
  </div>
);

export default HeaderText;
