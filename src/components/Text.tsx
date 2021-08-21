import styled from 'styled-components'

const Text = ({children}: any) => <DefaultText>{children}</DefaultText>

const DefaultText = styled.p`
  font-family: 'DM Sans';
  font-weight: bold;
  color: white;
  margin: 0;
  margin-left: ${({ inset }: any) => (inset ? ".5em" : "0")};
`;

Text.Dimmed = styled(DefaultText)`
  color: #b3b3b3;
`

Text.Playlist = styled(DefaultText)`
  font-size: 76px;
`


export default Text;