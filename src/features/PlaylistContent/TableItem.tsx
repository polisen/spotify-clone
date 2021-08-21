import styled from "styled-components";
import Text from "../../components/Text";
import { HeaderItem } from "./header";
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

export const SectionLayout = ({ children, width, alignment }: any) => {
  return (
    <StyledItemContainer {...{ width, alignment }}>
      <StyledItemLayout>{children}</StyledItemLayout>
    </StyledItemContainer>
  );
};

export const Layout = (props: any) => <TrackLayout {...props} />;

export const PlayPause = ({ isSelected, isPlaying }: any) => {
  return <>{isSelected ? (isPlaying ? "pause" : "play") : "play"}</>;
};

export const Bars = () => {
  return <>bars</>;
};

export const Index = ({ index, isSelected, isHovered, isPlaying }: any) => (
  <SectionLayout {...getStyling("index")}>
    {isHovered ? (
      <PlayPause {...{ isSelected, isPlaying }} />
    ) : isPlaying && isSelected ? (
      <Bars />
    ) : (
      <Text.Dimmed>{index + 1}</Text.Dimmed>
    )}
  </SectionLayout>
);

export const Title = ({ coverArt, artist, trackName, isHovered }: any) => {
  return (
    <SectionLayout {...getStyling("title")}>
      <AlbumArt src={coverArt} />
      <div>
        <Text>{trackName}</Text>
        {isHovered ? (
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
    {icon ? icon : <Text.Dimmed>{text}</Text.Dimmed>}
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
