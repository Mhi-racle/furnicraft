/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/Models/wadrobe1.glb --shadow, s 
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import state from '@/app/store'
import * as THREE from "three"

export default function Wadrobe1(props) {
 
  const Texture1 = new THREE.TextureLoader().load("../../textures/wood1/dark_wooden_planks_diff_1k.jpg")
  const Texture2 = new THREE.TextureLoader().load("../../textures/wood2/synthetic_wood_diff_1k.jpg")
  const Texture3 = new THREE.TextureLoader().load("../../textures/wood3/wood_floor_deck_diff_1k.jpg")
  const Texture4 = new THREE.TextureLoader().load("../../textures/wood4/wood_cabinet_worn_long_diff_1k.jpg")
  const Texture5 = new THREE.TextureLoader().load("../../textures/wood5/weathered_planks_diff_1k.jpg")
  const Texture6 = new THREE.TextureLoader().load("../../textures/wood6/weathered_brown_planks_diff_1k.jpg")
  const Texture7 = new THREE.TextureLoader().load("../../textures/wood7/planks_brown_10_diff_1k.jpg")

  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Models/wadrobe1.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model018">
          <group name="39e45e36097f4a2f9e851e62bb1906c5fbx">
            <group name="RootNode011">
              <group name="OldSzafa_hull">
                <mesh name="OldSzafa_hull_1_0" 
                geometry={nodes.OldSzafa_hull_1_0.geometry} 
                material-color = {state.currentColor}
                material={materials.material} castShadow>

      {state.currentTexture==="Texture1" &&<meshStandardMaterial map={Texture1} roughness={0.8}  />} 
     {state.currentTexture==="Texture2" &&<meshStandardMaterial map={Texture2} roughness={0.8} />} 
     {state.currentTexture==="Texture3" &&<meshStandardMaterial map={Texture3} roughness={0.8} />} 
     {state.currentTexture==="Texture4" &&<meshStandardMaterial map={Texture4} roughness={0.8} />} 
     {state.currentTexture==="Texture5" &&<meshStandardMaterial map={Texture5} roughness={0.8} />} 
     {state.currentTexture==="Texture6" &&<meshStandardMaterial map={Texture6} roughness={0.8} />} 
     {state.currentTexture==="Texture7" &&<meshStandardMaterial map={Texture7} roughness={0.8} />} 
     {state.currentTexture==="Texture8" &&<meshStandardMaterial map={Texture8} roughness={0.8} />} 
     {state.currentTexture==="Texture9" &&<meshStandardMaterial map={Texture9} roughness={0.8} />} 

                  </mesh>
              </group>
              <group name="OldSzafa_Ornaments">
                <mesh name="OldSzafa_Ornaments_2_0" geometry={nodes.OldSzafa_Ornaments_2_0.geometry} material={materials.material_1} />
                <mesh name="OldSzafa_Ornaments_2_0001" geometry={nodes.OldSzafa_Ornaments_2_0001.geometry} material={materials.material_1} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Models/wadrobe1.glb')
