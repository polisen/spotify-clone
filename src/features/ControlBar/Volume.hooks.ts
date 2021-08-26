import { useState, useEffect } from 'react';
import { useAppDispatch } from 'app/hooks';
import { updateVolume } from 'slices/audioContextSlice';

export function useVolume() {
  const dispatch = useAppDispatch();

  const [volume, setVolume] = useState(1);

  useEffect(() => {
    dispatch(updateVolume(volume));
  }, [volume]);

  const onScrub = (value: string) => {
    setVolume(Number(value));
  };

  return {
    volume,
    onScrub,
  };
}

export default useVolume;
