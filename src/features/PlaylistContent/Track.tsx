import React, { useRef } from 'react';
import useHover from 'hooks/useHover';
import { Track } from './TableItem';

interface TrackComponentProps {
  info: any;
  index: number;
  handleClick: Function;
  isSelected: boolean;
  isPlaying: boolean;
}

export const TrackComponent = ({
  info,
  handleClick,
  isSelected,
  isPlaying,
}: TrackComponentProps) => {
  const hoverRef = useRef(null);
  const isHovered = useHover(hoverRef);
  const now = new Date().toLocaleDateString('sv-SE');
  const {
    index, album, coverArt, trackName, artist, duration,
  } = info;
  return (
    <div ref={hoverRef}>
      <Track.Layout {...{ isSelected, onClick: () => handleClick(index) }}>
        <Track.Index
          {...{
            index,
            isSelected,
            isHovered,
            isPlaying,
          }}
        />
        <Track.Title
          {...{
            coverArt,
            artist,
            trackName,
            isSelected,
            isHovered,
            isPlaying,
          }}
        />
        <Track.Album {...{ album, isSelected, isHovered }} />
        <Track.Date {...{ date: now }} />
        <Track.Time {...{ time: duration }} />
      </Track.Layout>
    </div>
  );
};

export default TrackComponent;
