import { motion } from 'framer-motion';
import { staggerContainer } from "../../utils/motion";

import Heading from "../Heading";
import Bio from "./Bio";

const imgVariant = {
   hidden: {
      opacity: 0,
   },
   visible: {
      opacity: 1,
      transition: {
         type: 'tween',
         delay: 0.3,
         duration: 0.5
      }
   },
}

const bioVariant = {
   hidden: {
      opacity: 0,
      x: '100%'
   },
   visible: {
      opacity: 1,
      x: 0,
      transition: {
         type: 'tween',
         delay: 0.4,
         duration: 0.7
      }
   }
}

const About = () => {
   return (
      <motion.div
         variants={staggerContainer}
         initial="hidden"
         whileInView="show"
         viewport={{once: false, amount: 0.25}}
         className="flex flex-col py-16 px-36 gap-5"
      >
         <Heading text="About" />

         <div className="flex gap-6">
            <motion.div
               variants={imgVariant}
               initial="hidden"
               whileInView="visible"
               className="w-[35%] h-[auto]">
               <img
                  className="w-full h-full object-cover"
                  src="./images/profile.jpg" alt="profile-image"
               />
            </motion.div>
            
            <motion.div
               variants={bioVariant}
               initial="hidden"
               whileInView="visible"
               className="flex flex-col gap-4 w-[65%]"
            >
               <h3 className="text-2xl font-semibold text-[#122D52]">UI/UX Designer & Web Developer.</h3>
               <p className="italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               </p>

               <Bio />
               
               <div>
                  <p>
                     Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                  </p>
               </div>
            </motion.div>
         </div>
      </motion.div>
   )
}

export default About