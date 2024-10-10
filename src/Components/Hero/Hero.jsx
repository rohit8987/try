

import { FaPlay } from "react-icons/fa";
import HeroImg from '../../assets/hero.webp'
import { motion } from 'framer-motion';
import { SlideLeft } from '../../utility/Animation';

const Hero = () => {
  return (
     <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative  p-4 bg-[#faf7f7]">
            <div className="flex flex-col justify-center py-14 md:py-0 font-playfair ">
                <div className="space-y-6 text-center md:text-left">

                <motion.h1
                    variants={SlideLeft(0.6)}
                    initial='hidden'
                    animate= 'visible'
                className='text-5xl font-bold leading-relaxed lg:text-6xl xl:leading-normal'>
                    Gym Give you the perfect 
                    {''} <span className='text-primary'>Healt</span>{" "}
                </motion.h1>
                <p className="text-gray-600 xl:max-w-[500px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Minima est quibusdam reprehenderit.
                </p>
                <div className="flex items-center justify-center gap-8 !mt-4 md:justify-start">
                <button className="flex items-center gap-2 primary-btn">
                  {""}  Order Now
                </button>
                <button className="flex items-center justify-center gap-2">
                   <FaPlay/> Watch Now
                </button>

                </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <img src={HeroImg}alt="" className='w-[350px] md:w-[550px] xl:w-[700px] drop-shadow' />
            </div>
        </div>
     </section>
  )
}

export default Hero
