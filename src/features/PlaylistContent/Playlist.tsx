import Track from './Track'
import styled from "styled-components";


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
