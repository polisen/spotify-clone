import React from 'react';
import useKeypress from 'hooks/useKeyPress';
import { togglePlayState } from 'slices/audioContextSlice';
import { useAppDispatch } from 'app/hooks';
import Controls from './features/ControlBar';
import MainContent from './features/MainContent';

function App() {
  const dispatch = useAppDispatch();
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
