import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="navbar bg-base-100 size font1">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">Parent</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link to="/" className="text-2xl font2 mainColor2">
            <samp className="mainColor">anu</samp>Toys
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/all-toys">All Toys</Link>
            </li>
            {user ? (
              <>
                {" "}
                <li>
                  <Link to="/">My Toys</Link>
                </li>
                <li>
                  <Link to="/add-toys">Add A Toys</Link>
                </li>{" "}
              </>
            ) : (
              <></>
            )}
            <li>
              <Link to="/">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div>
            {user ? (
              <label className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/800px-Pierre-Person.jpg" />
                </div>
              </label>
            ) : (
              ""
            )}
          </div>
          <div>
            {user ? (
              <Link to="/" onClick={handleLogOut} className="btn">
                LogOut
              </Link>
            ) : (
              <Link to="/login" className="btn">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
