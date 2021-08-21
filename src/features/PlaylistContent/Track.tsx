import { Track } from "./TableItem";
import useHover from "hooks/useHover";

export const Terack = ({ info, handleClick , isSelected, isPlaying}: any) => {
  const [hoverRef, isHovered]: any = useHover();
  let now = (new Date()).toLocaleDateString('sv-SE')
  let { index, album, coverArt, trackName, artist, duration } = info;
  return (
    <div ref={hoverRef}>
    <Track.Layout {...{isSelected, onClick: () => handleClick(index)}}>
      <Track.Index {...{index, isSelected, isHovered, isPlaying}} />
      <Track.Title {...{ coverArt, artist, trackName, isSelected, isHovered, isPlaying }} />
      <Track.Album {...{ album, isSelected, isHovered }} />
      <Track.Date {...{ date: now}} />
      <Track.Time {...{ time: duration}} />
    </Track.Layout>
    </div>

  );
};

export default Terack;
