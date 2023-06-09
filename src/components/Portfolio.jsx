import { staggerContainer } from "../utils/motion";
import Heading from "./Heading"
import { motion } from 'framer-motion';

const images = [
   "https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=1600",
   "https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=1600",
   "https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=1600",
   "https://images.pexels.com/photos/5424636/pexels-photo-5424636.jpeg?auto=compress&cs=tinysrgb&w=1600",
   "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1600",
   "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1600",
   "https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&w=1600",
   "https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&w=1600",
   "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1600"
]

const slideUp = {
   hidden: {
      opacity: 0,
      y: '100%'
   },
   visible: {
      opacity: 1,
      y: 0,
      transition: {
         type: 'tween',
         delay: 0.3,
         duration: 0.5
      }
   }
}

const Portfolio = () => {
   return (
      <motion.div
         variants={staggerContainer}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.25 }}
         className="bg-[#f5f8fd] w-full"
      >
         <div className="text-black py-16 px-36 w-full">
            <Heading text="Portfolio" />
            <div className="flex flex-col">
               <div className=" flex justify-center justify-items-center columns-lg col-lg-12 ">
                  <ul className=" bg-white text-center m-auto mb-9 list-none border rounded-3xl px-4 py-1">
                     <li className="text-[#149ddd] inline-block pt-2 pb-2 px-4 text-sm">ALL</li>
                     <li className="inline-block pt-2 pb-2 px-4 text-sm  text-black mb-1"> APP</li>
                     <li className="inline-block pt-2 pb-2 px-4 text-sm  text-black mb-1">CARD</li>
                     <li className="inline-block pt-2 pb-2 px-4 text-sm  text-black mb-1">WEB</li>
                  </ul>
               </div>
               <div className="w-full ">
                  <div
                     className="grid grid-cols-3 gap-4 place-content-center"
                  >
                     {images.map((imageUrl, idx) => (
                        <motion.div
                           variants={slideUp}
                           initial="hidden"
                           whileInView="visible"
                           key={idx}
                        >
                           <img src={imageUrl} />
                        </motion.div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </motion.div>
   )
}

export default Portfolio