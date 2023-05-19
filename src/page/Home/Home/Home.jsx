import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ToyDataTabs from "../ToyDataTabs/ToyDataTabs";

const Home = () => {
  return (
    <section className="">
      <Banner></Banner>
      <ToyDataTabs></ToyDataTabs>
      <Gallery></Gallery>
    </section>
  );
};

export default Home;
