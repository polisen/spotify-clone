import { Container } from "./components";
import Rectangle from "../../svg/Rectangle.svg";
import styled from "styled-components";

const Image = styled.img`
  width: calc(5em - 20px);
  height: calc(5em - 20px);
  margin: 7.5px;
`;
const AlbumImage = ({ src }: any) => {
  return (
    <div>
      <Image src={src} />
    </div>
  );
};

const Text = styled.p`
  font-family: montserrat;
  font-weight: bold;
  color: white;
  margin: 0;
  /* overflow: hidden; */
  margin-left: ${({ inset }: any) => (inset ? ".5em" : "0")};
`;


const Artist = styled.p`
  font-family: montserrat;
  font-weight: bold;
  color: #b3b3b3;
  font-size: 11px;
  margin: 3px;
  /* overflow: hidden; */
  margin-left: ${({ inset }: any) => (inset ? ".5em" : "0")};
`;
const TrackInfo = ({ artist, title }: any) => {
  return (
    <div style={{padding: '5px'}}>
        <Text>{title}</Text>
      <Artist>{artist}</Artist>

    </div>
  );
};

const CurrentlyPlaying = () => {
  return (
    <Container>
      <AlbumImage src={Rectangle} />
      <TrackInfo artist={"Artist"} title={"Title"} />
    </Container>
  );
};

export default CurrentlyPlaying;
