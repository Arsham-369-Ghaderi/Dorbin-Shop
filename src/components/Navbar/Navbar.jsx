import { IoCamera } from "react-icons/io5";
import { FaShoppingBasket } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import Menulisticon from "../Menulisticon/Menulisticon";
import { motion } from 'framer-motion';

const NavbarList = [
    {
        id: 1,
        title: "ارتباط با ما",
        link: "#"
    },
    {
        id: 2,
        title: "درباره ما",
        link: "#"
    },
    {
        id: 3,
        title: "خدمات",
        link: "#"
    },
    {
        id: 4,
        title: "محصولات",
        link: "#"
    },
    {
        id: 5,
        title: "خانه",
        link: "/"
    },
]

const Navbar = () => {
    const [open, setOpen] = useState(false);
    
  return <>
  <nav>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="container flex justify-between py-5 md:pt-7">
        {/* Logo box */}
        <div className="flex text-2xl items-center gap-2 font-bold uppercase cursor-pointer">
            <IoCamera className="text-4xl"/>
            <p className="mt-2 text-color1">Camera</p>
            <p className="mt-2 ml-[-4px] text-color2">Shop</p>
        </div>

        {/* Menu List */}
        <div className="hidden md:block mt-3">
            <ul className="flex gap-6 items-center text-gray-700 font-semibold">
                {
                    NavbarList.map((menu) => (
                        <li key={menu.id} className="text-xl">
                            <a href={menu.link} className="hover:text-color2 duration-200 py-1 px-3 hover:shadow-[0_3px_0_-1px_#7AB2D3] font-semibold inline-block">{menu.title}</a>
                        </li>
                    ))
                }
                <button  className="text-2xl duration-200 hover:text-color2">
                <FaShoppingBasket/>
                </button>
            </ul>
        </div>

        <div className="md:hidden text-4xl" onClick={() => setOpen(!open)}>
            <MdMenu />
        </div>

    </motion.div>
  </nav>
    <Menulisticon open={open}/>
  </>
}

export default Navbar