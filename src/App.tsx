import React from 'react';
import useKeypress from 'hooks/useKeyPress';
import { useDispatch } from 'react-redux';
import { togglePlayState } from 'slices/audioContextSlice';
import Controls from './features/ControlBar';
import MainContent from './features/MainContent';

function App() {
  const dispatch = useDispatch();
  useKeypress(32, () => {
    dispatch(togglePlayState());
  });
  return (
    <>
      <MainContent />
      <Controls />
    </>
  );
}

export default App;
