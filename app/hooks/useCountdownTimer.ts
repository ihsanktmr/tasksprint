import { useEffect, useRef, useState } from "react";

import { triggerMediumFeedback } from "app/utils/haptics";

interface TimerState {
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

const useCountdownTimer = (initialMinutes: number, onEnd: () => void) => {
  const [time, setTime] = useState<TimerState>(() => {
    const hours = Math.floor(initialMinutes / 60);
    const minutes = initialMinutes % 60;
    return { hours, minutes, seconds: 0, milliseconds: 0 };
  });
  const [isPlaying, setIsPlaying] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) return; // Prevent multiple timers
    setIsPlaying(true);

    timerRef.current = setInterval(() => {
      setTime((prevTime) => {
        const { hours, minutes, seconds, milliseconds } = prevTime;

        let newMilliseconds = milliseconds - 10;
        let newSeconds = seconds;
        let newMinutes = minutes;
        let newHours = hours;

        if (newMilliseconds < 0) {
          newMilliseconds = 990;
          newSeconds -= 1;
        }

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        if (newHours < 0) {
          pauseTimer();
          triggerMediumFeedback();
          if (onEnd) onEnd(); // Trigger the onEnd callback

          return { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 };
        }

        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
          milliseconds: newMilliseconds,
        };
      });
    }, 10); // Update every 10ms
  };

  const pauseTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setIsPlaying(false);
    }
  };

  const resetTimer = (newMinutes: number) => {
    pauseTimer();
    const hours = Math.floor(newMinutes / 60);
    const minutes = newMinutes % 60;
    setTime({ hours, minutes, seconds: 0, milliseconds: 0 });
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return {
    time,
    isPlaying,
    startTimer,
    pauseTimer,
    resetTimer,
  };
};

export default useCountdownTimer;
