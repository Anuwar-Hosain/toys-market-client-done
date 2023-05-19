import React from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const TabCard = ({ data }) => {
  const { Photo, Name, price, ratting } = data || {};
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={Photo} alt="toys" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{Name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <p>Price: {price}TK</p>
        <Rating style={{ maxWidth: 180 }} value={ratting} readOnly />
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default TabCard;
