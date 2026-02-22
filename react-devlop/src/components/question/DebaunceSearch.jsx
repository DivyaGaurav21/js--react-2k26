import React, { useEffect, useState } from "react";

const API_URL = "https://dummyjson.com/products/search";

const DebaunceSearch = () => {
  let [product, setProduct] = useState([]);
  let [input, setInput] = useState("");
  let [cache, setCatch] = useState({});

  const fetchData = async (query) => {
    if(cache[input]){
        setProduct(cache[input])
        return;
    }
    let res = await fetch(`${API_URL}?q=${query}`);
    let result = await res.json();
    setProduct(result.products);
    setCatch(prev => ({...prev , [input] : result.products}))
  };

  useEffect(() => {
    let timer = setTimeout(() =>  fetchData(input) , 600);
    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div>
      <input
        type="text"
        className="input mb-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="flex flex-col gap-2">
        {product.map((item) => (
          <div
            key={item.id}
            className="flex flex-row justify-between p-2 border border-black"
          >
            <p>{item.title}</p>
            <p>{item.brand}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DebaunceSearch;
