// import React, { useState } from "react";

// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";

// const Tabs = () => {
//     const [tab, setTab] = useState("home");



//     return <div>
//         <div className="flex flex-row gap-2 pb-2 border-b-2 border-amber-300">
//             <button className="btn" onClick={() => setTab('home')}>Home</button>
//             <button className="btn" onClick={() => setTab('about')}>About</button>
//             <button className="btn" onClick={() => setTab('contact')}>Contact</button>
//         </div>
//         {tab == "home" && <Home />}
//         {tab == "about" && <About />}
//         {tab == "contact" && <Contact />}
//     </div>;
// };

// export default Tabs;


// ---------------

import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const Tabs = () => {
  const tabs = [
    { label: "Home", value: "home", component: <Home /> },
    { label: "About", value: "about", component: <About /> },
    { label: "Contact", value: "contact", component: <Contact /> },
  ];

  const [activeTab, setActiveTab] = useState("home");

  return (
    <div>
      <div className="flex gap-2 border-b pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={`px-4 py-2 rounded ${
              activeTab === tab.value
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {tabs.find((tab) => tab.value === activeTab)?.component}
      </div>
    </div>
  );
};

export default Tabs;

