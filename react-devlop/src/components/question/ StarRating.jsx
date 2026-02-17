// CREATE STAR RATING COMPONENT

import React, { useState } from "react";

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);

  const renderStar = () => {
    let stars = [];
    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <button
          key={i}
          className={`text-9xl ${rating >= i ? "text-yellow-400" : "text-gray-400"}`}
          onClick={() => setRating(i)}
        >*
        </button>
      )
    }
    return stars;
  }

  return <div>
    <p>Rating this Products</p>
    {renderStar()}
    <p> {rating > 0 ? `you have rated ${rating} / ${totalStars}` : "please rate"}</p>
    <p>{rating > 2 ? "good quality" : "poor quality"}</p>
  </div>;
};

export default StarRating;

// ------------------- Approach 2 -----------------------------

// import React, { useState } from "react";

// const  StarRating = ({totalStars = 5}) => {
//   const [rating , setRating] = useState(0);

//   // const arr = Array.from({length : totalStars})
//   // console.log(arr)
//  let x = [...Array(10)]
//  console.log(x , "sas")

//   return <div> 
//     <p>rate this product</p>
//     <div>
//       {Array.from({length : totalStars}).map((_ , i) => {
//         let starClick = i+1;
//         return (
//           <button
//             key={starClick}
//             className={`text-9xl ${starClick <= rating ? "text-yellow-500" : "text-gray-400"}`}
//             onClick={() => setRating(starClick) }
//           >*</button>
//         )
//       })}
//     </div>
//   </div>;
// };

// export default  StarRating;


















