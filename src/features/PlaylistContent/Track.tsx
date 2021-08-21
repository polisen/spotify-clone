import { Track } from "./TableItem";

export const Terack = ({ info, handleClick , isSelected}: any) => {
  let { index, album, coverArt, trackName, artist } = info;
  return (
    <div onClick={() => handleClick(index)}>
    <Track.Layout  isSelected={isSelected}>
      <Track.Index index={index} />
      <Track.Title {...{ coverArt, artist, trackName }} />
      <Track.Album {...{ album }} />
      <Track.Date {...{ date: "2021-08-11" }} />
      <Track.Time {...{ time: "07:41" }} />
    </Track.Layout>
    </div>
  );
};

export default Terack;
