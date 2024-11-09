import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const SliderBar = ({ setSlideBar }) => {
  // Variants for stagger effect
  const containerVariants = {
    show: {
      transition: {
        staggerChildren: 0.2, // delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{
        y: "-100%",
        opacity: 0,
        scale: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      exit={{
        y: "100%",
        opacity: 0,
        scale: 0,
        transition: {
          duration: 0.25,
          ease: "linear",
        },
      }}
      className="h-screen w-screen bg-[#AA14F0] flex flex-col justify-center items-center sticky z-10 text-white"
    >
      <div className="absolute right-5 top-5">
        <AiOutlineClose
          className="text-5xl cursor-pointer"
          onClick={() => {
            setSlideBar(false);
          }}
        />
      </div>
      <motion.div
        className="uppercase w-full h-full flex flex-col justify-center items-center text-6xl space-y-6 font-extrabold"
        initial="hidden"
        animate="show"
        variants={containerVariants} // Apply stagger effect
      >
        {["Intro", "Skills", "Projects", "Contact"].map((label, index) => (
          <motion.a
            key={label}
            href={`#${label.toLowerCase()}`}
            onClick={() => {
              document.body.classList.remove("no-scroll");
              setSlideBar(false);
            }}
            className="overflow-hidden"
            variants={itemVariants} // Individual item animations
          >
            {label}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SliderBar;
