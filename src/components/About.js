import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import image from '../assets/about.png'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container max-auto">
        <div className="lg:flex items-center">
          <div className="w-full lg:w-1/2 "><img className="mix-blend-overlay bg-top" src={image} alt="" /></div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-2">
              I'am a MERN Stack Developer with almost 1 year of experience.
            </h3>
            <p className="mb-6">
              As a skilled React JS developer, I have a strong foundation in web
              development and strong passion for creating user-friendly web
              applications. And I am studying in Computer technology department
              in Munshiganj Polytechnic Institute and I am recently finished
              complete web development with programming hero course. I have
              successfully completed various notable projects that showcase my
              expertise in React JS Development. For instance, I developed
              “Shippo-Football-Academy” this is a full-stack website where I
              utilized React JS, Tailwind CSS, Flowbite, Firebase, Mongodb,
              Node.js, Express.js. And I have been working with React last 3
              months.
            </p>
            <div className="flex gap-x-6 lg:gap-x-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? 
                    <CountUp start={0} end={1} duration={3}></CountUp>
                   : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? 
                    <CountUp start={0} end={50} duration={3}></CountUp>
                   : null}
                   +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Complete
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
