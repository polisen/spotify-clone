import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { togglePlayState, setCurrentTrack, updateTrackProgress } from 'slices/audioContextSlice';
import { RootState } from 'app/store';

function useAudioPlayer() {
  const dispatch = useDispatch();
  const { isPlaying, currentlyPlaying, volume } = useSelector(
    (state: RootState) => state.audio,
  );

  const [trackProgress, setTrackProgress] = useState(0);
  const [currentPercentage, setCurrentPercentage] = useState('');
  const audioRef = useRef(new Audio(currentlyPlaying.mediaLink));

  const intervalRef: React.MutableRefObject<any> = useRef();
  const isReady = useRef(false);
  const { duration } = audioRef.current;

  const togglePlaying = (bool: boolean | undefined) => dispatch(togglePlayState(bool));
  const playNext = () => dispatch(setCurrentTrack('increment'));
  const playPrevious = () => dispatch(setCurrentTrack('decrement'));
  const setVolume = (num: number) => { audioRef.current.volume = num; };

  useEffect(() => {
    setCurrentPercentage(
      duration ? `${(trackProgress / duration) * 100}%` : '0%',
    );
    dispatch(updateTrackProgress({ trackProgress, duration }));
  }, [trackProgress]);

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        playNext();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, 1000);
  };

  const onScrub = (value: string) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = Number(value);
    setTrackProgress(audioRef.current.currentTime);
  };

  useEffect(() => {
    setVolume(Number(volume));
  }, [volume]);

  const onScrubEnd = (): void => {
    if (!isPlaying) {
      togglePlaying(true);
    }
    startTimer();
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef, startTimer]);

  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(currentlyPlaying.mediaLink);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [currentlyPlaying]);

  useEffect(() => () => {
    audioRef.current.pause();
    clearInterval(intervalRef.current);
  },
  []);

  return {
    isPlaying,
    currentPercentage,
    trackProgress,
    volume,
    duration,
    onScrub,
    setVolume,
    playNext,
    playPrevious,
    togglePlaying,
    onScrubEnd,
  };
}
export default useAudioPlayer;
