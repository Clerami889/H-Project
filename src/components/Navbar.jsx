import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <nav className="flex flex-row bg-slate-600 justify-around h-32 items-center ">
        <section className="flex flex-row ">
          <div className="bg-[url('../public/android-chrome-512x512.jpeg')] h-14 w-14 bg-no-repeat bg-contain pl-2"></div>
          <h1 className="font-extralight text-[2rem] text-slate-200 pl-2">
            Heroes Palembang
          </h1>
        </section>

        <ul className="flex flex-row list-none space-x-6 text-slate-200 text-[1.2rem] ">
          <li className="hover:text-slate-100">
            <a href="google.com">Home</a>
          </li>
          <li className="hover:text-slate-100">
            <a href="facebook.com">Events</a>
          </li>
          <li className="hover:text-slate-100">
            <a href="youtube.com">Heroes Leader</a>
          </li>
          <li className="hover:text-slate-100">
            <a href="https://youtu.be/S2Cti12XBw4">About</a>
          </li>
          <li className="hover:text-slate-100">
            <a href="chatgpt.com">Join Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
