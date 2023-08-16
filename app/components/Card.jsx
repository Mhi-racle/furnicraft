import React from 'react'
import Image from 'next/image'
import Image1 from "public/images/Bed-PNG-HD-Image.png"

export default function Card(){
    <>
    <div className=" app h-36 m-3 shadow-md w-64">
    <p className=' font-Poppins relative right-3 text-[16px] font-bold w-full top-2'>
      Bedroom Furniture
    </p>
        <Image
            src= {Image1}
            alt='bed image'
            height={100}
            width={100}
            className=' left-10 relative'
            />
    </div>
    </>
}
