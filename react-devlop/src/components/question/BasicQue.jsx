// //Q1 .  CREATE A COMPONENT WITH THREE BUTTON THAT CHANGES BACKGROUND


//THIS is not working because - ailwind does support dynamic classes, but class names must 
// exist as complete strings in the source code. Template literal concatenation like bg-${color}-500
//  does not work because Tailwind uses static analysis.
// import React, { useState } from "react";
// const BasicQue = () => {
//   const [color, setColor] = useState("white");
//   let finalClass =  `w-100 h-100 border-2 border-black bg-${color}-500`
//   return <div 
//   className={finalClass}
//   >
//     <button className="btn" onClick={() => setColor("red")}>Red</button>
//     <button className="btn" onClick={() => setColor("green")}>green</button>
//     <button className="btn" onClick={() => setColor("yellow")}>yellow</button>
//   </div>;
// };
// export default BasicQue;

// BEST SOLUTION
// import React, { useState } from "react";

// const BasicQue = () => {
//   const [color, setColor] = useState("white");
//   return <div
//     className= "w-100 h-100 border-2 border-black"
//     style={{backgroundColor : color}}
//   >
//     <button className="btn" onClick={() => setColor("red")}>Red</button>
//     <button className="btn" onClick={() => setColor("green")}>green</button>
//     <button className="btn" onClick={() => setColor("yellow")}>yellow</button>
//   </div>;
// };

// export default BasicQue;

//Q2 . BUILD A SIMPLE COUNTER WITH RESET FUNCTANALITY
// import React, { useState } from "react";
// const BasicQue = () => {
// const [count , setCount] = useState(0);
//       return (
//         <h1>
//              <span>{count}</span>
//             <button onClick={() => setCount((count) => count + 1 )}>Increment</button>
//             <button onClick={() => setCount((count) => count - 1 )}>Decrement</button>
//             <button onClick={() => setCount(0)}>Reset</button>

//         </h1>
//       )
// }
// export default BasicQue;
// --------------------------------------------------
// // Q3 . Toggle TEXT ?
// import React, { useState } from "react";
// const BasicQue = () => {
//     const [show , isShow] = useState(true)
//   return <div>
//     <h1>Toggle</h1>
//     {show && <p>Toggle Text</p>}
//     <button onClick={() => isShow(show => !show)}>{show ? "hide" : "show"}</button>
//   </div>;
// };

// export default BasicQue;
// ------------------------------------------------

// // Q4 . due to batch update react , react bind up multiple state and reflect changes on UI 
// import React, { useState } from "react";
// const BasicQue = () => {
//   const [count, setCount] = useState(1)
//   function counterInc() {
//   setCount(prev => prev + 1);
//   setCount(prev => prev + 1);
//   setCount(prev => prev + 1);
//   setCount(prev => prev + 1);
// }
//   return <div>
//     <p>{count}</p>
//     <button className="btn" onClick={counterInc}>increment</button>
//   </div>;
// };

// export default BasicQue;

// ---------------------




