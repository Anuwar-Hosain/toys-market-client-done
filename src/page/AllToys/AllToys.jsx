import React from "react";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const allToysData = useLoaderData();
  console.log(allToysData);
  return (
    <section className="size">
      <h1>All toys</h1>
    </section>
  );
};

export default AllToys;
