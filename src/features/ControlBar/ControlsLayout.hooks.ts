import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { togglePlayState, setCurrentTrack } from "slices/audioContextSlice";
export function useAudioPlayer() {
  const dispatch = useDispatch();
  const { isPlaying, currentlyPlaying } = useSelector(
    (state: any) => state.audio
  );
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [currentPercentage, setCurrentPercentage] = useState("");
  // Destructure for conciseness

  // Refs
  const audioRef = useRef(new Audio(currentlyPlaying.mediaLink));

  let { ended, currentTime, play, pause, volume } = audioRef.current;
  console.log(audioRef);
  const intervalRef: any = useRef();
  const isReady = useRef(false);

  // Destructure for conciseness
  const { duration } = audioRef.current;
  // console.log(duration)

  useEffect(() => {
    setCurrentPercentage(
      duration ? `${(trackProgress / duration) * 100}%` : "0%"
    );
    console.log(currentPercentage);
  }, [trackProgress]);

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        playNext();
      } else {
        setTrackProgress(currentTime);
      }
    }, 500);
  };

  const togglePlaying = (bool: boolean | undefined) =>
    dispatch(togglePlayState(bool));
  const playNext = () => dispatch(setCurrentTrack("increment"));
  const playPrevious = () => dispatch(setCurrentTrack("decrement"));
  const setVolume = (num: number) => (audioRef.current.volume = num);

  const onScrub = (value: any) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    currentTime = value;
    setTrackProgress(currentTime);
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

  // Handles cleanup and setup when changing tracks
  //   useEffect(() => {
  //     pause();

  //     audioRef.current = new Audio(audioSrc);
  //     setTrackProgress(currentTime);

  //     if (isReady.current) {
  //       play();
  //       startTimer();
  //     } else {
  //       // Set the isReady ref as true for the next pass
  //       isReady.current = true;
  //     }
  //   }, [trackIndex]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return {
    isPlaying,
    progress: {percentage: currentPercentage, trackProgress},
    volume,
    setVolume,
    playNext,
    playPrevious,
    togglePlaying,
    currentPercentage,
  };
}
