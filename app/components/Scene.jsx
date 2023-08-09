import React, { useEffect, useRef } from 'react'
import { PlaneGeometry } from 'three'
import { angleToRadius } from '../utils/angle'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
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
      <PerspectiveCamera makeDefault position={[0,1,5]}/>
      <OrbitControls autoRotate={true} ref={orbitControlRef}  />


      
        {/*Ball*/}
        <mesh position={[0,0.5,0]}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color= '#FFFFFF'/>
        </mesh>

        {/*Plane Geometry*/}
        <mesh rotation={[-(angleToRadius(90)),0,0]}>
            <planeGeometry args={[7,7]} />
            <meshStandardMaterial color = '#0000FF' />
            </mesh>
    {/* Ambient Light */}

    <ambientLight args={["##ffffff", 3]} />
    </>
  )
}

export default Scene