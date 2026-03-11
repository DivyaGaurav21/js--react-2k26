// CREATE STAR RATING COMPONENT
// NOTE: Array.from({length:totalStars}) , [...Array(totalStars)] both are same

import React, { useState } from "react";

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <h1>Star Rating</h1>
      <div>
        {[...Array(totalStars)].map((_, i) => (
          <button
            key={i}
            onClick={() => setRating(i+1)}
            className={`text-9xl ${i < rating ? "text-yellow-500" : ""}`}
          >
            *
          </button>
        ))}
      </div>
      <div>
        <p>you have rated {rating}/{totalStars} of this product</p>
        <p>{rating > 3 && "Excellant product"}</p>
      </div>
    </div>
  );
};

export default StarRating;
