import React from "react";

const AllToyTable = ({ toy, index }) => {
  const { Name, category, price, quantity, seller_name, Email } = toy;
  return (
    <tr>
      <th>{index}</th>
      <td>{Name}</td>
      <td>{category}</td>
      <td>{seller_name}</td>
      <td>{price} TK</td>
      <td>{quantity}</td>
      <td>
        <button className="btn btn-ghost btn-xs">details</button>
      </td>
    </tr>
  );
};

export default AllToyTable;
