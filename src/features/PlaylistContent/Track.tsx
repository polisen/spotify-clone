import React from 'react';
import useHover from 'hooks/useHover';
import { Track } from './TableItem';

export const TrackComponent = ({
  info, handleClick, isSelected, isPlaying,
}: any) => {
  const [hoverRef, isHovered]: any = useHover();
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
