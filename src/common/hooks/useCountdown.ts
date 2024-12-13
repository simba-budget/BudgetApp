import { getRemainingSeconds } from '@utils/date';
import { useEffect, useState } from 'react';

const useCountdown = (date: string) => {
  const [value, setValue] = useState<number>(getRemainingSeconds(date));

  useEffect(() => {
    setValue(getRemainingSeconds(date));
  }, [date]);

  useEffect(() => {
    if (!date) return;

    const intervalId = setInterval(() => {
      const newValue = getRemainingSeconds(date);
      if (newValue <= 0) clearInterval(intervalId);
      setValue(newValue);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [date]);

  return value;
};

export default useCountdown;
