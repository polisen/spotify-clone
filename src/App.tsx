import React from "react";
import styled from "styled-components";
import {MainContent} from './features/MainContent'
import Controls from './features/ControlBar'
import useKeypress from 'hooks/useKeyPress';
import { useDispatch } from "react-redux";
import {togglePlayState} from 'slices/audioContextSlice'
function App() {
  const dispatch = useDispatch()
  useKeypress(32, () => {
    dispatch(togglePlayState())
  });
  return (
    <>
      <MainContent/>
      <Controls />
    </>
  );
}



export default App;
