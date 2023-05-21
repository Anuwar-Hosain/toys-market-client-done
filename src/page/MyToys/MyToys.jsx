import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysTable from "../MyToysTable/MyToysTable";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [control, setControl] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/my-toys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user, control]);

  const handleSearch = () => {
    fetch(`http://localhost:5000/my-toys-get/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyToys(data);
      });
  };

  const handleJobUpdate = (data) => {
    console.log(data);
    fetch(`http://localhost:5000/updateToy/${data.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          setControl(!control);
        }
        console.log(result);
      });
  };
  return (
    <section className="size">
      <h1>MyToys</h1>
      <div className="form-control">
        <div className="input-group">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search…"
            required
            className="input input-bordered"
          />
          <button onClick={handleSearch} className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Category</th>
              <th>Seller Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Edit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy, index) => (
              <MyToysTable
                key={toy._id}
                toy={toy}
                index={index}
                handleJobUpdate={handleJobUpdate}
              ></MyToysTable>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyToys;
