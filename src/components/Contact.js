import React from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import img from '../assets/contact-img.svg'

const Contact = () => {
  return <section className='' id='contact'>
    <div className="container mx-auto">
    <div className="wrapper flex justify-center  py-16 gap-52 lg:py-12">
          <div className="imgbox">
            <img className="w-[550px] h-full" src={img} alt="" />
          </div>
          <div className="content-box">
            <h1 className="text-white font-bold text-4xl">Get In Touch</h1>
            <form action="" className="flex flex-col ">
            <div className="flex gap-4 py-2  ">
              <input
                className="bg-transparent h-14 rounded-2xl  border-[1px] border-white pl-4 text-white placeholder-white lg:w-36 "
                type="text"
                placeholder="Name"
              />
              <input
                className="bg-transparent h-14  rounded-2xl  border-[1px] border-white pl-4 text-white placeholder-white  lg:w-36"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="flex gap-4  py-4  ">
              <input
                className="bg-transparent h-14  rounded-2xl   border-[1px] border-white pl-4 text-white placeholder-white  lg:w-36"
                type="email"
                placeholder="Email"
              />
              <input
                className="bg-transparent h-14  rounded-2xl  border-[1px] border-white pl-4 text-white placeholder-white  lg:w-36"
                type="phone"
                placeholder="Phone"
              />
            </div>
            <textarea
              className="bg-transparent rounded-2xl border-[1px] border-white h-36 pl-4 text-white w-full placeholder-white pt-2"
              rows={40}
              cols={35}
              placeholder="Message"
            ></textarea>
                <button className="bg-white text-black border-black border-[1] py-[16px] rounded-lg px-8 my-8 w-32 font-bold ">Send</button>
                </form>
          </div>


        </div>
    </div>
  </section>;
};

export default Contact;
