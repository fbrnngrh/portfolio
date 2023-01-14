import React from "react";
import { motion } from "framer-motion";

type Props = {};

const TechSkill = ({ directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer ">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        className=" xl:h-20 xl:w-20 lg:h-20 lg:w-20 md:h-16 md:w-16 object-cover border border-gray-500 sm:w-16  sm:h-16 xs:w-16  xs:h-16 rounded-full filter group-hover:grayscale transition duration-300 case-in-out"
        src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 case-in-out group-hover:bg-white xl:h-20 xl:w-20 lg:h-20 lg:w-20 sm:w-16  sm:h-16 xs:h-16 xs:w-16 h-16 w-16 md:w-16 md:h-16 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl xs:text-xl lg:text-2xl md:text-xl sm:text-xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
};

export default TechSkill;
