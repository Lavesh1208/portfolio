import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Info = ({ title, detail }) => {
   return (
      <div className='flex items-center text-lg'>
         <MdOutlineKeyboardArrowRight
            size={30}
            className='text-[#149ddd] -ml-2'
         />
         <p className='font-semibold ml-[1px] mr-2'>{title}:</p>
         <p>{detail}</p>
      </div>
   )
}

const Bio = () => {
   return (
      <div className='flex'>
         <div className="flex flex-col justify-start w-[50%] gap-3">
            <Info title='Birthday' detail='1 May 1995' />
            <Info title='Website' detail='www.example.com' />
            <Info title='Phone' detail='+123 456 7890' />
            <Info title='City' detail='New York, USA' />
         </div>
         <div className="flex flex-col justify-start w-[50%] gap-3">
            <Info title='Age' detail='30' />
            <Info title='Degree' detail='Master' />
            <Info title='PhEmailone' detail='email@example.com' />
            <Info title='Freelance' detail='Available' />
         </div>
      </div>
   )
}

export default Bio