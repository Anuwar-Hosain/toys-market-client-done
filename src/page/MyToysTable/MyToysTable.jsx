import React from "react";

const MyToysTable = ({ toy, index }) => {
  const { Name, category, price, quantity, seller_name, Email } = toy || {};
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{Name}</td>
      <td>{category}</td>
      <td>{seller_name}</td>
      <td>{price} TK</td>
      <td>{quantity}</td>
      <td>
        <button className="btn btn-ghost btn-xs">Update</button>
      </td>
      <td>
        <button className="btn btn-ghost btn-xs">Delete</button>
      </td>
    </tr>
  );
};

export default MyToysTable;
