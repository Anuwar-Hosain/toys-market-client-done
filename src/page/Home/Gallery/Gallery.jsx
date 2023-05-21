import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Gallery = () => {
  return (
    <section className="size ">
      <div className="my-16">
        <h1 className="text-center text-6xl font-bold my-5 ">
          My Toys Collections
        </h1>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
          <div data-aos="zoom-in" data-aos-duration="1000">
            <img
              className="w-96 h-96 object-cover cursor-pointer hover:rotate-180 transition-all duration-500	"
              src="https://c8.alamy.com/comp/HTPJD8/little-mclaren-p1tm-electric-car-for-kids-battery-powered-toy-supercar-HTPJD8.jpg"
              alt="img"
            />
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000">
            <img
              className="w-96 h-96 object-cover cursor-pointer	hover:rotate-180 transition-all duration-500"
              src="https://images.thdstatic.com/productImages/b3b51cf2-2591-47ed-9909-badee8be4e52/svn/blacks-tobbi-kid-cars-th17t0638-64_600.jpg"
              alt="img"
            />
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000">
            <img
              className="w-96 h-96 object-cover cursor-pointer	hover:rotate-180 transition-all duration-500"
              src="https://di2ponv0v5otw.cloudfront.net/posts/2022/03/05/6223f5a3941f1727c55d2def/s_6223f5cc67bd9162ec18c0f7.jpg"
              alt="img"
            />
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000">
            <img
              className="w-96 h-96 object-fill	cursor-pointer hover:rotate-180 transition-all duration-500"
              src="https://media.4rgos.it/i/Argos/1998719_R_Z001A?w=750&h=440&qlt=70"
              alt="img"
            />
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000">
            <img
              className="w-96 h-96 object-cover	cursor-pointer hover:rotate-180 transition-all duration-500"
              src="https://i.pinimg.com/originals/63/31/8e/63318e51ce9fffa24a72c677f84fc521.jpg"
              alt="img"
            />
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000">
            <img
              className="w-96 h-96 object-cover	cursor-pointer hover:rotate-180 transition-all duration-500"
              src="https://images.unsplash.com/photo-1570619367330-f794786ab176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
              alt="img"
            />
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000">
            <img
              className="w-96 h-96 object-cover	cursor-pointer hover:rotate-180 transition-all duration-500"
              src="https://images.unsplash.com/photo-1609395464110-7116592351c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="img"
            />
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000">
            <img
              className="w-96 h-96 object-cover cursor-pointer	hover:rotate-180 transition-all duration-500"
              src="https://images.thdstatic.com/productImages/b3b51cf2-2591-47ed-9909-badee8be4e52/svn/blacks-tobbi-kid-cars-th17t0638-64_600.jpg"
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
