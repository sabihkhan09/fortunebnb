"use client"

import Link from "next/link"
import { X, Send, LineChart } from "lucide-react"   // Send icon = telegram, LineChart = dex

export default function Navbar() {
  return (
    <header className="w-full h-[60px] flex items-center justify-between px-6 sm:px-12 bg-black/5 backdrop-blur-md text-white fixed z-50 border-b border-white/10">

      {/* left logo */}
      <Link href="/" className="flex items-center gap-2">
        {/* <img src="/mascot.png" className="w-[58px] h-[58px]" /> */}
        <span className="uppercase font-bold text-xl hidden sm:block">4tunebnb</span>
      </Link>

      {/* center links */}
      <nav className="hidden md:flex items-center gap-10 font-medium text-xl">
        <Link href="#about" className="hover:text-green-300 transition">About</Link>
        <Link href="#buy" className="hover:text-green-300 transition">Buy</Link>
        <Link href="#roadmap" className="hover:text-green-300 transition">Roadmap</Link>
      </nav>

      {/* social icons */}
      <div className="flex items-center gap-7 text-white">

        {/* twitter */}
        <Link href="https://twitter.com/your_page" target="_blank" className="hover:scale-125 transition">
          <X className="w-7 h-7" />
        </Link>

        {/* telegram */}
        <Link href="https://t.me/your_group" target="_blank" className="hover:scale-125 transition">
          <Send className="w-7 h-7" />
        </Link>

        {/* DEX */}
        <Link href="https://dexscreener.com/" target="_blank" className="hover:scale-125 transition">
          <LineChart className="w-7 h-7" />
        </Link>

      </div>
    </header>
  )
}
