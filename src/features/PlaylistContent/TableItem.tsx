import styled from "styled-components";
import Text from '../../components/Text'
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
          {icon ? icon : (secondaryColor ? <Text.Dimmed>{text}</Text.Dimmed> : <Text>{text}</Text>)}
          {secondaryText && (
            <Text.Dimmed>{secondaryText}</Text.Dimmed>
          )}
        </div>
      </ItemLayout>
    </ItemContainer>
  );
};
