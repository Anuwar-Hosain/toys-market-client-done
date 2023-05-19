import React from "react";
import Header from "../page/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../page/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
