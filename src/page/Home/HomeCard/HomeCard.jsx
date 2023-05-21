import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const HomeCard = () => {
  return (
    <section className="size">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div data-aos="fade-left" data-aos-duration="1000">
            <img
              src="https://images.unsplash.com/photo-1594787317702-9beb2f0bdd1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              className="max-w-lg rounded-lg shadow-2xl"
              data-aos="fade-left"
            />
          </div>
          <div data-aos="fade-right" data-aos-duration="1000">
            <h1 className="text-5xl font-bold">
              We design toys not just for kids but with kids!
            </h1>
            <p className="py-6">
              A model car, or toy car, is a miniature representation of an
              automobile. Other miniature motor vehicles, such as trucks, buses,
              or even ATVs, etc. are often included in this general category.
              Because many miniature vehicles were originally aimed at children
              as playthings, there is no precise difference between a model car
              and a toy car, yet the word 'model' implies either assembly
              required or the accurate rendering of an actual vehicle at smaller
              scale. The kit building hobby became popular through the 1950s,
              while the collecting of miniatures by adults started to pick up
              momentum around 1970. Precision-detailed miniatures made
              specifically for adults are a significant part of the market since
              the mid-1980s
            </p>
            <Link to="/" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCard;
