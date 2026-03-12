import { useState, useEffect } from "react";

const CountdownTimer = ({ initialTime = 12 }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const reset = () => {
    setIsRunning(false);
    setTimeLeft(initialTime);
  };

  return (
    <div>
      <h1>{timeLeft}</h1>
      <button
        onClick={() => setIsRunning(true)}
        disabled={isRunning || timeLeft === 0}
      >
        Start
      </button>
      <button onClick={() => setIsRunning(false)} disabled={!isRunning}>
        Pause
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CountdownTimer;
