import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { togglePlayState, setCurrentTrack, updateTrackProgress } from 'slices/audioContextSlice';

function useAudioPlayer() {
  const dispatch = useDispatch();
  const { isPlaying, currentlyPlaying, volume } = useSelector(
    (state: any) => state.audio,
  );
  const [trackProgress, setTrackProgress] = useState(0);
  const [currentPercentage, setCurrentPercentage] = useState('');
  const audioRef = useRef(new Audio(currentlyPlaying.mediaLink));
  const intervalRef: any = useRef();
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

  const onScrub = (value: any) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  useEffect(() => {
    setVolume(Number(volume));
  }, [volume]);

  const onScrubEnd = () => {
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
