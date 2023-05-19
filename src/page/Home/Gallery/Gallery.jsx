import React from "react";

const Gallery = () => {
  const onBeforeSlide = (detail) => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
  return (
    <section className="size">
      <h1>Gallery</h1>
    </section>
  );
};

export default Gallery;
