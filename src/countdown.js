import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { CountdownContainer, Part, Number, Text } from "./styles";
dayjs.extend(duration);
export const Countdown = ({ targetDate, accent }) => {
    const calculateRemainingTime = (target, now) => {
        const diff = target.diff(now);
        const durationObj = dayjs.duration(diff);
        return {
            days: Math.floor(durationObj.asDays()),
            hours: durationObj.hours(),
            minutes: durationObj.minutes(),
            seconds: durationObj.seconds(),
        };
    };
    const [remainingTime, setRemainingTime] = useState(calculateRemainingTime(dayjs(targetDate), dayjs()));
    useEffect(() => {
        const countdownInterval = setInterval(() => {
            const now = dayjs();
            const target = dayjs(targetDate);
            if (now.isAfter(target)) {
                clearInterval(countdownInterval);
            }
            else {
                setRemainingTime(calculateRemainingTime(target, now));
            }
        }, 1000);
        return () => clearInterval(countdownInterval); // Clean up the interval on component unmount
    }, [targetDate]);
    return (React.createElement(CountdownContainer, null,
        React.createElement(Part, null,
            React.createElement(Number, { accent: accent }, remainingTime.days),
            React.createElement(Text, null, "Days")),
        React.createElement(Part, null,
            React.createElement(Number, { accent: accent }, remainingTime.hours),
            React.createElement(Text, null, "Hours"))));
};
