import Container from 'components/ControlBarContainer';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Volume } from '../../svg/Volume.svg';
import { useVolume } from './Volume.hooks';

const VolumeContainer = styled(Container)`
  justify-content: flex-end;
`;
const VolumeBox = styled(Container)`
  height: 100%;
  width: 30%;
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

const StyledInput = styled.input<{ percentage?:string | number }>`
  height: 5px;
  appearance: none;
  display: flex;
  width: 80%;
  border-radius: 12px;
  transition: background 0.2s ease;
  cursor: pointer;
  background: ${({ percentage }) => `-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${percentage}%, #fff), color-stop(${percentage}%, #777))`};
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 0px;
    border-radius: 100%;
    height: 0px;
    background: #fff;
    cursor: pointer;
  }
  :hover {
    background: ${({ percentage }) => `-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${percentage}%, #1cb955), color-stop(${percentage}%, #777))`};
    ::-webkit-slider-thumb {
      width: 12px; /* Set a specific slider handle width */
      height: 12px; /* Slider handle height */
    }
  }
`;

const VolumeLayout = () => {
  const { volume, onScrub } = useVolume();

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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onScrub(e.target.value)}
        />
      </VolumeBox>
    </VolumeContainer>
  );
};

export default VolumeLayout;
