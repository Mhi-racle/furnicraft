import React, { useEffect, useRef } from 'react'
import { DirectionalLight, PlaneGeometry } from 'three'
import { angleToRadius } from '../utils/angle'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import * as THREE from "three"

import { useFrame } from '@react-three/fiber'
const Scene = () => {

  const orbitControlRef = useRef(null) // created because I want the orbit controller to persist amongst renders.. Think of it as a variable
// useFrame((state) => {
//   if(!!orbitControlRef.current){
//     const {x, y} = state.mouse
//     orbitControlRef.current.setAzimuthalAngle(-angleToRadius(x * 24));
//     orbitControlRef.current.update()
//   }
  
  
// })

useEffect(() => {
  if(!!orbitControlRef.current){
      console.log(orbitControlRef.current)
      
  }

},[orbitControlRef.current] )
  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0,1,5]}/>
      <OrbitControls  ref={orbitControlRef}  />


      
        {/*Ball*/}
        <mesh position={[0,0.5,0]} castShadow>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color= '#333333' metalness={0.6} roughness={0.2}/>
        </mesh>

        {/*Floor*/}
        <mesh rotation={[-(angleToRadius(90)),0,0]} receiveShadow>
            <planeGeometry args={[20,20]} />
            <meshStandardMaterial color = '#ffffff' />
        </mesh>


    {/* Ambient Light */}

    <ambientLight args={["##ffffff", 2]} />

    {/* Spot Light */}
    <spotLight args={["#ffffff", 15, 7, angleToRadius(45), 0.4]} position= {[-3, 1,0]} castShadow/>

    {/* Environment */}
    <Environment background>

      <mesh>
        <sphereGeometry args={[50, 100, 100]} />
       <meshBasicMaterial side={THREE.BackSide} color='##ffffff' />
      </mesh>
    </Environment>

    </>
  )
}

export default Scene