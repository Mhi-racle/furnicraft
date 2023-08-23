import React from 'react'
import Image from 'next/image';


// images
import grid from "@/public/assets/images/9.jpg"

  export default function PromptCard () {
  return (
    <section className='mt-[50px] bg-gray-200 w-[320px] h-[400px]  app '>
    <p className='relative right-[80px] -top-[85px] text-[10px] '>Made-to-measure</p>
    <Image className='-mt-[40px]'
        src={grid}
        alt='grid'
        height= {200}
        width= {150}
    />
    <p className='font-bold mt-[25px]'>Shelving</p>
    <button className=' bg-black text-white w-[140px] h-[40px] text-[12px] mt-[15px]'>START NOW</button>
   </section>
  )
}

