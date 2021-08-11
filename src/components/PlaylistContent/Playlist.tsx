import Rectangle from "../../svg/Rectangle.svg";
import { Item } from "./TableItem";
import styled from "styled-components";

const TrackLayout = styled.div`
  display: flex;
  height: 3em;
  :hover {
    background-color: #444444;
  }
  cursor: pointer;
  border-radius: 4px;
`;

export const Track = ({ index }: any) => {
  const items = [
    { key: "n", text: index, width: "5%", alignment: "center" },
    {
      key: "title",
      text: "Track Title",
      secondaryText: "Artist",
      width: "35%",
      alignment: "start",
      image: Rectangle,
    },
    { key: "album", text: "Album", width: "25%", alignment: "start", secondaryColor: true },
    { key: "dateAdded", text: "2021-08-11", width: "25%", alignment: "start", secondaryColor: true },
    { key: "time", text: "7:14", width: "10%", alignment: "center", secondaryColor: true },
  ];
  return (
    <TrackLayout>
      {items.map((i) => (
        <Item {...i} />
      ))}
    </TrackLayout>
  );
};

const PlaylistBox = styled.div`
    /* overflow: scroll; */
    height: calc(100% - 3em);
    width: 100%;
`

export const Playlist = () => {
  return (
    <PlaylistBox>
      {new Array(50).fill(true).map((e, index) => (
        <Track key={index} index={index + 1} />
      ))}
    </PlaylistBox>
  );
};
