import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import a from "./Gambar/Tes1.jpeg";
import b from "./Gambar/Tes2.jpeg";
import c from "./Gambar/Tes3.jpeg";
const ImageCarousel = () => {
  const giss = [{ url: a }, { url: b }, { url: c }];
  const [i, setCounter] = useState(0);

  return (
    <div className="card flex-row justify-center inline-flex place-content-center m-12 bg-emerald-200 p-12">
      <button>
        <FiChevronLeft
          className="w-12 h-12 bg-cover bg-orange-400"
          onClick={() => {
            setCounter(i - 1);
          }}
        />
      </button>
      <div>
        <img
          alt="ada"
          src={giss[i].url}
          className="inline 2xl:w-[30rem] 2xl:h-[40rem]"
        />
        <button>
          <FiChevronRight
            className="w-12 h-12 bg-cover bg-orange-400"
            onClick={() => {
              setCounter(i + 1);
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
