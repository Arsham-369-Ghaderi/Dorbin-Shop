import { motion } from 'framer-motion';
import { FadeUp } from '../../utility/animation';
import Photo9 from '../../assets/9.png'

const About = () => {
  return (
    <section className='bg-color2/45'>
        <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">

            <div className='flex justify-center items-center ml-5'>
                <motion.img initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 100, delay: 0.2 }} viewport={{ once: true }} src={Photo9} alt="" className='md:w-[550px] w-[300px] h-full object-cover'/>
            </div>

            <div className='flex flex-col justify-center ml-26 mt-4'>
                <div className='text-center md:text-right space-y-4 lg:max-w-[400px]'>
                    <motion.h1 variants={FadeUp(0.5)} initial="hidden" whileInView="visible" viewport={{ once: true }} className='text-3xl lg:text-5xl font-bold'>درباره ما</motion.h1>
                    <motion.p variants={FadeUp(0.7)} initial="hidden" whileInView="visible" viewport={{ once: true }}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است تولید شود</motion.p>
                    <motion.p variants={FadeUp(0.9)} initial="hidden" whileInView="visible" viewport={{ once: true }}> شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. ابزارهای با ساختگی فعلی زیادی روزنامه طراحان هدف نامفهوم کتابهای متنوع تکنولوژی ابزارهای هدف کاربردهای ستون صنعت سطرآنچنان کتابهای زیادی است</motion.p>
                    <motion.div variants={FadeUp(1.1)} initial="hidden" animate="visible" className='flex justify-center md:justify-end mr-1'>
                        <button className='special-btn'>مجموعه دوربین شاپ</button>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About