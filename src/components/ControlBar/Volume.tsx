import { Container } from "./components";
import styled from "styled-components";
import { ReactComponent as Volume } from "../../svg/Volume.svg";
const VolumeContainer = styled(Container)`
  justify-content: flex-end;
`;
const VolumeBox = styled(Container)`
  height: 100%;
  width: 10em;
  background-color: red;
`;

const VolumeIcon = styled(Volume)`
  padding: 10px;
  height: 1em;
  width: 1em;
  path {
      fill: #b3b3b3;
    } 
`;

const VolumeLayout = () => {
  return (
    <VolumeContainer>
      <VolumeBox>
        <VolumeIcon />
      </VolumeBox>
    </VolumeContainer>
  );
};

export default VolumeLayout;
