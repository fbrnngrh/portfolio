import React from "react";
import { motion } from "framer-motion";

type Props = {};

//

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className=" flex flex-col relative text-center md:text-left max-w-7xl  px-10 justify-evenly mx-auto md:flex-row h-screen items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className="-mb-20 mt-14 sm:mt-20  md:mb-0 flex-shrink-0  w-52 h-52 rounded-full object-cover md:rounded-lg  md:w-64 md:h-95 lg:w-64 lg:h-95 xl:w-[400px] xl:h-[500px] xs:hidden   "
        src="https://media.licdn.com/dms/image/C4E03AQHB7ZgpL8zkVQ/profile-displayphoto-shrink_800_800/0/1655610203810?e=1678320000&v=beta&t=UlByHZb5rcgJBHbipGVs7h3lD2cfQW-4ijeaU8tvarQ"
      />
      <div className="space-y-10 px-0 md:px-10 ">
        <h4 className="xl:text-4xl md:text-4xl lg:text-4xl sm:text-2xl font-semibold sm:mt-10 xs:text-xl ">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base md:text-sm lg:text-sm xs:text-sm sm:text-sm xl:text-lg">
          Hi, my name is Febrian Bayu Nugroho 🙋‍♂️ and I am a talented and
          dedicated frontend developer 💻 with a strong background in website
          development 🌐. As a student at Politeknik Negeri Tanah Laut 🏫, I
          have gained valuable knowledge and experience in a variety of
          programming languages and technologies 🤓 that are essential for
          building modern websites. I am particularly skilled in HTML, CSS, and
          JavaScript 💎, and I have a strong understanding of how to use these
          languages to create visually appealing and user-friendly interfaces
          🎨. In addition to my technical skills, I am also a highly organized
          and detail-oriented individual 🧑‍💼 with excellent problem-solving
          abilities 🤯. I am always looking for ways to improve my skills 💪 and
          stay up-to-date with the latest developments in the field. As a
          frontend developer, I am passionate about creating websites that are
          both functional 🤖 and aesthetically pleasing 🌟, and I am dedicated
          to delivering high-quality work 💯 that meets the needs of my clients.
        </p>
      </div>
    </motion.div>
  );
}
