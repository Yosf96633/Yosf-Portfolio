import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiFramer,
  SiAntdesign,
} from "react-icons/si";
import { motion } from "framer-motion";
import {  MdSave } from 'react-icons/md';

const Intro = () => {
  return (
    <div id="intro" className=" min-h-[90vh] max-md:min-h-[70vh] w-full py-4 bg-black text-[#EEEEEE] flex flex-col justify-center space-y-8  items-center border-b-[0.5px] selection:bg-[#AA14F0] selection:text-black border-[#BC8CF2]">
      <h1 className=" text-5xl max-md:text-4xl font-bold overflow-hidden">
        Hi 👋, I'm {" "}
        <span className=" text-6xl max-md:text-5xl text-[#AA14F0]">Y</span>
        <span className=" text-6xl max-md:text-5xl text-[#AA14F0]">o</span>
        <span className=" text-6xl max-md:text-5xl text-[#AA14F0]">u</span>
        <span className=" text-6xl max-md:text-5xl text-[#AA14F0]">s</span>
        <span className=" text-6xl max-md:text-5xl text-[#AA14F0]">a</span>
        <span className=" text-6xl max-md:text-5xl text-[#AA14F0]">f</span>
      </h1>
      <p className="text-2xl max-md:text-lg px-4 max-md:w-full leading-10 tracking-wider w-[70vw] text-center">
        I'm a frontend developer skilled in{" "}
        <SiHtml5 className="inline text-orange-600 text-4xl max-md:text-2xl" />{" "}
        HTML,{" "}
        <SiCss3 className="inline text-blue-500 text-4xl max-md:text-2xl" />{" "}
        CSS,{" "}
        <SiJavascript className="inline text-yellow-400 text-4xl max-md:text-2xl" />{" "}
        JavaScript, and{" "}
        <SiReact className="inline text-blue-400 text-4xl max-md:text-2xl" />{" "}
        React. I work with{" "}
        <SiTailwindcss className="inline text-teal-500 text-4xl max-md:text-2xl" />{" "}
        Tailwind CSS,{" "}
        <SiRedux className="inline text-purple-600 text-4xl max-md:text-2xl" />{" "}
        Redux,{" "}
        <SiFramer className="inline text-white text-4xl max-md:text-2xl" />{" "}
        Framer Motion, and{" "}
        <SiAntdesign className="inline text-blue-600 text-4xl max-md:text-2xl" />{" "}
        Ant Design. I also have a strong understanding of data structures,
        algorithms, and object-oriented programming.
      </p>
       <motion.button
       initial={{
        scale:1,
       }}
       whileHover={{
        scale:1.085,
       }}
       whileTap={{
        scale:0.85,
        rotate:-10,
       }}
       transition={{
          ease:"linear"
       }}
        className=" border-[#BC8CF2] border-2 flex justify-center items-center space-x-2 bg-[#AA14F0] px-5 py-3 max-md:px-3 max-md:py-2 rounded-lg">
            <a href="/yosf.pdf" download="yosf.pdf">Download CV</a>
             <MdSave className=" text-2xl"/>
       </motion.button>
    </div>
  );
};

export default Intro;
