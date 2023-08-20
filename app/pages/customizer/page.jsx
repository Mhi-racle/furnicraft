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
import { SketchPicker } from 'react-color'
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


import ResetIcon from "public/images/reset.png"
import arrowIcon from "public/images/arrow-icon-1177.png"


import Texture1 from "public/textures/fabric1/fabric_pattern_07_col_1_1k.png"
import Texture2 from "public/textures/denim1.blend/textures/denmin_fabric_02_diff_1k.jpg"
import Texture3 from "public/textures/denim2.blend/textures/denim_fabric_diff_1k.jpg"
import Texture4 from "public/textures/fabric2.blend/textures/fabric_pattern_05_col_01_1k.png"
import Texture5 from "public/textures/leather1.blend/textures/leather_red_02_coll1_1k.png"
import Texture6 from "public/textures/leather2.blend/textures/brown_leather_albedo_1k.jpg"
import Texture7 from "public/textures/leather3.blend/textures/leather_white_diff_1k.jpg"
import Texture8 from "public/textures/leather4/textures/fabric_leather_02_diff_1k.jpg"
import Texture9 from "public/textures/leather5.blend/textures/leather_red_03_coll1_1k.png"

import Card from '@/app/components/Card'
const page = () => {

  const [open, setOpen] = useState(true)
  const snap = useSnapshot(state)

  function ResetDimensions(){
    state.height = 1
    state.width = 1
    state.thickness = 1
  }

  const handleOnChange = (color) =>{
    console.log(color)
      state.currentColor = (color.hex)
  }

  return (
    <main className=' h-screen app overflow-hidden w-screen select-none'>
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
<section className=' h-[780px] w-48 md:w-80  absolute right-0 flex-row overflow-y-scroll self-center shadow-2xl bg-white rounded-md'>
      <header className=' font-Poppins  w-full bg-slate-100 p-3 h-10 text-[14px] text-stone-500 shadow-lg'> 
      <p> Properties </p>
      </header>

      <section className='flex  p-3 '>
        <Image src={Image1} height={80} width={80} alt='Arm Chair' />
        <h1 className='relative top-7 text-[13px] ml-2'> Arm Sofa Chair</h1>
      </section>
      <hr/>

      <section className='h-full'>
      {/* Size Section */}
      <section className= " w-full overflow-y-scroll ">
      <section className='flex ml-3  p-3 '>
       <div className=' h-full gap-4 w-full'>
         <h1 className=' text-[14px]'> Size</h1>

         <>
            <p className=' text-[13px] mt-4 text-neutral-500'> Width</p>
            <input type='range' min={1} max={5} step={0.2} value={state.width} onChange={(e) => {state.width=e.target.value}} className=' w-40 '/>
            <p1 className=" m-6 relative bottom-[4px] text-[13px]  ">{state.width + " mm"}</p1>
          </>
          <>
            <p className=' text-[13px] mt-4 text-neutral-500'> Height</p>
            <input type='range' min={1} max={5} step={0.2} value={state.height} onChange={(e) => {state.height=e.target.value}} className=' w-40 '/>
            <p1 className=" m-6 relative bottom-[4px] text-[13px]  ">{state.height + " mm"}</p1>
          </>
          <>
            <p className=' text-[13px] mt-4 text-neutral-500'> Thickness</p>
            <input type='range' min={1} max={5} step={0.2} value={state.thickness} onChange={(e) => {state.thickness=e.target.value}} className=' w-40 '/>
            <p1 className=" m-6 relative bottom-[4px] text-[13px]  ">{state.thickness + " mm"}</p1>
          </>
          <Image src={ResetIcon} height={20} width={20} alt='reset icon' className=' hover:cursor-pointer hover:bg-slate-100 mt-2 ' onClick={ResetDimensions}/>
          <hr className=' w-full mt-6'/>
       </div>
      </section>

     
      </section>
       {/* Material Section  */}
       <section className=' mr-6 overflow-y-scroll p-3 w-full'>
       <div className=' h-full gap-4 w-full'>
         <h1 className=' text-[14px]'> Material</h1>

         <section className=' grid grid-cols-5 overflow-y-scroll w-full mt-4 mr-4 gap-4 h-full p-3'>
           <Image src = {Texture1} height={50} width={50} alt='texture 1' className=' rounded-full shadow-md hover:scale-110 hover:cursor-pointer' />
           <Image src = {Texture2} height={50} width={50} alt='texture 1' className=' rounded-full shadow-md hover:scale-110 hover:cursor-pointer'/>
           <Image src = {Texture3} height={50} width={50} alt='texture 1' className=' rounded-full shadow-md hover:scale-110 hover:cursor-pointer'/>
           <Image src = {Texture4} height={50} width={50} alt='texture 1' className=' rounded-full shadow-md hover:scale-110 hover:cursor-pointer'/>
           <Image src = {Texture5} height={50} width={50} alt='texture 1' className=' rounded-full shadow-md hover:scale-110 hover:cursor-pointer'/>
           <Image src = {Texture6} height={50} width={50} alt='texture 1' className=' rounded-full shadow-md hover:scale-110 hover:cursor-pointer'/>
           <Image src = {Texture7} height={50} width={50} alt='texture 1' className=' rounded-full shadow-md hover:scale-110 hover:cursor-pointer'/>
           <Image src = {Texture8} height={50} width={50} alt='texture 1' className=' rounded-full shadow-md hover:scale-110 hover:cursor-pointer'/>
           <Image src = {Texture9} height={50} width={50} alt='texture 1' className=' rounded-full shadow-md hover:scale-110 hover:cursor-pointer'/>
          </section>
        
      
          <hr className=' w-full mt-6'/>
       </div>

       <SketchPicker 
          color={state.currentColor} 
          onChangeComplete={ handleOnChange}
          className=' absolute h-60 mt-8 hover:cursor-pointer '
          />
        
      </section>
      </section>
</section>

    </section>
    </main>
  )
}

export default page