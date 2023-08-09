'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Scene from '@/app/components/Scene'
import Link from 'next/link'


const page = () => {
  return (
    <main className=" w-screen h-screen">
      <h1> Ball</h1>
      <Canvas className=" h-screen w-screen">
        <Suspense fallback={null}>
        <Scene/>
        </Suspense>
      </Canvas>
    </main>
  )
}

export default page