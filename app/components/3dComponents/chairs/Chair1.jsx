/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/Models/chair1.glb --transform --shadows, s 
Files: public/Models/chair1.glb [3.99MB] > chair1-transformed.glb [429.73KB] (89%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useSnapshot } from 'valtio'
import state from '@/app/store'

export default function Model(props) {
  const snap = useSnapshot(state)
  
  const { nodes, materials } = useGLTF('/Models/chair1.glb')
  return (
    <group {...props} dispose={null}>
      < mesh geometry={nodes['Cylinder001_Material_#2146932551_0'].geometry} material={materials.Material_2146932551} rotation={[-Math.PI / 2, 0, 0]} 
      scale={[state.width * 0.001, state.thickness * 0.001,state.height *0.001]} material-color="gray"  />
    </group>
  )
}

useGLTF.preload('/Models/chair1.glb')
