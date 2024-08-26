
import React from 'react'
import './card.css'
import Image from 'next/image'
import chatIMageDark from '../../../public/chatdark.png'
import chatIMagelight from '../../../public/chatdark.png'

const Card = ({}) => {


  return (
    <>

    <div className=' min-w-[280px] mx-2 max-w-[380px] h-[320px] bg-custom-primarylight/30 dark:bg-custom-primarydark/30  border dark:border-custom-primarydark/90 flex flex-col justify-center transform transition duration-500 items-center relative rounded-lg hover:scale-125 p-2'>
    <div className='content bg-custom-primarylight dark:bg-custom-primarydark w-full h-full rounded-md relative border-2 dark:border-customBg-bgcoldark'>
    <div className='w-[45%] h-auto overflow-hidden     absolute right-0 top-0 p-1 flex flex-col justify-center items-center'>
      <h2  className='dark:text-customBg-bgcoldark text-customBg-bgcollight font-extrabold text-4xl border-b-4 dark:border-customBg-bgcoldark break-words'>Card</h2>
      <p  className='dark:text-customBg-bgcoldark text-customBg-bgcollight font-mono text-l dark:border-customBg-bgcoldark break-words py-4'>is simply dummy text of the printing and typesetting industry. </p>

    </div> 
    <div className='w-80% h-auto overflow-hidden absolute bottom-0 p-2'>
      <p className='text-black'></p>

    </div>
  
    </div>   
    <div className=' absolute top-4 left-4   rounded-full border-2 border-customBg-bgcollight dark:border-custom-primarydark bg-customBg-bgcoldark  p-3 hover:scale-110'>
      <Image src={chatIMagelight} alt='img'  className='w-[100%] h-[100%] ' />
    </div>
       
    <div>
    </div>
    </div>
    </>

  )
}

export default Card