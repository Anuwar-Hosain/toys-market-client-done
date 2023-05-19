import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className="size">
      <h1>Add A Toys</h1>
      <div className="text-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input input-bordered"
            placeholder="Enter your photo URL..."
            {...register("Photo", { required: true })}
          />

          <input
            className="input input-bordered"
            placeholder="Enter your Name..."
            {...register("Name", { required: true })}
          />
          <br />
          <input
            className="input input-bordered"
            value={user?.email}
            {...register("email", { required: true })}
          />

          <input
            className="input input-bordered"
            placeholder="Enter your Name..."
            {...register("Name", { required: true })}
          />
          <br />
          <input
            className="input input-bordered"
            placeholder="Enter your photo URL..."
            {...register("Photo", { required: true })}
          />

          <input
            className="input input-bordered"
            placeholder="Enter your Name..."
            {...register("Name", { required: true })}
          />
          <br />
          <input
            className="input input-bordered"
            placeholder="Enter your photo URL..."
            {...register("Photo", { required: true })}
          />

          <input
            className="input input-bordered"
            placeholder="Enter your Name..."
            {...register("Name", { required: true })}
          />
          <br />

          {errors.exampleRequired && <span>This field is required</span>}
          <input className="btn" type="submit" />
        </form>
      </div>
    </section>
  );
};

export default AddToys;
