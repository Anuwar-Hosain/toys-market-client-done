import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Update = () => {
  const updateData = useLoaderData();
  const { user } = useContext(AuthContext);
  const { Name, Photo, category, description, price, quantity, ratting, _id } =
    updateData;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch(`https://toys-market-server-beta.vercel.app/updateToy/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          alert("Updated");
          return navigate("/my-toys");
        }
        console.log(result);
      });
  };

  return (
    <section className="size">
      <h1>Update</h1>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-4">
            <div>
              <p>Photo URL:</p>
              <input
                className="input input-bordered"
                type="text"
                defaultValue={Photo}
                placeholder="Enter your photo URL..."
                {...register("Photo", { required: true })}
              />
            </div>
            <div>
              <p>Toy Name:</p>
              <input
                className="input input-bordered"
                type="text"
                defaultValue={Name}
                placeholder="Enter Toy name..."
                {...register("Name", { required: true })}
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <p>Email:</p>
              <input
                className="input input-bordered"
                type="email"
                value={user?.email}
                placeholder="Enter your photo URL..."
                {...register("Email", { required: true })}
              />
            </div>
            <div>
              <p>Category:</p>
              <select
                className="input input-bordered"
                defaultValue={category}
                {...register("category")}
              >
                <option value="sports">Sports</option>
                <option value="truck">Truck</option>
                <option value="police">Police</option>
              </select>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <p>Price:</p>
              <input
                className="input input-bordered"
                type="number"
                defaultValue={price}
                placeholder="Enter your price..."
                {...register("price", { required: true })}
              />
            </div>
            <div>
              <p>Ratting:</p>
              <input
                className="input input-bordered"
                type="number"
                defaultValue={ratting}
                placeholder="Enter your category..."
                {...register("ratting", { required: true })}
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <p>Available Quantity:</p>
              <input
                className="input input-bordered"
                type="number"
                defaultValue={quantity}
                placeholder="Enter your quantity..."
                {...register("quantity", { required: true })}
              />
            </div>
            <div>
              <p>Description:</p>
              <input
                className="input input-bordered"
                type="text"
                defaultValue={description}
                placeholder="Enter your category..."
                {...register("description", { required: true })}
              />
            </div>
          </div>

          <input className="btn" type="submit" />
        </form>
      </div>
    </section>
  );
};

export default Update;
