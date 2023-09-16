"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 w-full ">
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-7 place-self-center text-center sm:text-left pt-0">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Pranav Rathod',
                1000,
                'Javascript Developer',
                1000,
                'Front-end Developer',
                1000,
                'Web Designer',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl ">
            2023 Computer Engineering Graduate from India, specializing in Front-End and Full-Stack MERN Development. React.js and AI Enthusiast.
          </p>
          <div>
            {/* <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500  to-secondary-500 hover:bg-slate-200 text-white' >Hire me</button> */}
            <Link
              href='#contact'
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <a
              href="/PRANAV_RATHOD_RESUME.docx" // Replace with the actual path to your CV file
              download="PRANAV_RATHOD_RESUME.docx" // Specify the desired filename for the downloaded file
            >
              <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500  to-secondary-500  hover:bg-slate-800  mt-3 ' >
                <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 '>Download CV</span>
              </button>
            </a>
          </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-5 place-self-center mt-4 lg:mt-0 pt-11">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image src="/Images/pp.png" alt='hero-image'
              width={300} height={300}
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 bottom-1/2 left-1/2'/>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
