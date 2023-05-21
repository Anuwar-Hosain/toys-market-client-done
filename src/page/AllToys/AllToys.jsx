import React, { useEffect, useState } from "react";
import AllToyTable from "../AllToyTable/AllToyTable";

const AllToys = () => {
  const [toysDat, setToysData] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/all-toys")
      .then((res) => res.json())
      .then((data) => {
        setToysData(data);
      });
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:5000/my-toys-get/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setToysData(data);
      });
  };
  return (
    <section className="size">
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
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Category</th>
              <th>Seller Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>BTN</th>
            </tr>
          </thead>
          <tbody>
            {toysDat.map((toy, index) => (
              <AllToyTable key={toy._id} toy={toy} index={index}></AllToyTable>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllToys;
