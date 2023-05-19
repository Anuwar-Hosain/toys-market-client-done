import React from "react";
import { useLoaderData } from "react-router-dom";
import AllToyTable from "../AllToyTable/AllToyTable";

const AllToys = () => {
  const allToysData = useLoaderData();
  console.log(allToysData);
  return (
    <section className="size">
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
            {allToysData.map((toy, index) => (
              <AllToyTable key={toy._id} toy={toy} index={index}></AllToyTable>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllToys;
