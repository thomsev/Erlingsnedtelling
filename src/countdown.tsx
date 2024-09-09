import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { CountdownContainer, Part, Number, Text } from "./styles";

dayjs.extend(duration);

interface RemainingTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  targetDate: string;
  accent: string;
}

export const Countdown: React.FC<CountdownProps> = ({ targetDate, accent }) => {
  const calculateRemainingTime = (
    target: dayjs.Dayjs,
    now: dayjs.Dayjs
  ): RemainingTime => {
    const diff = target.diff(now);
    const durationObj = dayjs.duration(diff);

    return {
      days: Math.floor(durationObj.asDays()),
      hours: durationObj.hours(),
      minutes: durationObj.minutes(),
      seconds: durationObj.seconds(),
    };
  };

  const [remainingTime, setRemainingTime] = useState<RemainingTime>(
    calculateRemainingTime(dayjs(targetDate), dayjs())
  );

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const now = dayjs();
      const target = dayjs(targetDate);
      if (now.isAfter(target)) {
        clearInterval(countdownInterval);
      } else {
        setRemainingTime(calculateRemainingTime(target, now));
      }
    }, 1000);

    return () => clearInterval(countdownInterval); // Clean up the interval on component unmount
  }, [targetDate]);

  return (
    <CountdownContainer>
      <Part>
        <Number accent={accent}>{remainingTime.days}</Number>
        <Text>Dager</Text>
      </Part>
      <Part>
        <Number accent={accent}>{remainingTime.hours}</Number>
        <Text>Timer</Text>
      </Part>
    </CountdownContainer>
  );
};
