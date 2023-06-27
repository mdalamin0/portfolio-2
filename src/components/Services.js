import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';


// services data
const services = [
  {
    name: 'Web Application Development',
    description: 'I can build custom web applications from scratch using the MERN stack. This involves creating the backend with Node.js and Express.js, designing the frontend with React.js, and integrating it with MongoDB for data storage.',
    link: 'Learn more'
  },
  {
    name: 'API Development',
    description: 'I can develop RESTful APIs using Node.js and Express.js to allow communication between the frontend and backend of web applications. This involves designing and implementing the API endpoints, handling data requests and responses, and integrating with MongoDB for data retrieval and storage.',
    link: 'Learn more'
  },
  {
    name: 'Front-end Development',
    description: 'I can develope the frontend using React.js. This involves creating interactive user interfaces, handling user input, and consuming APIs provided by the backend.',
    link: 'Learn more'
  },
  {
    name: 'Backend Development',
    description: 'I am specialize in backend development using Node.js and Express.js. This involves building server-side logic, handling database operations, and creating APIs for frontend integration.',
    link: 'Learn more'
  }
]

const Services = () => {
  return <section className='section mt-[500px] lg:mt-[200px]' id='services'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-accent mb-6'>What I Do.</h2>
          <h3 className='h3 max-w-[455px] mb-16'>I'am a MERN Stack Developer with almost 1 year of experience.</h3>
          <button className='btn btn-sm'>See my work</button>
        </motion.div>
        <motion.div
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        className='flex-1'>
          <div>
          {services.map((service, index) => {
            // destructure service
            const {name, description, link} = service;
            return (
              <div
              className='border-b-2 border-white/20 mb-[38px] flex items-center space-x-4 '
               key={index}>
                <div className='max-w-[476px]'>
                  <h4 className='text-xl tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                  <p className='font-secondary leading-tight pb-5'>{description}</p>
                </div>
                <div>
                  <a href="#" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                    <BsArrowUpRight></BsArrowUpRight>
                  </a>
                  <a href="#" className='text-gradient text-sm'>{link}</a>
                </div>
              </div>
            )
          })
          }
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Services;
