import React, { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi"; // Heroicons
import { SliderBar } from "../Components/index";
import { AnimatePresence } from "framer-motion";

const Header = () => {
  const [slideBar, setSlideBar] = useState(false); // Renamed to `slideBar`

  useEffect(() => {
    if (slideBar) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [slideBar]);
  

  return (
    <header className={`relative ${slideBar ? "overflow-hidden" : "overflow-auto"} z-0 w-full bg-[#AA14F0] text-white `}>
      <div
        className={`flex max-md:justify-between px-6 py-4 items-center ${
          slideBar ? "hidden" : "block"
        }`}
      >
        <h1 className="overflow-hidden text-4xl max-md:text-2xl cursor-pointer">
          yosf.Dev
        </h1>
        <nav className="mx-auto max-md:hidden translate-x-[-10%] uppercase space-x-4 border border-white p-4 rounded-3xl">
          <a href="#intro">Intro</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <HiOutlineMenu
          onClick={() => setSlideBar(true)}
          className="text-4xl md:hidden"
        />
      </div>
      <AnimatePresence>
        {slideBar && <SliderBar setSlideBar={setSlideBar} />}
      </AnimatePresence>
    </header>
  );
};

export default Header;
