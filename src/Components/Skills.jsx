import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiRedux,
  SiAntdesign,
  SiCplusplus,
  SiReactrouter,
} from "react-icons/si";
import { motion } from "framer-motion";
const Skills = () => {
  return (
    <section className="relative min-h-[100vh] max-md:min-h-[75vh] border-b-[0.5px] py-6 w-screen p-8  bg-black border-[#BC8CF2]">
      <h1 className=" text-7xl max-md:text-5xl text-center text-white font-bold overflow-hidden">
        My <span className=" text-[#AA14F0]">Skills.</span>
      </h1>
      {/* Icon Container */}
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <motion.div
          animate={{
            y: ["0%", "25%", "0%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute"
          style={{ top: "30%", left: "20%" }}
        >
          <SiHtml5 className=" text-9xl cursor-pointer max-md:text-7xl text-orange-500" />
        </motion.div>
        <motion.div
          animate={{
            y: ["25%", "5%", "25%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute"
          style={{ top: "50%", left: "45%" }}
        >
          <SiCss3 className=" text-9xl max-md:text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          animate={{
            y: ["0%", "25%", "0%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute"
          style={{ top: "15%", left: "75%" }}
        >
          <SiJavascript className=" text-9xl max-md:text-7xl text-yellow-500" />
        </motion.div>
        <motion.div
          animate={{
            y: ["25%", "5%", "25%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute"
          style={{ top: "40%", left: "3%" }}
        >
          <SiReact className=" text-9xl max-md:text-7xl text-[#276eb1]" />
        </motion.div>
        <motion.div
          animate={{
            y: ["25%", "5%", "25%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute"
          style={{ top: "70%", right: "10%" }}
        >
          <SiTailwindcss className=" text-9xl max-md:text-7xl text-[#59b4d8]" />
        </motion.div>
        <motion.div
          animate={{
            y: ["0%", "25%", "0%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute"
          style={{ top: "55%", left: "10%" }}
        >
          <SiFramer className=" text-9xl max-md:text-7xl text-white" />
        </motion.div>
        <motion.div    animate={{
             y:["25%" , "5%" , "25%"]
          }}
          transition={{
            duration:5,
              repeat:Infinity,

          }} className="absolute" style={{ top: "58%", left: "32%" }}>
          <SiAntdesign className=" text-9xl max-md:text-7xl text-blue-700" />
        </motion.div>
        <motion.div
           animate={{
            y:["0%" , "25%" , "0%"]
         }}
         transition={{
           duration:5,
             repeat:Infinity,

         }}
         className="absolute" style={{ top: "55%", left: "60%" }}>
          <SiRedux className=" text-9xl max-md:text-7xl text-purple-900" />
        </motion.div>
        <motion.div    animate={{
             y:["25%" , "5%" , "25%"]
          }}
          transition={{
            duration:5,
              repeat:Infinity,

          }} className="absolute" style={{ top: "20%", left: "50%" }}>
          <SiCplusplus className=" text-9xl max-md:text-7xl text-blue-800" />
        </motion.div>
        <motion.div
           animate={{
            y:["0%" , "25%" , "0%"]
         }}
         transition={{
           duration:5,
             repeat:Infinity,

         }}
         className="absolute" style={{ top: "35%", left: "67%" }}>
          <SiReactrouter className=" text-9xl max-md:text-7xl text-red-600" />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
