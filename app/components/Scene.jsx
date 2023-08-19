import React, { useEffect, useRef } from 'react'
import { DirectionalLight, PlaneGeometry } from 'three'
import { angleToRadius } from '../utils/angle'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'

import { snapshot, useSnapshot } from 'valtio'
import state from '../store'
import * as THREE from "three"

// Chairs
import Chair1 from "app/components/3dComponents/chairs/Chair1"
import Chair2 from "app/components/3dComponents/chairs/Chair2"
import Chair3 from "app/components/3dComponents/chairs/Chair3"
import Chair4 from "app/components/3dComponents/chairs/Chair4"
import Chair5 from "app/components/3dComponents/chairs/Chair5"
import Chair6 from "app/components/3dComponents/chairs/NewChair7"
import Chair7 from "app/components/3dComponents/chairs/NewChair6"
import Chair8 from "app/components/3dComponents/chairs/Chair8"
import Chair9 from "app/components/3dComponents/chairs/Chair9"



import { useFrame } from '@react-three/fiber'
const Scene = () => {

  const orbitControlRef = useRef(null) // created because I want the orbit controller to persist amongst renders.. Think of it as a variable
  
  const snap = useSnapshot(state)

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

      {/* {mesh} */}
      
       { snap.current==="Chair1" &&
        <Chair1 castShadow/>
       }
        { snap.current==="Chair2" &&
        <Chair2 castShadow/>
       }
       { snap.current==="Chair3" &&
        <Chair3 castShadow/>
       }
       { snap.current==="Chair4" &&
        <Chair4 castShadow/>
       }
       { snap.current==="Chair5" &&
        <Chair5 castShadow/>
       }
       { snap.current==="Chair6" &&
        <Chair6 castShadow/>
       }
       { snap.current==="Chair7" &&
        <Chair7 castShadow/>
       }
       { snap.current==="Chair8" &&
        <Chair8 castShadow/>
       }
       { snap.current==="Chair9" &&
        <Chair9 castShadow/>
       }
       
        {/*Floor*/}
        <mesh rotation={[-(angleToRadius(90)),0,0]} receiveShadow>
            <ringGeometry args={[1,5,32]} />
            <meshStandardMaterial color = '#ffffff' />
        </mesh>


    {/* Ambient Light useGLTF('/Models/chair1.glb')*/}

    <ambientLight args={["##ffffff", 1]} />

    {/* Spot Light */}
    <spotLight args={["#000000", 20, 10, angleToRadius(45), 0.4]} position= {[-3, 1,0]} castShadow/>

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