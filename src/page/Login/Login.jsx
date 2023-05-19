import React from "react";
import { Link } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";

const Login = () => {
  return (
    <section className="size">
      <div className="hero min-h-[90vh] font">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary mainColor ">Login</button>
            </div>
            <div className="text-center flex flex-col items-center justify-center">
              <p>Or Sign In with</p>
              <div className="bg-slate-300 p-2 w-8 h-8 rounded-full text-center cursor-pointer">
                <BsGoogle></BsGoogle>
              </div>
            </div>
            <div className="">
              Have an account?
              <Link to="/register" className="ml-2 mainColor">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
