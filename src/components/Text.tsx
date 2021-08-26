import styled from 'styled-components';
import React from 'react';

const DefaultText = styled.p<{ inset?: boolean }>`
  font-family: "DM Sans";
  font-weight: 500;
  color: white;
  margin: 0;
  margin-left: ${({ inset }) => (inset ? '.5em' : '0')};
`;
const Text = ({ children, inset = false }: { children: React.ReactNode, inset?: boolean }) => (
  <DefaultText inset={inset}>{children}</DefaultText>
);

Text.Dimmed = styled(DefaultText)`
  color: #b3b3b3;
`;

Text.Bold = styled(DefaultText)`
  font-weight: bold;
`;

Text.DimmedBold = styled(DefaultText)`
  color: #b3b3b3;
  font-weight: bold;
`;

Text.Green = styled(DefaultText)`
  color: #1cb955;
`;

Text.Playlist = styled(DefaultText)`
  font-size: 76px;
  font-weight: bold;
`;

export default Text;
