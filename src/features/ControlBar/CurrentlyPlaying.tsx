import { Container } from "components/ControlBarContainer";
import Rectangle from "../../svg/Rectangle.svg";
import styled from "styled-components";
import Text from 'components/Text'
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




const TrackInfo = ({ artist, title }: any) => {
  return (
    <div style={{padding: '5px'}}>
        <Text>{title}</Text>
      <Text.Dimmed>{artist}</Text.Dimmed>
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
