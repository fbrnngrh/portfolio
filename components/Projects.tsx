import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col 
    text-left md:flex-row max-w-full justify-evenly mx-auto 
    items-center z-0"
    >
      <div
        className="absolute top-24 uppercase
       tracking-[20px] text-gray-500 text-2xl "
      >
        Projects
      </div>

      <div
        className="relative w-full flex overflow-x-scroll 
      overflow-y-hidden snap-x snap-mandatory z-20"
      >
        {projects.map((project, i) => (
          <div
            key={project}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center mt-16 p-20 md:p-20 h-screen "
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://th.bing.com/th/id/OIP.9QIF8pTrBGB6thjce36QwQHaE8?pid=ImgDet&rs=1"
              alt=""
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Project Study {i + 1} of {projects.length}
                </span>
                : Coming Soon{" "}
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                suscipit nihil illo similique ipsam ullam, aliquam a,
                asperiores, ab distinctio numquam dolor ex est recusandae enim
                eveniet illum? Eum, aliquam?
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[350px] -skew-y-12 "></div>
    </motion.div>
  );
}

export default Projects;
