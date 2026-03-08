import React from 'react'
import { Canvas } from '@react-three/fiber'
import Particles from '../components/Particles.jsx'
import Button from '../components/Button.jsx'
import { words } from '../constants/index.js'
import HeroExperience from '../components/HeroModels/HeroExperience.jsx'

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const Hero = () => {

  useGSAP(() => {
    gsap.fromTo('.hero-text h1', { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'power2.inOut' })
  })

  return (
    <section id="hero" className="relative w-full h-screen">
      <div className="absolute top-0 left-0 z-0 w-full h-full">
        <Canvas>
          <Particles />
        </Canvas>
      </div>

      <div className="hero-layout">
        {/*LEFT: HERO CONTENT*/}
        <header className="flex flex-col justify-center h-full">
          <div className="hero-text">
            <h1 className="text-4xl md:text-6xl">
              Hii, it's me Pratishtha <span className="glow-dot" title="Pratishtha">·</span>
            </h1>
            <div className="story-text">
              <p>
                I like understanding how things work, piece by piece.
                Working with AI, machine learning, and systems.
              </p>
            </div>
            <div className="pointer-events-auto mt-8">
              <Button text="View Projects" id="work" />
            </div>
          </div>
        </header>

        {/*RIGHT: 3D MODEL*/}
        <div className="hero-3d-layout">
          <HeroExperience />
        </div>
      </div>
    </section>
  )
}

export default Hero
