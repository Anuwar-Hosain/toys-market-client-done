import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const viewData = useLoaderData();
  const {
    Name,
    Photo,
    category,
    description,
    price,
    quantity,
    ratting,
    seller_name,
    Email,
  } = viewData;
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
            <p>Quantity: {quantity} pice</p>
            <p>Email: {Email}</p>
            <p>Seller-Name: {seller_name}</p>
          </div>
          <div className="">
            <p>Ratting: </p>
            <Rating style={{ maxWidth: 140 }} value={ratting} readOnly />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewDetails;
