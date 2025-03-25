import Photo10 from '../../assets/10.jpg';
import { motion } from 'framer-motion';
import { FadeLeft } from '../../utility/animation';


const contactStyle = {
    backgroundImage: `url(${Photo10})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
}

const Contact = () => {
  return (
    <section className='bg-color1/30'>
        <div style={contactStyle} className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl h-[40vh]">

            <div></div>


            <div className='flex flex-col justify-center'>
                <div className='text-center md:text-right space-y-4 lg:max-w-[400px]'>
                    <motion.h1 variants={FadeLeft(0.7)} initial="hidden" whileInView="visible" viewport={{ once: true }} className='text-3xl lg:text-5xl font-bold special-pp'>ارتباط با ما</motion.h1>
                    <motion.p variants={FadeLeft(0.9)} initial="hidden" whileInView="visible" viewport={{ once: true }} className='special-pp font-semibold'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است تولید شود</motion.p>
                    <motion.div variants={FadeLeft(1.1)} initial="hidden" animate="visible" className='flex justify-center md:justify-end mr-1'>
                        <button className='special-btn'>پشتیبانی و ارتباط</button>
                    </motion.div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Contact