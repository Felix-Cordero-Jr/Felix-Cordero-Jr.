import React, { useEffect, useState } from 'react';

type TimeDisplayProps = {
  timeZone: string;
  locale?: string;
  cityName: string; // Added prop for the city name
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = 'GMT', cityName }) => {
  const [currentTime, setCurrentTime] = useState<string>('Loading...');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
          timeZone: 'Asia/Manila',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true, // 12-hour format
        };
        setCurrentTime(new Intl.DateTimeFormat(locale, options).format(now));
      } catch (error) {
        console.error('Invalid timeZone:', error);
        setCurrentTime('Invalid TimeZone');
      }
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000); // Update every second
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [timeZone, locale]);

  return (
    <span className="text-white">
      {cityName} | {currentTime}
    </span>
  );
};

export default TimeDisplay;
