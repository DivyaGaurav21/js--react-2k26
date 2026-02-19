import React, { useState } from "react";

const data = [
  {
    id: 1,
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces."
  },
  {
    id: 2,
    title: "What is Tailwind?",
    content: "Tailwind is a utility-first CSS framework."
  },
  {
    id: 3,
    title: "What is useState?",
    content: "useState is a React hook used to manage state."
  }
];

const Accordion = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleHandler = (id) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <div className="w-80 mx-auto mt-5">
      {data.map(item => (
        <div key={item.id} className="border mb-2 rounded">

          {/* Header */}
          <div
            className="flex justify-between p-3 cursor-pointer bg-gray-100"
            onClick={() => toggleHandler(item.id)}
          >
            <p>{item.title}</p>
            <span
              className={`transition-transform duration-300 ${
                activeId === item.id ? "rotate-180" : ""
              }`}
            >
              ⌄
            </span>
          </div>

          {/* Content */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeId === item.id ? "max-h-40 p-3" : "max-h-0"
            }`}
          >
            <p>{item.content}</p>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Accordion;