import React from "react";
import { BsCaretRightSquare, BsFillBagCheckFill } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full ">
        <img
          src="https://images.unsplash.com/photo-1594787318286-3d835c1d207f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          className="w-full hight"
        />
        <div className="absolute flex flex-col items-center justify-end  left-0 right-0 bottom-0 pb-4  bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <p className="p-3 mainBG2 text-white font">New arrival</p>
          <h1 className="mainColor2 text-[96px] font2 ">ONE BOX CAR TOY!</h1>
          <div>
            <button className="btn mainBG2 border-none font text-white mr-4">
              <BsFillBagCheckFill className="mr-1"></BsFillBagCheckFill> Shop
              Now
            </button>
            <button className="btn mainBG2 border-none font text-white">
              <BsCaretRightSquare className="mr-1"></BsCaretRightSquare>
              Watch Now
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="rounded-full p-2 mainColor mainBG">
            ❮
          </a>
          <a href="#slide2" className="rounded-full p-2 mainColor mainBG ">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full ">
        <img
          src="https://images.unsplash.com/photo-1532330393533-443990a51d10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          className="w-full hight "
        />
        <div className="absolute flex flex-col items-center justify-end  left-0 right-0 bottom-0 pb-4  bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <p className="p-3 mainBG2 text-white font">New arrival</p>
          <h1 className="mainColor2 text-[96px] font2 ">ONE BOX CAR TOY!</h1>
          <div>
            <button className="btn mainBG2 border-none font text-white mr-4">
              <BsFillBagCheckFill className="mr-1"></BsFillBagCheckFill> Shop
              Now
            </button>
            <button className="btn mainBG2 border-none font text-white">
              <BsCaretRightSquare className="mr-1"></BsCaretRightSquare>
              Watch Now
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="rounded-full p-2 mainColor mainBG">
            ❮
          </a>
          <a href="#slide3" className="rounded-full p-2 mainColor mainBG">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full ">
        <img
          src="https://images.unsplash.com/photo-1574243121728-7bbecdf295e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          className="w-full hight "
        />
        <div className="absolute flex flex-col items-center justify-end  left-0 right-0 bottom-0 pb-4  bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <p className="p-3 mainBG2 text-white font">New arrival</p>
          <h1 className="mainColor2 text-[96px] font2 ">ONE BOX CAR TOY!</h1>
          <div>
            <button className="btn mainBG2 border-none font text-white mr-4">
              <BsFillBagCheckFill className="mr-1"></BsFillBagCheckFill> Shop
              Now
            </button>
            <button className="btn mainBG2 border-none font text-white">
              <BsCaretRightSquare className="mr-1"></BsCaretRightSquare>
              Watch Now
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="rounded-full p-2 mainColor mainBG">
            ❮
          </a>
          <a href="#slide4" className="rounded-full p-2 mainColor mainBG">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full ">
        <img
          src="https://images.unsplash.com/photo-1617808654153-9b20f8728b02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1623&q=80"
          className="w-full hight "
        />
        <div className="absolute flex flex-col items-center justify-end  left-0 right-0 bottom-0 pb-4  bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <p className="p-3 mainBG2 text-white font">New arrival</p>
          <h1 className="mainColor2 text-[96px] font2 ">ONE BOX CAR TOY!</h1>
          <div>
            <button className="btn mainBG2 border-none font text-white mr-4">
              <BsFillBagCheckFill className="mr-1"></BsFillBagCheckFill> Shop
              Now
            </button>
            <button className="btn mainBG2 border-none font text-white">
              <BsCaretRightSquare className="mr-1"></BsCaretRightSquare>
              Watch Now
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="rounded-full p-2 mainColor mainBG">
            ❮
          </a>
          <a href="#slide1" className="rounded-full p-2 mainColor mainBG">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
