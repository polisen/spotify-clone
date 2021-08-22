import Rectangle from "../../svg/Rectangle.svg";
import styled from "styled-components";

const StyledImage = styled.img`
  width: calc(100% - 5em);
  /* margin: 2.5em; */
  box-shadow: 10px 14px 39px 2px rgba(0, 0, 0, 0.2);
`;

const StyledQuadrantContainer = styled.div`
  width: calc(100% - 3em);
  height: calc(100% - 3em);
  margin: 2.5em;
  box-shadow: 10px 14px 39px 2px rgba(0, 0, 0, 0.2);
`;

const StyledQuadrant = styled.img`
  width: 50%;
  height: 50%;
  padding: 0;
`;

const StyledContainer = styled.div`
  height: 22vh;
  width: 22vh;
  padding: 0;
`;

interface ImageProps {
  coverArt: string[];
}

export const QuadImage = ({ coverArt }: ImageProps) => {
  return (
    <StyledQuadrantContainer>
      {coverArt.map((c) => (
        <StyledQuadrant src={c} />
      ))}
    </StyledQuadrantContainer>
  );
};

export const PlaylistImage = ({ coverArt }: ImageProps) => {
  return (
    <StyledContainer>
      {coverArt.length === 4 ? (
        <QuadImage coverArt={coverArt} />
      ) : (
        <StyledImage src={coverArt[0]} />
      )}
    </StyledContainer>
  );
};
