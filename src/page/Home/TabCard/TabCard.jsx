import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const TabCard = ({ data }) => {
  const { Photo, Name, price, ratting, _id } = data || {};
  return (
    <div
      className="card w-96 bg-base-100 shadow-xl"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <figure>
        <img src={Photo} alt="toys" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{Name}</h2>
        <p>Price: {price}TK</p>
        <Rating style={{ maxWidth: 180 }} value={ratting} readOnly />
        <div className="card-actions justify-end">
          <Link to={`/view-details/${_id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TabCard;
