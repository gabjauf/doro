import React, { useEffect, useState } from 'react';

export default function Timer() {
  const defaultTime = 1800;
  const [seconds, setSeconds] = useState(defaultTime);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(defaultTime);
    setIsActive(false);
  }

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((s) => s - 1);
      }, 1000);
    } else if (!isActive && seconds === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);
  return (
    <div>
      timer
      <h2>{seconds}</h2>
      <button onClick={toggle} type="button">
        Start timer
      </button>
    </div>
  );
}
