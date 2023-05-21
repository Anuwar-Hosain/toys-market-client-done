import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://toys-market-server-beta.vercel.app/post-toy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged == true) {
          navigate("/");
        }
      });

    console.log(data);
  };
  return (
    <section className="size">
      <h1>Add A Toys</h1>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-4">
            <div>
              <p>Photo URL:</p>
              <input
                className="input input-bordered"
                type="text"
                placeholder="Enter your photo URL..."
                {...register("Photo", { required: true })}
              />
            </div>
            <div>
              <p>Toy Name:</p>
              <input
                className="input input-bordered"
                type="text"
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
              <p>Seller Name:</p>
              <input
                className="input input-bordered"
                type="text"
                placeholder="Enter your name..."
                {...register("seller_name", { required: true })}
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <p>Price:</p>
              <input
                className="input input-bordered"
                type="number"
                placeholder="Enter your price..."
                {...register("price", { required: true })}
              />
            </div>
            <div>
              <p>Ratting:</p>
              <input
                className="input input-bordered"
                type="number"
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
                placeholder="Enter your quantity..."
                {...register("quantity", { required: true })}
              />
            </div>
            <div>
              <p>Description:</p>
              <input
                className="input input-bordered"
                type="text"
                placeholder="Enter your category..."
                {...register("description", { required: true })}
              />
            </div>
          </div>
          <div>
            <p>Category:</p>
            <select className="input input-bordered" {...register("category")}>
              <option value="sports">Sports</option>
              <option value="truck">Truck</option>
              <option value="police">Police</option>
            </select>
          </div>

          {errors.exampleRequired && <span>This field is required</span>}
          <input className="btn" type="submit" />
        </form>
      </div>
    </section>
  );
};

export default AddToys;
