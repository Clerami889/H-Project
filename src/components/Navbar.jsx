import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <nav className="flex flex-row bg-zinc-800 justify-around h-32 items-center ">
        <section className="flex flex-row ">
          <div className="bg-[url('../public/android-chrome-512x512.jpeg')] h-14 w-14 bg-no-repeat bg-contain pl-2 "></div>
          <h1 className="font-extralight md:text-[2rem] text-slate-200 md:pl-2 min-[400px]:text-[1rem]">
            Heroes Palembang
          </h1>
        </section>

        <ul className="flex flex-row list-none md:space-x-6 text-slate-200 md:text-[1.2rem] min-[400px]:">
          <li className="hover:text-slate-100 hover:underline hover:decoration-solid">
            <a href="google.com">Home</a>
          </li>
          <li className="hover:text-slate-100 hover:underline hover:decoration-solid">
            <a href="facebook.com">Events</a>
          </li>
          <li className="hover:text-slate-100 hover:underline hover:decoration-solid">
            <a href="youtube.com">Heroes Leader</a>
          </li>
          <li className="hover:text-slate-100 hover:underline hover:decoration-solid">
            <a href="https://youtu.be/S2Cti12XBw4">About</a>
          </li>
          <li className="hover:text-slate-100 hover:underline hover:decoration-solid">
            <a href="chatgpt.com">Join Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
