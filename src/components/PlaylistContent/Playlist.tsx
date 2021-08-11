import Rectangle from "../../svg/Rectangle.svg";
import { Item } from "./TableItem";
import styled from "styled-components";

const TrackLayout = styled.div`
  display: flex;
  height: 3em;
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
    { key: "album", text: "Album", width: "25%", alignment: "start" },
    { key: "dateAdded", text: "2021-08-11", width: "25%", alignment: "start" },
    { key: "time", text: "7:14", width: "10%", alignment: "center" },
  ];
  return (
    <TrackLayout>
      {items.map((i) => (
        <Item {...i} />
      ))}
    </TrackLayout>
  );
};

export const Playlist = () => {
  return (
    <>
      {new Array(1).fill(true).map((e, index) => (
        <Track index={index + 1} />
      ))}
    </>
  );
};
