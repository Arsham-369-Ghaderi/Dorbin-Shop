import React from 'react'
import Shop1 from "../../assets/1.png";
import Shop2 from "../../assets/2.png";
import Shop3 from "../../assets/3.png";
import Shop4 from "../../assets/4.png";
import { motion } from 'framer-motion';
import { FadeLeft } from '../../utility/animation';

const ShopData = [
    {
        id: 1,
        title: "دوربین کلاسیک",
        link: "/",
        price: "2.000.000 تومان",
        img: Shop1,
        delay: 0.3,
    },
    {
        id: 2,
        title: "دوربین عکاسی",
        link: "/",
        price: "20.000.000 تومان",
        img: Shop2,
        delay: 0.6,
    },
    {
        id: 3,
        title: "دوربین مداربسته",
        link: "/",
        price: "5.000.000 تومان",
        img: Shop3,
        delay: 0.9,
    },
    {
        id: 4,
        title: "دوربین فیلم برداری",
        link: "/",
        price: "100.000.000 تومان",
        img: Shop4,
        delay: 1.2,
    },
]

const shop = () => {
  return <section>
    <div className="container pt-12 pb-20">
        <motion.h1 initial={{ opacity: 0, x: -200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.3 }} className='text-2xl font-bold text-left pb-10 uppercase'>تمامی محصولات</motion.h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
            {
                ShopData.map((shop) => (
                    <motion.div variants={FadeLeft(shop.delay)} initial="hidden" whileInView={"visible"} whileHover={{ scale: 1.1 }} key={shop.id} className='bg-color1 rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center gap-3 cursor-pointer hover:scale-95 hover:boxing-shadow '>
                      <img src={shop.img} alt="" className='w-[90px] mb-4 scale-125 transform translate-y-6 relative bottom-4'/>
                      <div>
                        <h1 className='text-xl font-semibold text-color4'>{shop.title}</h1>
                        <p className='text-lg font-semibold text-color3'>{shop.price}</p>
                      </div>
                    </motion.div>
                ))
            }
        </div>
    </div>
  </section>
}

export default shop