import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import a from "./Gambar/Tes1.jpeg";
import b from "./Gambar/Tes2.jpeg";
import c from "./Gambar/Tes3.jpeg";
const ImageCarousel = () => {
  const giss = [{ url: a }, { url: b }, { url: c }];

  let i = 0;

  const next = () => {
    i += 1;
    console.log(i);
  };

  return (
    <div>
      <div className="card grid grid-rows-1 items-center inline-grid m-12 relative top-8 left-[30rem] bg-emerald-200 p-12">
        <img src={giss[i].url} async className="w-[20rem] h-[30rem]" />
        <button onClick={next}>
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
