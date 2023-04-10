import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import a from "./Gambar/Tes1.jpeg";
import b from "./Gambar/Tes2.jpg";
import c from "./Gambar/Tes3.jpeg";

const ImageCarousel = () => {
  const giss = [{ url: a }, { url: b }, { url: c }];
  const [i, setImage1] = useState(0);
  const [o, setImage2] = useState(1);
  return (
    <div className="flex max-w-6xl mx-auto ">
      <div className="container inline-flex justify-center gap-4 place-content-center m-12 bg-neutral-700  py-12  rounded-xl">
        <button>
          <FiChevronLeft
            className="w-12 h-12 bg-cover bg-stone-200/30"
            onClick={() => {
              setImage1(i - 1);
              setImage2(o - 1);
            }}
          />
        </button>

        <img
          alt=""
          src={giss[i].url}
          className="inline 2xl:w-[25rem] 2xl:h-[35rem]"
        />

        <img
          alt=""
          src={giss[o].url}
          className="inline 2xl:w-[25rem] 2xl:h-[35rem]"
        />
        <button>
          <FiChevronRight
            className="w-12 h-12 bg-cover bg-stone-200/30"
            onClick={() => {
              setImage2(o + 1);
              setImage1(i + 1);
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
