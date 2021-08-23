import styled from "styled-components";
import Text from "../../components/Text";
import { HeaderItem } from "./Header";
import { MusicNote, TinyPlay, TinyPause } from "svg";
function getStyling(type: string) {
  switch (type) {
    case "index":
      return { width: "5%", alignment: "center" };
    case "title":
      return { width: "35%", alignment: "start" };
    case "album":
      return { width: "25%", alignment: "start" };
    case "date":
      return { width: "25%", alignment: "start" };
    case "time":
      return { width: "10%", alignment: "center" };
    default:
      return {};
  }
}

const StyledItemContainer = styled.div`
  width: ${({ width }: any) => width};
  display: flex;
  justify-content: ${({ alignment }: any) => alignment};
  align-items: center;
  max-height: 3em;
`;

const StyledItemLayout = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* max-height: 3em; */
`;

const AlbumArt = styled.img`
  padding-right: 5px;
  height: 3em;
`;

const TrackLayout: any = styled.div`
  display: flex;
  height: 4em;
  margin: 5px;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: ${({ isSelected }: any) =>
      isSelected ? "rgba(255,255,255,.2)" : "rgba(255,255,255,.05)"};
  }
  cursor: pointer;
  border-radius: 4px;
  background-color: ${({ isSelected }: any) =>
    isSelected ? "rgba(255,255,255,.2)" : ""};
`;

const Play = styled(TinyPlay)`
  width: 1.25em;
`;
const Pause = styled(TinyPause)`
  width: 1.25em;
`;

export const SectionLayout = ({ children, width, alignment }: any) => {
  return (
    <StyledItemContainer {...{ width, alignment }}>
      <StyledItemLayout>{children}</StyledItemLayout>
    </StyledItemContainer>
  );
};

export const Layout = (props: any) => <TrackLayout {...props} />;

export const PlayPause = ({ isSelected, isPlaying }: any) => {
  return <>{isSelected ? isPlaying ? <Pause /> : <Play /> : <Play />}</>;
};

export const Index = ({ index, isSelected, isHovered, isPlaying }: any) => (
  <SectionLayout {...getStyling("index")}>
    {isHovered ? (
      <PlayPause {...{ isSelected, isPlaying }} />
    ) :  isSelected ? (
      <Text.Green>{index + 1}</Text.Green>
    ) :(
      <Text.Dimmed>{index + 1}</Text.Dimmed>
    )}
  </SectionLayout>
);

export const Title = ({
  coverArt,
  artist,
  trackName,
  isSelected,
  isHovered,
  isPlaying,
}: any) => {
  return (
    <SectionLayout {...getStyling("title")}>
      <AlbumArt src={coverArt} />
      <div>
        {isSelected ? (
          <Text.Green>{trackName}</Text.Green>
        ) : (
          <Text>{trackName}</Text>
        )}
        {isHovered || isSelected ? (
          <Text>{artist}</Text>
        ) : (
          <Text.Dimmed>{artist}</Text.Dimmed>
        )}
      </div>
    </SectionLayout>
  );
};

export const Album = ({ album, isSelected }: any) => (
  <SectionLayout {...getStyling("album")}>
    {isSelected ? <Text>{album}</Text> : <Text.Dimmed>{album}</Text.Dimmed>}
  </SectionLayout>
);

export const Date = ({ date }: any) => (
  <SectionLayout {...getStyling("date")}>
    <Text.Dimmed>{date}</Text.Dimmed>
  </SectionLayout>
);

export const Time = ({ time }: any) => (
  <SectionLayout {...getStyling("time")}>
    <Text.Dimmed>{time}</Text.Dimmed>
  </SectionLayout>
);

export const HeaderText = ({ icon, text, slug }: HeaderItem) => (
  <SectionLayout {...getStyling(slug)}>
    {icon ? icon : <Text.DimmedBold>{text}</Text.DimmedBold>}
  </SectionLayout>
);

export const Track = {
  Layout,
  Index,
  Title,
  Album,
  Date,
  Time,
  HeaderText,
};
