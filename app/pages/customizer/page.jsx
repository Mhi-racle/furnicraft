'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Scene from '@/app/components/Scene'
import Link from 'next/link'


const page = () => {
  return (
    <main className=" w-screen h-screen flex">
     
     <div className=' bg-white h-screen w-72'>
     </div>
      <Canvas className=" h-screen w-full " shadows>
        <Suspense fallback={null}>
        <Scene/>
        </Suspense>
      </Canvas>

    
     
    </main>
  )
}

export default page