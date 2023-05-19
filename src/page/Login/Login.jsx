import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, googleSingIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handleGoogleSingIn = () => {
    googleSingIn()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section className="size">
      <div className="hero min-h-[90vh] font">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
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
                name="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary mainColor ">Login</button>
            </div>
            <div className="text-center flex flex-col items-center justify-center">
              <p>Or Sign In with</p>
              <div
                onClick={handleGoogleSingIn}
                className="bg-slate-300 p-2 w-8 h-8 rounded-full text-center cursor-pointer"
              >
                <BsGoogle></BsGoogle>
              </div>
            </div>
            <div className="">
              Have an account?
              <Link to="/register" className="ml-2 mainColor">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
