import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ToyDataTabs from "../ToyDataTabs/ToyDataTabs";
import ShopCards from "../ShopCards/ShopCards";
import HomeCard from "../HomeCard/HomeCard";

const Home = () => {
  return (
    <section className="">
      <Banner></Banner>
      <ShopCards></ShopCards>
      <ToyDataTabs></ToyDataTabs>
      <Gallery></Gallery>
      <HomeCard></HomeCard>
    </section>
  );
};

export default Home;
