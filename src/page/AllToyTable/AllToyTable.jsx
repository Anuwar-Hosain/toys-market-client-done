import React from "react";
import { Link } from "react-router-dom";

const AllToyTable = ({ toy, index }) => {
  const { Name, category, price, quantity, seller_name, Email, _id } =
    toy || {};
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{Name}</td>
        <td>{category}</td>
        <td>{seller_name}</td>
        <td>{price} TK</td>
        <td>{quantity}</td>
        <td>
          <Link to={`/view-details/${_id}`} className="btn btn-ghost btn-xs">
            details
          </Link>
        </td>
      </tr>
    </>
  );
};

export default AllToyTable;
