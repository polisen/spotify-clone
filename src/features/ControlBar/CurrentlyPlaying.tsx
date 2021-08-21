import { Container } from "components/ControlBarContainer";
import Rectangle from "../../svg/Rectangle.svg";
import styled from "styled-components";
import Text from 'components/Text'
import { useSelector } from "react-redux";
const Image = styled.img`
  width: calc(5em - 20px);
  height: calc(5em - 20px);
  margin: 7.5px;
  border: none;
`;
const AlbumImage = ({ src }: any) => {
  return (
    <div>
      
      {src && <Image src={src} /> }
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
  const {trackName, artist, coverArt} = useSelector((state: any) => state.audio.currentlyPlaying)
  return (
    <Container>
      <AlbumImage src={coverArt} />
      <TrackInfo artist={artist} title={trackName} />
    </Container>
  );
};

export default CurrentlyPlaying;
