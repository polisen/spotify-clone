import styled from 'styled-components';
import React from 'react';
import { TinyPlay, TinyPause } from 'svg';
import Text from '../../components/Text';

function getStyling(type: string | undefined) {
  switch (type) {
    case 'index':
      return { width: '5%', alignment: 'center' };
    case 'title':
      return { width: '35%', alignment: 'start' };
    case 'album':
      return { width: '25%', alignment: 'start' };
    case 'date':
      return { width: '25%', alignment: 'start' };
    case 'time':
      return { width: '10%', alignment: 'center' };
    default:
      return {};
  }
}

const StyledItemContainer = styled.div<{ width?: string; alignment?: string }>`
  width: ${({ width }) => width};
  display: flex;
  justify-content: ${({ alignment }) => alignment};
  align-items: center;
  max-height: 3em;
`;

const StyledItemLayout = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const AlbumArt = styled.img`
  padding-right: 5px;
  height: 3em;
`;

const TrackLayout = styled.div<{ isSelected?: boolean }>`
  display: flex;
  height: 4em;
  margin: 5px;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: ${({ isSelected }) => (isSelected ? 'rgba(255,255,255,.2)' : 'rgba(255,255,255,.05)')};
  }
  cursor: pointer;
  border-radius: 4px;
  background-color: ${({ isSelected }) => (isSelected ? 'rgba(255,255,255,.2)' : '')};
`;

const Play = styled(TinyPlay)`
  width: 1.25em;
`;
const Pause = styled(TinyPause)`
  width: 1.25em;
`;

interface SectionLayoutProps {
  children: React.ReactNode;
  width?: string;
  alignment?: string;
}

export const SectionLayout = ({ children, width, alignment }: SectionLayoutProps) => (
  <StyledItemContainer {...{ width, alignment }}>
    <StyledItemLayout>{children}</StyledItemLayout>
  </StyledItemContainer>
);

interface LayoutProps {
  isSelected: boolean;
}

export const Layout = (props: LayoutProps) => <TrackLayout {...props} />;

export const PlayPause = ({
  isSelected,
  isPlaying,
}: {
  isSelected: boolean;
  isPlaying: boolean;
}) => {
  if (isSelected) {
    return isPlaying ? <Pause /> : <Play />;
  }
  return <Play />;
};

interface IndexProps {
  index: number;
  isSelected: boolean;
  isPlaying: boolean;
  isHovered: boolean;
}

export const Index = ({
  index, isSelected, isHovered, isPlaying,
}: IndexProps) => (
  <SectionLayout {...getStyling('index')}>
    {() => {
      if (isHovered) {
        return <PlayPause {...{ isSelected, isPlaying }} />;
      }
      if (isSelected) {
        return <Text.Green>{index + 1}</Text.Green>;
      }
      return <Text.Dimmed>{index + 1}</Text.Dimmed>;
    }}
  </SectionLayout>
);

interface TitleProps {
  coverArt: string;
  artist: string;
  trackName: string;
  isSelected: boolean;
  isHovered: boolean;
}

export const Title = ({
  coverArt, artist, trackName, isSelected, isHovered,
}: TitleProps) => (
  <SectionLayout {...getStyling('title')}>
    <AlbumArt src={coverArt} />
    <div>
      {isSelected ? <Text.Green>{trackName}</Text.Green> : <Text>{trackName}</Text>}
      {isHovered || isSelected ? <Text>{artist}</Text> : <Text.Dimmed>{artist}</Text.Dimmed>}
    </div>
  </SectionLayout>
);

export const Album = ({ album, isSelected }: { album: string; isSelected: boolean }) => (
  <SectionLayout {...getStyling('album')}>
    {isSelected ? <Text>{album}</Text> : <Text.Dimmed>{album}</Text.Dimmed>}
  </SectionLayout>
);

export const Date = ({ date }: { date: string }) => (
  <SectionLayout {...getStyling('date')}>
    <Text.Dimmed>{date}</Text.Dimmed>
  </SectionLayout>
);

export const Time = ({ time }: { time: string }) => (
  <SectionLayout {...getStyling('time')}>
    <Text.Dimmed>{time}</Text.Dimmed>
  </SectionLayout>
);

export const HeaderText = ({
  icon,
  text,
  slug,
}: {
  icon?: React.ReactNode;
  text?: string;
  slug: string;
}) => (
  <SectionLayout {...getStyling(slug)}>
    {icon || <Text.DimmedBold>{text}</Text.DimmedBold>}
  </SectionLayout>
);

export const Track = {
  Layout,
  Index,
  Title,
  Album,
  Date,
  Time,
  HeaderText,
};
