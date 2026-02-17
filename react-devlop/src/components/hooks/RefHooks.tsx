// import React , {useRef} from "react";

// const RefHooks = () => {

//     const inputRef = useRef(null);

//     const submitHandler = (e) => {
//         e.preventDefault();
//         console.log("form Data" , inputRef.current.value)
//     }

//     return (
//         <div>
//            <form onSubmit={submitHandler}>
//              <input
//              type="text"
//              ref={inputRef}
//             />
//             <button type="submit">submit</button>
//             <h2 className="text-red-300">dfgfh</h2>
//            </form>
//         </div>
//     )

// }

// export default RefHooks


// ----------------------

// What is useRef?
// useRef returns a mutable object that persists across renders. Changes to ref don't trigger re-renders.

// import { useRef, useState } from 'react';

// function RefHooks() {
//   const [count, setCount] = useState(0);
//   const countRef = useRef(0);
  
//   const incrementState = () => {
//     setCount(count + 1); // Triggers re-render
//   };
  
//   const incrementRef = () => {
//     countRef.current += 1; // Doesn't trigger re-render
//     console.log('Ref value:', countRef.current);
//   };
  
//   return (
//     <div>
//       <p>State count: {count}</p>
//       <p>Ref count: {countRef.current}</p>
//       <button className='btn' onClick={incrementState}>Increment State</button>
//       <button className='btn' onClick={incrementRef}>Increment Ref</button>
//     </div>
//   );
// }

// export default RefHooks;


// -----------------
// DOM access

// import { useRef, useState } from 'react';
// function RefHooks() {
//   const inputRef = useRef(null);
  
//   const handleFocus = () => {
//     inputRef.current.focus();
//   };
  
//   return (
//     <div>
//       <input ref={inputRef} type="text" />
//       <button onClick={handleFocus}>Focus Input</button>
//     </div>
//   );
// }

// export default RefHooks;


// -----------------------------------

