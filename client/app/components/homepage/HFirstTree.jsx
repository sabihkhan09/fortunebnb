"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import HeroImg from '../../../public/hero.jpg'
import { ChevronDown } from 'lucide-react'

import img1 from "../../../public/IMG-20251109-WA0012.jpg"
import img2 from "../../../public/IMG-20251109-WA0013.jpg"
import img3 from "../../../public/IMG-20251109-WA0015.jpg"
import img4 from "../../../public/IMG-20251109-WA0016.jpg"
import img5 from "../../../public/IMG-20251109-WA0017.jpg"
import img6 from "../../../public/IMG-20251109-WA0018.jpg"
import img7 from "../../../public/IMG-20251109-WA0019.jpg"
import img8 from "../../../public/IMG-20251109-WA0020.jpg"

export default function HFirstTree() {

  const sfxRef = useRef(null)

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  const playSound = () => {
    if (!sfxRef.current) return
    sfxRef.current.currentTime = 0
    sfxRef.current.play()
  }

  return (
    <>
      <audio ref={sfxRef} src="/meme.mp3" preload="auto" />

      {/* HERO SCREEN */}
      <div className="relative w-full h-screen overflow-hidden">

        <Image
          src={HeroImg}
          alt="Hero background"
          fill
          className="object-cover object-center scale-105 brightness-[.6] saturate-150 hue-rotate-[-10deg]"
          priority
        />

        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center space-y-6">
          <h1 className="text-5xl font-black uppercase tracking-wider animate-[pulse_1.5s_ease-in-out_infinite]">
            welcome to our meme world
          </h1>

          <p className="text-xl opacity-90 italic tracking-wide">
            Powered by pure chaos. Made to live on DEX.
          </p>

          <button
            onClick={scrollDown}
            className="absolute bottom-16 hover:scale-110 transition-all"
          >
            <ChevronDown size={60} className="animate-bounce" />
          </button>
        </div>
      </div>

      {/* MEME GALLERY */}
      <div className="relative w-full min-h-[200vh] bg-black flex flex-col items-center justify-start pt-44 gap-16 pb-32">

        <h2 className="uppercase text-white text-5xl font-black tracking-widest mb-8 animate-[pulse_1.8s_ease-in-out_infinite] drop-shadow-[0_0_25px_rgba(255,255,255,.4)]">
          the meme gallery
        </h2>

        <style>
          {`
            @keyframes floaty {
              0% { transform: translateY(0); }
              50% { transform: translateY(-15px); }
              100% { transform: translateY(0); }
            }
          `}
        </style>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-14 px-6 md:px-20 w-full max-w-7xl">
          {[img1,img2,img3,img4,img5,img6,img7,img8].map((im,i)=>(
            <div
              key={i}
              onMouseEnter={playSound}
              className="
                relative group cursor-pointer
                animate-[floaty_3.5s_ease-in-out_infinite]
              "
              style={{
                animationDelay: `${i * 0.25}s`,
                transform: `rotate(${(i - 4) * 3}deg)`,
              }}
            >
              <Image
                src={im}
                alt="meme"
                className="
                  rounded-xl
                  transition-all duration-300
                  shadow-[0_0_35px_rgba(255,255,255,.25)]
                  group-hover:scale-[1.45]
                  group-hover:rotate-[6deg]
                  group-hover:shadow-[0_0_50px_rgba(255,255,0,.7)]
                "
              />
            </div>
          ))}
        </div>

      </div>
    </>
  )
}
