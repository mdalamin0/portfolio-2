import React from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import img1 from '../assets/Screenshot_1.png'
import img2 from '../assets/three.png'
import img3 from '../assets/two.png'

const Work = () => {
  return <section className='section' id='work'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        className='flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0'>
          <div>
            <h2 className='h2 leading-tight text-accent'>My Latest <br /> Work.</h2>
            <p className='max-w-sm mb-16'>I have successfully completed various notable projects that showcase my expertise in React JS Development. For instance, I developed “Shippo-Football-Academy” this is a full-stack website where I utilized React JS, Tailwind CSS, Flowbite, Firebase, Mongodb, Node.js, Express.js. And I have been working with React last 3 months.</p>
            <button className='btn btn-sm'>View all projects</button>
          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-50 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500 w-full h-[320px]' src={img1} alt="" />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Sports World</span></div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
            <div className="flex gap-x-8">
                  <a
                    href="https://symphonious-pika-949131.netlify.app/"
                    target="_blank"
                  >
                    <button className="btn text-sm px-3 py-2">Live Demo</button>
                  </a>
                  <a
                    href="https://github.com/Jakir80/school-site-client"
                    target="_blank"
                  >
                    <button className="btn text-sm px-3 py-2">
                      Front-end code
                    </button>
                  </a>
                </div>
            </div>
          </div>
        </motion.div>
        <motion.div
        variants={fadeIn('left', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        className='flex-1 flex flex-col gap-y-20'>
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-50 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500 ' src={img2} alt="" />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'> Recipe hunter</span></div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
            <div className="flex gap-x-8">
                  <a
                    href="https://jade-raindrop-524b0d.netlify.app/"
                    target="_blank"
                  >
                    <button className="btn text-sm px-3 py-2">Live Demo</button>
                  </a>
                  <a
                    href="https://github.com/Jakir80/Recipe-hunter-Client"
                    target="_blank"
                  >
                    <button className="btn text-sm px-3 py-2">
                      Front-end code
                    </button>
                  </a>
                </div>
            </div>
          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl mt-20'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-50 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500 ' src={img3} alt="" />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Toys Market</span></div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
            <div className="flex gap-x-8">
                  <a
                    href="https://loquacious-sundae-ceb316.netlify.app/"
                    target="_blank"
                  >
                    <button className="btn text-sm px-3 py-2">Live Demo</button>
                  </a>
                  <a
                    href="https://github.com/Jakir80/Toys-Market-client-site"
                    target="_blank"
                  >
                    <button className="btn text-sm px-3 py-2">
                      Front-end code
                    </button>
                  </a>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Work;
