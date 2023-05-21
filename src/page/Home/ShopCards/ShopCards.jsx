import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const ShopCards = () => {
  return (
    <section className="size">
      <div className="lg:flex justify-center gap-4 py-28">
        <div
          className="card w-80 bg-cyan-300-100 shadow-xl image-full mb-4 "
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <figure>
            <img
              src="https://media.4rgos.it/i/Argos/1998719_R_Z001A?w=750&h=440&qlt=70"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white text-3xl font-bold">
              Police Car!
            </h2>
            <p className="text-white">
              We make your children happier with the best toys
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-white">Buy Now</button>
            </div>
          </div>
        </div>
        <div
          className="card w-80 bg-base-100 shadow-xl image-full mb-4"
          data-aos="flip-left"
          data-aos-duration="1000"
        >
          <figure>
            <img
              src="https://media.4rgos.it/i/Argos/1998719_R_Z001A?w=750&h=440&qlt=70"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white text-3xl font-bold">
              Sports Car!
            </h2>
            <p className="text-white">
              We make your children happier with the best toys
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-white">Buy Now</button>
            </div>
          </div>
        </div>
        <div
          className="card w-80 bg-base-100 shadow-xl image-full mb-4"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <figure>
            <img
              src="https://media.4rgos.it/i/Argos/1998719_R_Z001A?w=750&h=440&qlt=70"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white text-3xl font-bold">
              Truck Car!
            </h2>
            <p className="text-white">
              We make your children happier with the best toys
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-white">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopCards;
