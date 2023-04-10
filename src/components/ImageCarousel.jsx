import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import a from "./Gambar/Tes1.jpeg";
import b from "./Gambar/Tes2.jpg";
import c from "./Gambar/Tes3.jpeg";
import d from "./Gambar/Tes4.jpeg";
import e from "./Gambar/Tes5.jpeg";

const ImageCarousel = () => {
  function tes() {
    console.log(i);
  }
  const giss = [{ url: a }, { url: b }, { url: c }, { url: d }, { url: e }];
  function next() {
    if (i + 2 < giss.length) {
      setImage(i + 1);
    } else {
      setImage(i);
    }
  }

  function before() {
    if (i > 0) {
      setImage(i - 1);
    } else {
      setImage(i);
    }
  }
  const [i, setImage] = useState(0);

  return (
    <div className="flex max-w-6xl mx-auto ">
      <div className="container inline-flex justify-center gap-4 place-content-center m-12 bg-neutral-700  py-12  rounded-xl">
        <button>
          <FiChevronLeft
            className="w-12 h-12 bg-cover bg-stone-200/30"
            onClick={before}
          />
        </button>

        <img
          alt=""
          src={giss[i].url}
          className="inline 2xl:w-[25rem] 2xl:h-[35rem]"
        />

        <img
          alt=""
          src={giss[i + 1].url}
          className="inline 2xl:w-[25rem] 2xl:h-[35rem]"
        />
        <button>
          <FiChevronRight
            className="w-12 h-12 bg-cover bg-stone-200/30"
            onClick={next}
          />
        </button>
      </div>

      <button className="h-12 w-12 bg-red-300" onClick={tes}>
        {" "}
      </button>
    </div>
  );
};

export default ImageCarousel;
