import React from "react";

const MyToysTable = ({ toy, index }) => {
  const { Name, category, price, quantity, seller_name, Email } = toy || {};
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
          <label htmlFor="my-modal-3" className="btn btn-ghost btn-xs">
            Update
          </label>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold">
                Congratulations random Internet user!
              </h3>
              <p className="py-4">
                You've been selected for a chance to get one <br /> year of
                subscription to use Wikipedia for free!
              </p>
            </div>
          </div>
        </td>
        <td>
          <button className="btn btn-ghost btn-xs">Delete</button>
        </td>
      </tr>
    </>
  );
};

export default MyToysTable;
