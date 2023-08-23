import React, { useEffect, useRef } from 'react'
import { DirectionalLight, PlaneGeometry } from 'three'
import { angleToRadius } from '../utils/angle'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'

import { snapshot, useSnapshot } from 'valtio'
import state from '../store'
import * as THREE from "three"

// Tables
import Table from "app/components/3dComponents/tables/Table.jsx"
import Table2 from "app/components/3dComponents/tables/Table2.jsx"
import Table3 from "app/components/3dComponents/tables/Table3.jsx"
import Table4 from "app/components/3dComponents/tables/Table4.jsx"
import Table5 from "app/components/3dComponents/tables/Table5.jsx"



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
      
       { snap.currentTable==="Table1" &&
        <Table castShadow/>
       }
        { snap.currentTable==="Table2" &&
        <Table2 castShadow/>
       }
       { snap.currentTable==="Table3" &&
        <Table3 castShadow/>
       }
       { snap.currentTable==="Table4" &&
        <Table4 castShadow/>
       }
       { snap.currentTable==="Table5" &&
        <Table5 castShadow/>
       }
       
        {/*Floor*/}
        <mesh rotation={[-(angleToRadius(90)),0,0]} receiveShadow>
            <ringGeometry args={[1,5,32]} />
            <meshStandardMaterial color = '#ffffff' />
        </mesh>


    {/* Ambient Light useGLTF('/Models/chair1.glb')
    const texture1 = new TextureLoader().load("../textures/fabric1/fabric_pattern_07_col_1_1k.png")
 
    */}

    <ambientLight args={["#000000", 1]} />

    {/* Spot Light */}
    <spotLight args={["#ffffff", 100, 10, angleToRadius(45), 0.4]} position= {[-3, 1.2,0]} castShadow/>

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