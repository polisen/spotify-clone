import Rectangle from "../../svg/Rectangle.svg";
import styled from "styled-components";

const StyledImage = styled.img`
  width: calc(100% - 5em);
  margin: 2.5em;
  box-shadow: 10px 14px 39px 2px rgba(0, 0, 0, 0.2);
`;

const StyledContainer = styled.div`
    width: 20em;
    height: 20em;
`

export const PlaylistImage = () => {
  return (
    <StyledContainer>
      <StyledImage src={Rectangle} />
    </StyledContainer>
  );
};
