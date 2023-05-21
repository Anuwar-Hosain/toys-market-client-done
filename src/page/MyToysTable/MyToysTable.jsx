import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";

const MyToysTable = ({ toy, index, handleJobUpdate }) => {
  const { Name, category, price, quantity, seller_name } = toy || {};
  const { user } = useContext(AuthContext);
  const [toyData, setToyData] = useState();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    handleJobUpdate(data);
  };
  const handleUpdateId = (toy) => {
    setToyData(toy);
    console.log(toy);
  };
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
          <label
            onClick={() => handleUpdateId(toy)}
            htmlFor="my-modal-3"
            className="btn btn-ghost btn-xs"
          >
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
              <h3 className="text-lg font-bold text-center">Update Toy</h3>
              <div className="flex justify-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex gap-4">
                    <div>
                      <input
                        className="input input-bordered hidden"
                        type="text"
                        defaultValue={toyData?._id}
                        {...register("id", { required: true })}
                      />
                    </div>
                    <div>
                      <p>Toy Name:</p>
                      <input
                        className="input input-bordered"
                        type="text"
                        defaultValue={toyData?.Name}
                        placeholder="Enter Toy name..."
                        {...register("Name", { required: true })}
                      />
                    </div>
                    <div>
                      <p>Price:</p>
                      <input
                        className="input input-bordered"
                        type="number"
                        defaultValue={toyData?.price}
                        placeholder="Enter your price..."
                        {...register("price", { required: true })}
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div>
                      <p>Ratting:</p>
                      <input
                        className="input input-bordered"
                        type="number"
                        defaultValue={toyData?.ratting}
                        placeholder="Enter your category..."
                        {...register("ratting", { required: true })}
                      />
                    </div>
                    <div>
                      <p>Available Quantity:</p>
                      <input
                        className="input input-bordered"
                        type="number"
                        defaultValue={toyData?.quantity}
                        placeholder="Enter your quantity..."
                        {...register("quantity", { required: true })}
                      />
                    </div>
                  </div>

                  <input className="btn" type="submit" />
                </form>
              </div>
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
