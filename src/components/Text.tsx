import styled from 'styled-components'

const Text = ({children}: any) => <DefaultText>{children}</DefaultText>

const DefaultText = styled.p`
  font-family: 'DM Sans';
  font-weight: 500;
  color: white;
  margin: 0;
  margin-left: ${({ inset }: any) => (inset ? ".5em" : "0")};
`;

Text.Dimmed = styled(DefaultText)`
  color: #b3b3b3;
`

Text.Bold = styled(DefaultText)`
  font-weight: bold;
`

Text.DimmedBold = styled(DefaultText)`
  color: #b3b3b3;
  font-weight: bold;
`


Text.Green = styled(DefaultText)`
  color: #1cb955;
`

Text.Playlist = styled(DefaultText)`
  font-size: 76px;
  font-weight: bold;
`


export default Text;