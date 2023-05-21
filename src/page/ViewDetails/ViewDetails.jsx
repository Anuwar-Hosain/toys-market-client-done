import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const viewData = useLoaderData();
  const {} = viewData;
  console.log(viewData);
  return (
    <section className="size">
      <h1>view details</h1>
    </section>
  );
};

export default ViewDetails;
