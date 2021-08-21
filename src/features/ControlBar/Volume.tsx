import { Container } from "components/ControlBarContainer";

import styled from "styled-components";
import { ReactComponent as Volume } from "../../svg/Volume.svg";
import { useVolume } from "./Volume.hooks";

const VolumeContainer = styled(Container)`
  justify-content: flex-end;
`;
const VolumeBox = styled(Container)`
  height: 100%;
  width: 30%;
  /* background-color: red; */
  padding-right: 20px;
`;

const VolumeIcon = styled(Volume)`
  padding: 10px;
  height: 1em;
  width: 1em;
  path {
    fill: #b3b3b3;
  }
`;

const StyledInput: any = styled.input`
  height: 5px;
  appearance: none;
  display: flex;
  width: 80%;
  /* margin-bottom: 10px; */
  border-radius: 12px;
  transition: background 0.2s ease;
  cursor: pointer;
  background: ${({ percentage }: any) =>
    `-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${percentage}%, #fff), color-stop(${percentage}%, #777))`};
  ::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 0px;
    border-radius: 100%; /* Set a specific slider handle width */
    height: 0px; /* Slider handle height */
    background: #fff; /* Green background */
    cursor: pointer; /* Cursor on hover */
  }
  :hover {
    background: ${({ percentage }: any) =>
      `-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${percentage}%, #1cb955), color-stop(${percentage}%, #777))`};
    ::-webkit-slider-thumb {
      width: 12px; /* Set a specific slider handle width */
      height: 12px; /* Slider handle height */
    }
  }
`;

const VolumeLayout = () => {
  let {volume, onScrub} = useVolume()

  return (
    <VolumeContainer>
      <VolumeBox>
        <VolumeIcon />
        <StyledInput
          type="range"
          step=".1"
          min="0"
          max="1"
          value={volume}
          percentage={Math.floor(volume * 100)}
          onChange={(e: any) => onScrub(e.target.value)}
        />
      </VolumeBox>
    </VolumeContainer>
  );
};

export default VolumeLayout;
