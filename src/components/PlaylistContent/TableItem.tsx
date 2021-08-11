import styled from "styled-components";

const ItemContainer = styled.div`
  width: ${({ width }: any) => width};
  display: flex;
  justify-content: ${({ alignment }: any) => alignment};
  align-items: center;
`;

const ItemLayout = styled.div`
  max-height: 3em;
  display: inline-flex;
  align-items: center;
`;

const ItemText = styled.p`
  font-family: montserrat;
  font-weight: bold;
  color: ${({ secondaryColor }: any) =>
    secondaryColor ? "#b3b3b3" : "#ffffff"};
  margin: 0;
`;


const AlbumArt = styled.img`
margin: 5px;

`

export const Item = ({
  text,
  secondaryText,
  width,
  alignment,
  icon,
  image,
  secondaryColor,
}: any) => {
  return (
    <ItemContainer {...{ width, alignment }}>
      <ItemLayout>
        {image && <AlbumArt src={image} />}
        <div>
          {icon ? icon : <ItemText {...{ secondaryColor }}>{text}</ItemText>}
          {secondaryText && (
            <ItemText {...{ secondaryColor: true }}>{secondaryText}</ItemText>
          )}
        </div>
      </ItemLayout>
    </ItemContainer>
  );
};
