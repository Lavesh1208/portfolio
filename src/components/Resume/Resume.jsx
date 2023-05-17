import { staggerContainer } from "../../utils/motion";
import Heading from "../Heading";
import { motion } from 'framer-motion';

const slideIn = (direction) => (
   {
      hidden: {
         opacity: 0,
         x: direction === 'right' ? '-100%' : direction === 'left' ? '100%' : 0,
         delay: 1,
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
)

const Resume = () => {
   return (
      <motion.div
         variants={staggerContainer}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.25 }}
         className="text-black text-lg py-16 px-36"
      >
         <Heading text={"Resume"} />

         <div
            className='flex text-[#272829] font-sans'>

            <motion.div
               variants={slideIn('right')}
               initial="hidden"
               whileInView="visible"
               className="w-1/2"
            >
               <h3 className='  font-bold  text-[#050d18] text-2xl my-5'>Summary</h3>
               <div className=' relative pl-5 -scroll-mt-0.5 border-l-2 border-[#1f5297] pb-0 pt-0 pr-0 '>
                  <h4 className=' text-lg font-semibold font-sans text-[#050d18] mt-0 mb-2.5'>Fake Person</h4>
                  <p className='box-border italic mt-0 mb-4 pr-2'>
                     Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.
                  </p>
                  <ul className='mt-0 mb-4 pl-5 block list-disc '>
                     <li className=' pb-2.5 list-item '>Portland par 127,Orlando, FL</li>
                     <li className=' pb-2.5'>(123) 456-7891</li>
                     <li className=' pb-2.5'>alice.barkley@example.com</li>
                  </ul>
               </div>
               <h3 className=' text-2xl font-bold font-sans  my-5 text-black'>Education</h3>
               <div className='relative pl-5 -scroll-mt-0.5 border-l-2 border-[#1f5297] pb-5 pt-0 pr-0 '>
                  <h4 className=' text-lg font-semibold font-sans text-[#050d18] mt-0 mb-2.5'>Master of Fine Arts & Graphic Design</h4>
                  <h5 className=' text-base bg-[#e4edf9] py-1.5 px-4 inline-block font-semibold mb-2.5 mt-0 font-sans'>2015-2016</h5>
                  <p className='mt-0 mb-4 italic'>Rochester Institute of Technology, Rochester, NY</p>
                  <p className='box-border mt-0 mb-4'>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
               </div>
               <div className='relative pl-5 -scroll-mt-0.5 border-l-2 border-[#1f5297] pb-5 pt-0 pr-0 '>
                  <h4 className=' text-lg font-semibold font-sans text-[#050d18] mt-0 mb-2.5'>Bachelor of Fine Arts & Graphic Design</h4>
                  <h5 className=' text-base bg-[#e4edf9] py-1.5 px-4 inline-block font-semibold mb-2.5 mt-0 font-sans'>2010-2014</h5>
                  <p className='mt-0 mb-4 italic'>Rochester Institute of Technology, Rochester, NY</p>
                  <p className='box-border pr-4 mt-0'>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
               </div>
            </motion.div>

            {/* Right Side */}
            <motion.div
               variants={slideIn('left')}
               initial="hidden"
               whileInView="visible"
               className="w-1/2"
            >
               <h3 className='font-bold text-[#050d18] text-2xl my-5'>Professional Experience</h3>
               <div className='relative pl-5 -scroll-mt-0.5 border-l-2 border-[#1f5297] pb-5 pt-0 pr-0 '>
                  <h4 className=' text-lg font-semibold font-sans text-[#050d18] mt-0 mb-2.5'>SENIOR GRAPHIC DESIGN SPECIALIST</h4>
                  <h5 className=' text-base bg-[#e4edf9] py-1.5 px-4 inline-block font-semibold mb-2.5 mt-0 font-sans'>2019-Present</h5>
                  <p className='mt-0 mb-4 italic'>Experion, New York, NY</p>
                  <ul className='mt-0 mb-4 pl-5 block list-disc '>
                     <li className=' pb-2.5 list-item '>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                     <li className='pb-2.5'>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li>
                     <li className='pb-2.5'>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                     <li className="pb-2.5">Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                  </ul>

                  <h4 className='text-lg font-semibold font-sans text-[#050d18] mt-0 mb-2.5'>SENIOR GRAPHIC DESIGN SPECIALIST</h4>
                  <h5 className='text-base bg-[#e4edf9] py-1.5 px-4 inline-block font-semibold mb-2.5 mt-0 font-sans'>2017-2018</h5>
                  <p className='mt-0 mb-4 italic'>Experion, New York, NY</p>
                  <ul className='mt-0 pl-5 block list-disc'>
                     <li className=' pb-2.5 list-item '>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                     <li className='pb-2.5'>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li>
                     <li className='pb-2.5'>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                     <li className="pb-2.5">Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                  </ul>
               </div>
            </motion.div>
         </div>
      </motion.div>
   )
}

export default Resume