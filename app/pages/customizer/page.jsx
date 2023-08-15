'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Scene from '@/app/components/Scene'
import Link from 'next/link'


const page = () => {
  return (
    <main className=" w-screen h-screen flex">
     
     <div className='relative bg-white h-screen w-72 shadow-xl '>
     </div>
      <Canvas className=" h-screen w-screen relative" shadows>
        <Suspense fallback={null}>
        <Scene/>
        </Suspense>
      </Canvas>

    
     
    </main>
  )
}

export default page