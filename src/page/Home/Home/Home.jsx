import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ToyDataTabs from "../ToyDataTabs/ToyDataTabs";
import ModalMyToys from "../../Modal/ModalMyToys";

const Home = () => {
  return (
    <section className="">
      <Banner></Banner>
      <ToyDataTabs></ToyDataTabs>
      <ModalMyToys></ModalMyToys>
      <Gallery></Gallery>
    </section>
  );
};

export default Home;
