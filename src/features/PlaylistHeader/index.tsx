import styled from "styled-components";
import {HeaderText} from './HeaderText'
import {PlaylistImage} from './HeaderImage';


const HeaderContainer = styled.div`
  width: 100%;
  height: 30%;
  background-color: #5a5a5a;
`;
const HeaderLayout = styled.div`
display:flex;
align-items: flex-end;
width: 100%;
height: 100%;
`

const PlaylistHeader = () => {
  return (
    <HeaderContainer>
      <HeaderLayout>
        <PlaylistImage />
        <HeaderText/>
      </HeaderLayout>
    </HeaderContainer>
  );
};

export default PlaylistHeader;