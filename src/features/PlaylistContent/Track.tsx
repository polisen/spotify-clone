import { Track } from "./TableItem";

export const Terack = ({ info, handleClick }: any) => {
  let { index, title, album, coverArt, trackName, artist } = info;
  return (
    <div onClick={() => handleClick(index)}>
    <Track.Layout  color={'blue'}>
      <Track.Index index={index} />
      <Track.Title {...{ coverArt, artist, title }} />
      <Track.Album {...{ album }} />
      <Track.Date {...{ date: "2021-08-11" }} />
      <Track.Time {...{ time: "07:41" }} />
    </Track.Layout>
    </div>
  );
};

export default Terack;
