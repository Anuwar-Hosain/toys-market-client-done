import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const viewData = useLoaderData();
  const { Name, Photo, category, description, price, quantity, ratting } =
    viewData;
  console.log(viewData);
  return (
    <section className="size">
      <div className="card lg:card-side bg-base-100 shadow-xl my-10">
        <figure>
          <img src={Photo} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{Name}</h2>
          <p>{description}</p>
          <div className="flex">
            <p>Price: {price} TK</p>
            <p>Category: {category}</p>
          </div>
          <Rating style={{ maxWidth: 180 }} value={ratting} readOnly />
        </div>
      </div>
    </section>
  );
};

export default ViewDetails;
