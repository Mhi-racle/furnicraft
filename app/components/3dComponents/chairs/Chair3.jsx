/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/Models/chair3.glb --transform --shadows, s 
Files: public/Models/chair3.glb [5.79MB] > chair3-transformed.glb [1.02MB] (82%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import state from '@/app/store'

export default function Chair3(props) {
  


  const { nodes, materials } = useGLTF('/Models/chair3.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_5.geometry} material={materials.phongE2}
       scale={[state.width* 0.695,state.height* 0.695,state.thickness* 0.695 ]} 
       material-color = {state.currentColor} />
    </group>
  )
}

useGLTF.preload('/Models/chair3.glb')
