'use client'
import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Image from 'next/image'

import Scene from '@/app/components/Scene'
import Link from 'next/link'
import Nav from '@/app/components/Nav'
import { useSnapshot } from 'valtio'
import state from '@/app/store'

// Images
import Image1 from "public/images/armchair png.png"
import Image2 from "public/images/NicePng_closet-png_534015.png"
import Image3 from "public/images/table-png-32677.png"
import Image4 from "public/images/SeekPng.com_modern-chair-png_2764997 (1).png"
import arrowIcon from "public/images/arrow-icon-1177.png"


import Card from '@/app/components/Card'
const page = () => {

  const [open, setOpen] = useState(true)
 
  return (
    <section className=' h-screen app overflow-hidden w-screen'>
 <nav className=' w-full h-9'>
          <p>Hello</p>

        </nav>
    <main className=" w-full h-full flex absolute overflow-hidden ">
      <div className=' bg-white h-full w-60 p-6 shadow-xl absolute'>
        
  
  {/* Main Side Tab */}
  <section className={`${open ? " w-60" : "w-0"} h-full flex overflow-y-scroll duration-300 relative` }>

  
    
 
    <section className=' shadow-md h-full w-full overflow-y-scroll'>

        {/* Should be a component */}
      <div className=" app h-44 m-3 shadow-md w-64 cursor-pointer">
        <Image
            src= {Image1}
            alt='bed image'
            height={500}
            width={500}
            className=''
            />
    </div>
    <div className=" app h-44 m-3 shadow-md w-64 cursor-pointer">
    <p className=' font-Poppins relative text-[14px] font-bold w-full top-6 right-5'>
      Wardrobe
    </p>
        <Image
            src= {Image2}
            alt='bed image'
            height={70}
            width={70}
            className=' left-10 relative '
            />
    </div>
    <div className=" app h-44 m-3 shadow-md w-64 cursor-pointer">
    <p className=' font-Poppins relative right-3 text-[14px] font-bold w-full top-2'>
      Tables
    </p>
        <Image
            src= {Image3}
            alt='bed image'
            height={120}
            width={120}
            className=' left-10 relative'
            />
    </div>

    <div className=" app h-44 m-3 shadow-md w-64 cursor-pointer">
    <p className=' font-Poppins relative right-3 text-[14px] font-bold w-full top-2 '>
      Chair
    </p>
        <Image
            src= {Image4}
            alt='bed image'
            height={120}
            width={120}
            className=' left-10 relative'
            />
    </div>
   

      </section>
  </section>
     </div>
      <Canvas className=" h-full w-screen " shadows>
        <Suspense fallback={null}>
        <Scene/>
        </Suspense>
      </Canvas>

      {/* Toggle Icon */}
      <Image src={arrowIcon} height={50} width={50} alt='arrow' 
      className={`${open ? "right-[67em]" : "right-[85em] rotate-0" } absolute cursor-pointer duration-500 top-40  border-2 border-black rounded-full shadow-md rotate-180 `}
      onClick={() => setOpen(!open)} />
     
    
    </main>
    </section>
  )
}

export default page