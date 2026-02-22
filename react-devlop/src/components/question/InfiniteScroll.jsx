import React, { useEffect, useState } from "react";

const API_URL = "https://dummyjson.com/recipes";

const InfiniteScroll = () => {
  const [recepis, setRecepies] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchRecepies = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}?limit=10&&skip=${10 * page}`);
      const results = await res.json();
      setRecepies((prev) => [...prev, ...results.recipes]);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(recepis, "aaa");

  useEffect(() => {
    fetchRecepies();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
      !loading
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  return (
    <div>
      <div className="flex flex-col gap-2">
        {recepis.length > 0 &&
          recepis.map((item) => (
            <div key={item.id} className="border rounded-xl p-4 shadow">
              {" "}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-lg"
              />{" "}
              <h2 className="font-bold mt-2">{item.name}</h2>{" "}
            </div>
          ))}
        {loading && "LOADING..."}
      </div>
    </div>
  );
};

export default InfiniteScroll;
