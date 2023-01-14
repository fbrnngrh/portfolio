import React from "react";
import { motion } from "framer-motion";
type Props = {};

// https://2.bp.blogspot.com/-rqkfyrmej5E/Vm08m_Y00JI/AAAAAAAACGo/FElYrsJe4sY/s1600/lgTriomotor.jpg

const ExperienceCard = (props: Props) => {
  return (
    
    <article
      className="flex mt-24 flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[550px] xl:w-[600px] 
    snap-center bg-[#292929] p-10 hover:opacity-100 
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden "
    >
  
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duratiion: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-20 h-20 object-cover rounded-full  md:w-[60] md:h-[60] object-center "
        src="https://th.bing.com/th/id/R.aaf0157bee3031df620b49a0c5dd4e58?rik=L9gbNITNAeQ2Gg&riu=http%3a%2f%2fwww.upaya-tehnik.co.id%2fassets%2fimages%2flogo-upaya-tehnik-besar-181x186.jpg&ehk=CY%2fXsYyUxjjyPMthtBGLWb5eMi8zp0qKZkUlwwtJ%2bqg%3d&risl=&pid=ImgRaw&r=0"
        alt=""
      />

      <div className="px-0 md:px-10 ">
        <h4 className="text-2xl font-light ">Network Tehnician</h4>
        <p className="uppercase font-bold text-xl mt-1">Upaya Tehnik</p>
        <div className="flex space-x-2 mt-2">
          <img
            className="w-10 h-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300  text-sm">
          Started work... - Ended...{" "}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-xs ">
          <li>
            {" "}
            Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes
          </li>
          <li>
            {" "}
            Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes
          </li>
          <li>
            {" "}
            Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes
          </li>
          <li>
            {" "}
            Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes
          </li>
          <li>
            {" "}
            Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes Tes
          </li>
        </ul>
      </div>
    </article>

  );
};

export default ExperienceCard;
