import React from "react";
import { Link } from "react-router-dom";

const MyToysTable = ({ toy, index, handleDelete }) => {
  const { Name, category, price, quantity, seller_name, _id } = toy || {};

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
          <Link to={`/update/${_id}`} className="btn btn-ghost btn-xs">
            Update
          </Link>
        </td>
        <td>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-ghost btn-xs"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default MyToysTable;
