import React from 'react'
import { IoBagHandleOutline } from "react-icons/io5";
import photo1 from '../../assets/1.png'
import { motion } from 'framer-motion';
import { FadeRight } from '../../utility/animation';

const Home = () => {
  return <section>
    <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">

        <div className='flex justify-center items-center ml-[-70px]'>
            <motion.img initial={{ opacity: 0, x: 200, rotate: 75 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ duration: 1, delay: 0.2 }} src={photo1} alt="" className='w-[350px] md:w-[600px] special-shadow'/>
        </div>

        <div className='flex flex-col justify-center py-14 md:py-0 relative z-10 ml-[-50px] mt-20'>
            <div className='text-center md:text-right space-y-6 lg:max-w-[600px]'>
                <motion.h1 variants={FadeRight(0.5)} initial="hidden" animate="visible" className='text-5xl lg:text-5xl font-bold'>بهترین و با کیفیت ترین دوربین </motion.h1>
                <motion.h1 variants={FadeRight(0.5)} initial="hidden" animate="visible" className='text-color2 text-5xl lg:text-5xl font-bold '>از فروشگاه دوربین خریداری کنید</motion.h1>
                <br />
                <motion.p variants={FadeRight(0.8)} initial="hidden" animate="visible" className='text-2xl tracking-wide'>بهترین دوربین هارو ازما خریداری کنید</motion.p>
                <motion.p variants={FadeRight(1.1)} initial="hidden" animate="visible" className='text-gray-400'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</motion.p>

                <motion.div variants={FadeRight(1.4)} initial="hidden" animate="visible" className='flex justify-center md:justify-end mr-1'>
                    <button className='special-btn flex items-center gap-2'><span><IoBagHandleOutline /></span>خرید دوربین</button>
                </motion.div>
            </div>
        </div>

    </div>
  </section>
}

export default Home