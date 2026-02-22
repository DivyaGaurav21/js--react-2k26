import React, { useEffect, useState } from "react";

let API_URL = "https://dummyjson.com/recipes";

const AutoCompleteSearch = () => {
  const [results, setResults] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [show, setShow] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = async (query) => {
    if(cache[inputVal]){ // for caching same input 
      setResults(cache[inputVal])
      return;
    }
    const response = await fetch(`${API_URL}/search?q=${query}`);
    const result = await response.json();
    setResults(result.recipes);
    setCache(prev => ({...prev, [inputVal] : result.recipes}))
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData(inputVal);
    }, 300);
    return () => clearTimeout(timer);
  }, [inputVal]);

  console.log(results, "aa");

  const inputChangeHandler = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <section>
      <div>
        <input
          type="text"
          className="input"
          placeholder="Search.."
          value={inputVal}
          onChange={inputChangeHandler}
          onFocus={() => setShow(true)}
          onBlur={() => setShow(false)}
        />
      </div>
      <ul className="max-h-100 p-2 overflow-y-scroll rounded-3xl no-scrollbar flex flex-col gap-2">
        {show &&
          results.length > 0 &&
          results.map((item) => (
            <li
              key={item.id}
              className="px-2 py-1 text-start hover:bg-gray-300 cursor-pointer"
            >
              {item.name}
            </li>
          ))}
      </ul>
    </section>
  );
};

export default AutoCompleteSearch;
