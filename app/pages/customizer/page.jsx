'use client'
import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Image from 'next/image'

import Scene from '@/app/components/Scene'
import Link from 'next/link'
import Nav from '@/app/components/Nav'
import { useSnapshot} from 'valtio'
import { proxy, use } from 'valtio'
import state from '@/app/store'

// Images
import Image1 from "public/images/chairs/armchair.png"
import Image2 from "public/images/chairs/chair2.png"
import Image3 from "public/images/chairs/chair3.png"
import Image4 from "public/images/chairs/chair4.png"
import Image5 from "public/images/chairs/chair5.png"
import Image6 from "public/images/chairs/chair6.png"
import Image7 from "public/images/chairs/chair7.png"
import Image8 from "public/images/chairs/chair8.png"
import Image9 from "public/images/chairs/chair9.png"




import arrowIcon from "public/images/arrow-icon-1177.png"


import Card from '@/app/components/Card'
const page = () => {

  const [open, setOpen] = useState(true)
  const snap = useSnapshot(state)

  function toggleChair1(){
    state.current = !"Chair1";
  }

  return (
    <main className=' h-screen app overflow-hidden w-screen'>
 <nav className=' w-full h-9'>
        </nav>
    <section className=" w-full h-full flex absolute overflow-hidden ">
      <div className=' bg-white h-full w-60 p-6 shadow-xl absolute'>
        
  
  {/* Main Side Tab */}
  <section className={`${open ? " w-56 bg-white" : "w-0"} h-full flex overflow-y-scroll duration-300 relative` }>

 
    <section className=' shadow-md h-full w-full overflow-y-scroll'>

        {/* Should be a component */}
      <div className=" app h-44 m-3 shadow-md w-64 cursor-pointer " >
        <Image
            src= {Image1}
            alt='chair 1 image'
            height={700}
            width={700}
            className='hover:scale-150 duration-300'
            onClick={() => {state.current="Chair1"}}
            />
    </div>
    <div className=" app h-44 m-3 shadow-md w-64 cursor-pointer">
    
        <Image
            src= {Image2}
            alt='chair 2 image'
            height={700}
            width={700}
            className='hover:scale-150 duration-300'
            onClick={() => {state.current="Chair2"}}
            />
    </div>
    <div className=" app h-44 m-3 shadow-md w-64 cursor-pointer">
    
        <Image
            src= {Image3}
            alt='chair 3 image'
            height={700}
            width={700}
            className='hover:scale-150 duration-300'
            onClick={() => {state.current="Chair3"}}
            />
    </div>

    <div className=" app h-44 m-3 shadow-md w-64 cursor-pointer">
        <Image
            src= {Image4}
            alt='chair 4 image'
            height={700}
            width={700}
            className='hover:scale-150 duration-300'
            onClick={() => {state.current="Chair4"}}
            />
    </div>
   
    <div className=" app h-44 m-3 shadow-md w-64 cursor-pointer">
        <Image
            src= {Image5}
            alt='chair 5 image'
            height={700}
            width={700}
            className='hover:scale-150 duration-300'
            onClick={() => {state.current="Chair5"}}
            />
    </div>
    <div className=" app h-44 m-3 shadow-md w-64 cursor-pointer">
        <Image
            src= {Image6}
            alt='chair 6 image'
            height={700}
            width={700}
            className='hover:scale-150 duration-300'
            onClick={() => {state.current="Chair6"}}
            />
    </div>

    <div className=" app h-44 m-3 shadow-md w-64 cursor-pointer">
        <Image
            src= {Image7}
            alt='chair 7 image'
            height={700}
            width={700}
            className='hover:scale-150 duration-300'
            onClick={() => {state.current="Chair7"}}
            />
    </div>

    <div className=" app h-44 m-3 shadow-md w-64 cursor-pointer">
        <Image
            src= {Image8}
            alt='chair 8 image'
            height={700}
            width={700}
            className='hover:scale-150 duration-300'
            onClick={() => {state.current="Chair8"}}
            />
    </div>
    <div className=" app h-44 m-3 shadow-md w-64 cursor-pointer">
        <Image
            src= {Image9}
            alt='chair 9 image'
            height={700}
            width={700}
            className='hover:scale-150 duration-300'
            onClick={() => {state.current="Chair9"}}
            />
    </div>

      </section>
  </section>
     </div>
  
  <>
      <Canvas className=" h-full w-screen " shadows>
        <Suspense fallback={null}>
        <Scene/>
        </Suspense>
      </Canvas>
</>
      {/* Toggle Icon */}
      <Image src={arrowIcon} height={50} width={50} alt='arrow' 
      className={`${open ? "right-[70em]  scale-75 rotate-180" : "right-[85em] scale-50 rotate-0 " } absolute cursor-pointer duration-500 top-40  border-2 border-black  rounded-full shadow-md  `}
      onClick={() => setOpen(!open)} />
     
     {/* Properties Tab */}
    <section className=' h-[400px] w-96 absolute app right-0 flex self-center shadow-2xl bg-white rounded-md'>
      <h1 className=' font-Poppins'> Properties</h1>
    </section>

    </section>
    </main>
  )
}

export default page