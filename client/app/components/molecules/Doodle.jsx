"use client"
import React, { useEffect, useRef } from 'react'
import doodleimg from "../../../public/doodleone.png"
import Image from 'next/image'

const Doodle = () => {


 const doodleRef = useRef(null)

    useEffect(() => {
  let t = 0

  const tick = () => {
    t += 0.04  // smaller = slower & smoother

    const jitterX = Math.cos(t) * 3   // 3px amplitude
    const jitterY = Math.sin(t) * 3

    if (doodleRef.current) {
      doodleRef.current.style.transform =
        `translate(${jitterX}px,${jitterY}px) rotate(${Math.sin(t) * 6}deg)`
    }

    requestAnimationFrame(tick)
  }
  tick()
}, [])


  // arrow scroll
  
  return (
    <div> <div ref={doodleRef} className="pointer-events-none fixed top-100 left-0 z-20">
        <Image
          src={doodleimg}
          alt="doodle"
          width={220}
          height={220}
          draggable={false}
          className="drop-shadow-[0_0_30px_rgba(255,255,255,.4)]"
        />
      </div>
      </div>
  )
}

export default Doodle