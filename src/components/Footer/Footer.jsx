import { FaWhatsapp, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import { motion } from 'framer-motion';
import { IoCamera } from "react-icons/io5";
import { GrCreativeCommons } from "react-icons/gr";

const Footer = () => {
  return (
  <footer className="bg-color4 py-12">
  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} className='container flex justify-between items-center'>

    <div>
        <div className="flex text-2xl items-center gap-2 font-bold uppercase cursor-pointer">
            <IoCamera className="text-4xl"/>
            <p className="mt-2 text-color1">Camera</p>
            <p className="mt-2 ml-[-4px] text-color2">Shop</p>
        </div>
    </div>


    <div className="flex items-center text-3xl gap-6 mt-5">
    <FaInstagram className="text-pink-600 cursor-pointer hover:text-color1 duration-200"/>
    <FaWhatsapp className="text-green-600 cursor-pointer hover:text-color1 duration-200"/>
    <FaTelegram className="text-blue-700 cursor-pointer hover:text-color1 duration-200"/>
    <FaYoutube className="text-red-600 text-4xl cursor-pointer hover:text-color1 duration-200"/>
    </div>

    <div className="absolute left-[38%] mt-24 text-2xl flex gap-2 font-semibold">
    <GrCreativeCommons className="mt-[2px]"/>
    <p>create web with Arsham Ghaderi</p>
    </div>

  </motion.div>
  </footer>
  )
}

export default Footer