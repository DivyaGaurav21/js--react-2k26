// import React, { useEffect, useState } from "react";

// const Post = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   const fetchPosts = async () => {
//     try {
//       setLoading(true);
//       setError(false);

//       const res = await fetch("http://localhost:4000/posts");

//       if (!res.ok) {
//         throw new Error("Failed to fetch posts");
//       }

//       const data = await res.json();
//       setPosts(data);
//     } catch (err) {
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error fetching posts!</p>;
//   }

//   return (
//     <div>
//       <h3>Posts</h3>
//       {posts.map((item) => (
//         <p key={item.id}>{item.title}</p>
//       ))}
//     </div>
//   );
// };

// export default Post;

// -----------

import React from "react";
import { useQuery } from '@tanstack/react-query'
import axios from "axios";
import { Link } from "react-router-dom";


const Post = () => {

    // const {
    //     isLoading,
    //     isError,
    //     data,
    //     error
    // } = useQuery({
    //     queryKey: ["posts"], // unique key
    //     queryFn: async () => {
    //         const res = await fetch("http://localhost:4000/posts");
    //         if (!res.ok) {
    //             throw new Error("Failed to fetch posts");
    //         }
    //         return res.json(); // ✅ IMPORTAN
    //     }   // function return promise
    // })

    //by axios

     const {
        isLoading,
        isError,
        data,
        error,
        isFetching, 
        refetch
    } = useQuery({
        queryKey: ["posts"], // unique key
        queryFn: async () => {
            return axios.get("http://localhost:4000/posts"); // // ✅ Axios already parses JSON
        } ,
        enabled : false
        // function return promise
    })


    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error fetching posts! {error.message}</p>;
    }

    return (
        <div>
            <p className="text-3xl text-red-400 font-bold"> RQ /tanstack</p>
              <button onClick={refetch}>fetch data</button>
            {data &&  data.data.map((item) => (
                <Link to={`/post/${item.id}`}>
                <button key={item.id} className="m-2">{item.title}</button>
                </Link>
            ))}
          
        </div>
    )
}

export default Post;