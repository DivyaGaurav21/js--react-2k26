//make accordion simple first

import React, { useState } from "react";

const data = [
  {
    id: 1,
    title: "Introduction to React",
    content:
      "React is a popular JavaScript library used for building user interfaces.",
  },
  {
    id: 2,
    title: "Understanding Components",
    content:
      "Components are reusable pieces of UI that help structure a React application.",
  },
  {
    id: 3,
    title: "State and Props",
    content:
      "State manages dynamic data within components while props pass data between them.",
  },
  {
    id: 4,
    title: "Using Tailwind CSS",
    content:
      "Tailwind CSS is a utility-first CSS framework for quickly styling modern interfaces.",
  },
  {
    id: 5,
    title: "React Hooks",
    content:
      "Hooks like useState and useEffect allow functional components to use state and lifecycle features.",
  },
];

const Accordion = () => {
  const [activeId, setActiveId] = useState(null);

  //for clicking same div again
  const clickHandler = (Id) => {
      setActiveId(activeId === Id ? "null" : Id);
  }


  return (
    <div className="w-full">
      <ul className="flex flex-col gap-2">
        {data.map((item) => (
          <li key={item.id} className="border border-black">
            <div
             className="flex flex-row justify-between p-2 bg-gray-400"
             onClick={() => clickHandler(item.id)}
             >
              <span>{item.title}</span>
              <span>{item.id == activeId ?"▼" : "▲"} </span>
            </div>
            {item.id === activeId && <p className="p-2">{item.content}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;

// ---------------------------------
// import React, { useState } from "react";

// const data = [
//   {
//     id: 1,
//     title: "What is React?",
//     content: "React is a JavaScript library for building user interfaces."
//   },
//   {
//     id: 2,
//     title: "What is Tailwind?",
//     content: "Tailwind is a utility-first CSS framework."
//   },
//   {
//     id: 3,
//     title: "What is useState?",
//     content: "useState is a React hook used to manage state."
//   }
// ];

// const Accordion = () => {
//   const [activeId, setActiveId] = useState(null);

//   const toggleHandler = (id) => {
//     setActiveId(prev => (prev === id ? null : id));
//   };

//   return (
//     <div className="w-80 mx-auto mt-5">
//       {data.map(item => (
//         <div key={item.id} className="border mb-2 rounded">

//           {/* Header */}
//           <div
//             className="flex justify-between p-3 cursor-pointer bg-gray-100"
//             onClick={() => toggleHandler(item.id)}
//           >
//             <p>{item.title}</p>
//             <span
//               className={`transition-transform duration-300 ${
//                 activeId === item.id ? "rotate-180" : ""
//               }`}
//             >
//               ⌄
//             </span>
//           </div>

//           {/* Content */}
//           <div
//             className={`overflow-hidden transition-all duration-300 ${
//               activeId === item.id ? "max-h-40 p-3" : "max-h-0"
//             }`}
//           >
//             <p>{item.content}</p>
//           </div>

//         </div>
//       ))}
//     </div>
//   );
// };

// export default Accordion;
