import styled from "styled-components";
import Text from "../../components/Text";
import {HeaderItem} from './header'
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
  max-height: 3em;
`;

const AlbumArt = styled.img`
  margin: 5px;
  width: 3em;
`;

const TrackLayout = styled.div`
  display: flex;
  height: 3em;
  :hover {
    background-color: #444444;

  }
  cursor: pointer;
  border-radius: 4px;
`;

export const SectionLayout = ({ children, width, alignment }: any) => {
  return (
    <StyledItemContainer {...{ width, alignment }}>
      <StyledItemLayout>{children}</StyledItemLayout>
    </StyledItemContainer>
  );
};

export const Layout = ({ children, props }: any) => (
  <TrackLayout onClick={() => console.log(props)}>{children}</TrackLayout>
);

export const Index = ({ index }: any) => (
  <SectionLayout {...getStyling("index")}>
    <Text.Dimmed>{index + 1}</Text.Dimmed>
  </SectionLayout>
);

export const Title = ({ coverArt, artist, title }: any) => {
  return (
    <SectionLayout {...getStyling("title")}>
      <AlbumArt src={coverArt} />
      <div>
        <Text>{title}</Text>
        <Text.Dimmed>{artist}</Text.Dimmed>
      </div>
    </SectionLayout>
  );
};

export const Album = ({ album, isHovered }: any) => (
  <SectionLayout {...getStyling("album")}>
    {isHovered}
    <Text.Dimmed >{album}</Text.Dimmed>
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

export const HeaderText = ({icon, text, slug}: HeaderItem) => (
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
  HeaderText
};
