import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateVolume } from 'slices/audioContextSlice';

export function useVolume() {
  const dispatch = useDispatch();

  const [volume, setVolume] = useState(1);

  useEffect(() => {
    dispatch(updateVolume(volume));
  }, [volume]);

  const onScrub = (value: any) => {
    setVolume(value);
  };

  return {
    volume,
    onScrub,
  };
}

export default useVolume;
