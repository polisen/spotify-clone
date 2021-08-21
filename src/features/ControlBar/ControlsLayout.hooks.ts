import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { togglePlayState, setCurrentTrack, updateTrackProgress } from "slices/audioContextSlice";
export function useAudioPlayer() {
  const dispatch = useDispatch();
  const { isPlaying, currentlyPlaying } = useSelector(
    (state: any) => state.audio
  );
  const [trackProgress, setTrackProgress] = useState(0);
  const [currentPercentage, setCurrentPercentage] = useState("");
  // Destructure for conciseness

  // Refs
  const audioRef = useRef(new Audio(currentlyPlaying.mediaLink));

  let { ended, currentTime, play, pause, volume } = audioRef.current;
  const intervalRef: any = useRef();
  const isReady = useRef(false);

  // Destructure for conciseness
  const { duration } = audioRef.current;

  useEffect(() => {
    setCurrentPercentage(
      duration ? `${(trackProgress / duration) * 100}%` : "0%"
    );
      dispatch(updateTrackProgress({trackProgress, duration}))
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

  const togglePlaying = (bool: boolean | undefined) =>
    dispatch(togglePlayState(bool));
  const playNext = () => dispatch(setCurrentTrack("increment"));
  const playPrevious = () => dispatch(setCurrentTrack("decrement"));
  const setVolume = (num: number) => (audioRef.current.volume = num);

  const onScrub = (value: any) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

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
  }, [isPlaying]);

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

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

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
