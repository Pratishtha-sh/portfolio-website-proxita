import React from 'react'
import { counterItems } from '../constants/index.js'

const AnimatedCounter = () => {
  if (!counterItems) return null;
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map(({ value, suffix, label }) => (
          <div key={label} className="flex flex-col items-center justify-center gap-2">
            <p className="text-4xl font-bold text-white transition-colors duration-500 group-hover:text-white-50">{value}{suffix}</p>
            <p className="text-white-50">{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimatedCounter