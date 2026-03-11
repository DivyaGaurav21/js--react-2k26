// import { useRef } from "react";
// export default function RefHooks() {
//   const inputRef = useRef(null);
//   console.log(inputRef);
//   const focusHadler = () => {
//     inputRef.current.focus();
//   };
//   return (
//     <div>
//       <h1>Ref Hooks</h1>
//       <input ref={inputRef} />
//       <button onClick={focusHadler}>Focus</button>
//     </div>
//   );
// }

// -----------------------------------------
// keep track of previous state / remain same value during re-render

// import { useEffect, useRef, useState } from "react";
// export default function RefHooks() {
//   const [count, setCOunt] = useState(0);
//   const prevCountRef = useRef(null);
//   useEffect(() => {
//     prevCountRef.current = count;
//   });
//   return (
//     <div>
//       <h1>Count : {count}</h1>
//       <p>Before : {prevCountRef.current}</p>
//       <button onClick={() => setCOunt((prev) => prev + 1)}>increment</button>
//     </div>
//   );
// }

// ----------------------------------------------
//Create stopwatch by using useRef

import { useRef, useState } from "react";
export default function RefHooks() {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setCount((curr) => curr + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    setCount(0);
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  return (
    <div>
      <p>Stopwatch : {count}</p>
      <button onClick={startTimer}>start</button>
      <button onClick={stopTimer}>stop</button>
      <button onClick={resetTimer}>reset</button>
    </div>
  );
}

// ---------------------------
