"use client"
import { motion } from "framer-motion"

export default function MemeTicker() {
  return (
    <div className="w-full bg-yellow-400 py-4 overflow-hidden border-y-4 border-black">
      <motion.div
        className="flex gap-16 text-black font-black text-3xl uppercase tracking-widest"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 8,      // shorter = faster
          ease: "linear"
        }}
      >
        {Array(10).fill("$4Tunebnb 🚀🔥").map((x,i)=>(
          <span key={i}>{x}</span>
        ))}
      </motion.div>
    </div>
  )
}
