import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import img from '../assets/new.png'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container max-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <img className=" mix-blend-lighten" src={img} alt="" />
          </motion.div>
          <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1">
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-2">
              I'am a MERN Stack Developer with almost 1 year of experience.
            </h3>
            <p className="mb-6">
              As a skilled React JS developer, I have a strong foundation in web
              development and strong passion for creating user-friendly web
              applications. And I am studying in Computer technology department
              in Munshiganj Polytechnic Institute and I am recently finished
              complete web development with programming hero course.
            </p>
            <div className="flex gap-x-6 lg:gap-x-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  <CountUp start={0} end={1} duration={3}></CountUp>
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  <CountUp start={0} end={50} duration={3}></CountUp>+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Complete
                </div>
              </div>
            </div>
            <div>
              <div
                
                className=" flex gap-x-6 mb-8 mt-10 items-center"
              >
                <button className="btn btn-sm">Contact me</button>
                <a href="#" className="text-gradient btn-link">
                  My Portfolio
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
