// import React, { useEffect, useState } from "react";

// const CountdownTimer = () => {
//   let [count, setCount] = useState(10);
//   const [start, setStart] = useState(false);

//   useEffect(() => {
//     let timer;
//     if (start && count > 0) {
//       timer = setTimeout(() => {
//         setCount((count) => count - 1);
//       }, 1000);

//       if (count === 0) {
//         setStart(false);
//       }
//     }
//     return () => clearTimeout(timer)
//   }, [count, start]);

//   return (
//     <div>
//       <p>{count}</p>
//       <button className="btn" onClick={() => setStart(true)}>
//         start
//       </button>
//     </div>
//   );
// };

// export default CountdownTimer;

// -------------------------

import { useState, useEffect, useRef } from "react";

const CountdownTimer = ({ initialTime = 60 }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(intervalRef.current); // cleanup
  }, [isRunning, timeLeft]);

  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setTimeLeft(initialTime);
  };

  return (
    <div>
      <h1>{timeLeft}</h1>
      <button
        onClick={start}
        className="btn"
        disabled={isRunning || timeLeft === 0}
      >
        Start
      </button>
      <button onClick={pause} className="btn" disabled={!isRunning}>
        Pause
      </button>
      <button onClick={reset} className="btn">
        Reset
      </button>
    </div>
  );
};

export default CountdownTimer;
