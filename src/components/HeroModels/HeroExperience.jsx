import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Robot_playground } from './Robot_playground.jsx'
import * as THREE from 'three'

const Scene = () => {
  const spotLightRef = useRef()

  useFrame((state) => {
    if (!spotLightRef.current) return;

    // Calculate distance from center (0,0) to pointer position
    const dist = Math.sqrt(
      Math.pow(state.pointer.x, 2) + Math.pow(state.pointer.y, 2)
    )

    // Closer to center = higher intensity
    const proximity = Math.max(0, 1 - dist)

    // Base intensity 50, max boost +150
    spotLightRef.current.intensity = 50 + (proximity * 150)

    // Dynamic light position
    spotLightRef.current.position.x = -5 + (state.pointer.x * 2)
    spotLightRef.current.position.y = 5 + (state.pointer.y * 2)
  })

  return (
    <>
      <ambientLight intensity={0.5} color="#1a1a40" />

      {/* Rim Glow (Pink-Purple) */}
      <spotLight
        ref={spotLightRef}
        position={[-5, 5, -5]}
        intensity={70}
        color="#d946ef"
        angle={0.5}
        penumbra={1}
      />

      {/* Main Key Light */}
      <directionalLight position={[5, 5, 5]} intensity={3} color="#ffffff" />

      <Robot_playground position={[0, -2.5, 0]} scale={[0.9, 0.9, 0.9]} />
    </>
  )
}

const HeroExperience = () => {
  return (
    <Canvas camera={{ position: [0, 3, 15], fov: 45 }}>
      <Scene />
    </Canvas>
  )
}

export default HeroExperience
