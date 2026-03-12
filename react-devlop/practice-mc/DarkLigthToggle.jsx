import { useEffect, useState } from "react";

function DarkLigthToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <h1>myself divya gaurav</h1>
      <h2>explore something new</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        toggle
      </button>
    </div>
  );
}

export default DarkLigthToggle;

// .dark {
//   background-color: black;
//   color: white;
// }
// .light {
//   background-color: white;
//   color: black;
// }