import { motion, AnimatePresence } from 'framer-motion';


const Menulisticon = ({ open }) => {
  return (
    <AnimatePresence mode='wait'>
        {
            open && (
               <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 0.3 }} className='absolute  top-20 left-0 w-full h-screen z-20'>
                <div className='text-xl font-semibold uppercase bg-color3 text-color1 py-10 m-6 rounded-3xl'>
                    <ul className='flex flex-col items-center gap-10'>
                        <li>خانه</li>
                        <li>محصولات</li>
                        <li>خدمات</li>
                        <li>درباره ما</li>
                        <li>ارتباط با ما</li>
                    </ul>
                </div>
               </motion.div>
            )
        }
    </AnimatePresence>
  )
}

export default Menulisticon