import React from 'react';
import Photo6 from '../../assets/7.png';
import { motion } from 'framer-motion';
import { FadeUp } from '../../utility/animation';

const Khadamat = () => {
  return (
    <section className='bg-color2/10'>
        <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">

            <div className='flex flex-col justify-center ml-28 mt-4'>
                <div className='text-center md:text-right space-y-4 lg:max-w-[400px]'>
                    <motion.h1 variants={FadeUp(0.5)} initial="hidden" whileInView="visible" viewport={{ once: true }} className='text-3xl lg:text-5xl font-bold'>خدمات دوربین</motion.h1>
                    <motion.p variants={FadeUp(0.7)} initial="hidden" whileInView="visible" viewport={{ once: true }}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است تولید شود</motion.p>
                    <motion.p variants={FadeUp(0.9)} initial="hidden" whileInView="visible" viewport={{ once: true }}> شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی است</motion.p>
                    <motion.div variants={FadeUp(1.1)} initial="hidden" animate="visible" className='flex justify-center md:justify-end mr-1'>
                        <button className='special-btn'>ابزارهای دوربین</button>
                    </motion.div>
                </div>
            </div>


            <div className='flex justify-center items-center mr-5'>
                <motion.img initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 100, delay: 0.2 }} viewport={{ once: true }} src={Photo6} alt="" className='md:w-[500px] w-[300px] h-full object-cover'/>
            </div>

        </div>
    </section>
  )
}

export default Khadamat