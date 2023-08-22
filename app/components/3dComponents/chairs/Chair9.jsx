/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/Models/chair9.glb --transform --shadows, s 
Files: public/Models/chair9.glb [2.76MB] > chair9-transformed.glb [307.71KB] (89%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import state from '@/app/store'

export default function Chair9(props) {
  const { nodes, materials } = useGLTF('/Models/chair9.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.chair_middle001_Material003_0.geometry} 
    scale={[state.width* 1,state.height* 1,state.thickness* 1]}
      material={materials['Material.003']}
      material-color = {state.currentColor} />
    </group>
  )
}

useGLTF.preload('/Models/chair9.glb')
