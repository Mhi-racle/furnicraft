/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/Models/chair4.glb --transform --shadows, s 
Files: public/Models/chair4.glb [3.73MB] > chair4-transformed.glb [390.35KB] (90%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Chair4(props) {
  const { nodes, materials } = useGLTF('/Models/chair4.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.chair_chair_0.geometry} material={materials.chair} scale={0.794} />
    </group>
  )
}

useGLTF.preload('/Models/chair4.glb')
