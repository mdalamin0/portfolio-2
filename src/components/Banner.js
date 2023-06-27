import React from "react";
import Image from "../assets/AL_AMIN.jpeg";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { BiSolidDownload } from "react-icons/bi";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="lg:w-1/2">
            <motion.h1
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}} 
             className="text-6xl leading-[0.8] mb-3 font-bold">It's AL AMIN</motion.h1>
            <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}} 
             className="mb-10 text-[36px]  lgf:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className="mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Front-end Developer",
                  2000,
                  "React.JS Developer",
                  2000,
                  "JavaScript Developer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              ></TypeAnimation>
            </motion.div>
            <motion.p 
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className="max-w-lg mx-auto lg:mx-0">
              I am skilled MERN Stack developer. I have a good knowledge in web
              development. I like to work specially on web developing and
              software. I can create awesome user Friendly web application. I
              always try to be honest in my work, I want to go far in the future
              by working with more new technologies.
            </motion.p>
            <motion.div 
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className=" flex gap-x-6 max-w-max mx-auto lg:mx-0 mb-8 mt-10 items-center">
              <button className="btn h-[48px] px-2 md:px-6 text-sm mr-2 lg:mr-4 flex items-center">Download Resume <BiSolidDownload className="ml-2 text-xl"></BiSolidDownload> </button>
              <a href="#" className="text-gradient btn-link">My Portfolio</a>
            </motion.div>
            <motion.div 
            variants={fadeIn('up', 0.7)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.6}}
             className="flex text-xl gap-x-6 max-w-max mx-auto  lg:mx-0 mb-10">
              <a href=""><FaGithub className="text-2xl"></FaGithub></a>
              <a href=""><FaLinkedin className="text-2xl"></FaLinkedin></a>
              <a href=""><FaFacebook className="text-2xl"></FaFacebook></a>
            </motion.div>
          </div>
          <motion.div 
          variants={fadeIn('down', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className="lg:w-1/2">
            <img className="w-[300px] mx-auto md:w-[400px] rounded-full " src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
