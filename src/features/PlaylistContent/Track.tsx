import { Track } from "./TableItem";
import useHover from "hooks/useHover";

export const Terack = ({ info, handleClick , isSelected, isPlaying}: any) => {
  const [hoverRef, isHovered]: any = useHover();
  let { index, album, coverArt, trackName, artist } = info;
  return (
    <div ref={hoverRef}>
    <Track.Layout {...{isSelected, onClick: () => handleClick(index)}}>
      <Track.Index {...{index, isSelected, isHovered, isPlaying}} />
      <Track.Title {...{ coverArt, artist, trackName, isHovered }} />
      <Track.Album {...{ album, isSelected, isHovered }} />
      <Track.Date {...{ date: "2021-08-11" }} />
      <Track.Time {...{ time: "07:41" }} />
    </Track.Layout>
    </div>

  );
};

export default Terack;
