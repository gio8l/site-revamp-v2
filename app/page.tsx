"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5">
          <div className="absolute inset-0 border border-gray-500 rotate-45 rounded-2xl"></div>
          <div className="absolute inset-12 border border-gray-500 rotate-45 rounded-xl"></div>
          <div className="absolute inset-24 border border-gray-500 rotate-45 rounded-lg"></div>
        </div>
      </div>

      {/* Main content card */}
      <Card
        className={`relative z-10 bg-gray-800/40 border-gray-600/30 p-10 max-w-2xl w-full backdrop-blur-md shadow-2xl transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="space-y-8">
          {/* Top - Name and description */}
          <div className="text-center space-y-6">
            <div className="space-y-3">
              <h1 className="text-5xl font-light text-white tracking-wide">gio8l</h1>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto"></div>
            </div>
            <p className="text-gray-300 text-base leading-relaxed font-light">
              hi! im gio! here you will find my social media pages!
            </p>
          </div>

          {/* Bottom - Social media links grid */}
          <div className="grid grid-cols-4 gap-3">
            <a
              href="https://discord.gg/PRMYACwh7a"
              className="bg-gray-700/50 hover:bg-gray-600/60 border border-gray-600/40 hover:border-gray-500/60 text-white py-3 rounded-xl text-xs font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm text-center"
            >
              discord
            </a>
            <a
              href="https://github.com/gio8l"
              className="bg-gray-700/50 hover:bg-gray-600/60 border border-gray-600/40 hover:border-gray-500/60 text-white py-3 rounded-xl text-xs font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm text-center"
            >
              github
            </a>
            <a
              href="https://instagram.com/gio8l_"
              className="bg-gray-700/50 hover:bg-gray-600/60 border border-gray-600/40 hover:border-gray-500/60 text-white py-3 rounded-xl text-xs font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm text-center"
            >
              instagram
            </a>
            <a
              href="https://tiktok.com/@gio8l"
              className="bg-gray-700/50 hover:bg-gray-600/60 border border-gray-600/40 hover:border-gray-500/60 text-white py-3 rounded-xl text-xs font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm text-center"
            >
              tiktok
            </a>
            <a
              href="https://twitch.tv/gio8l"
              className="bg-gray-700/50 hover:bg-gray-600/60 border border-gray-600/40 hover:border-gray-500/60 text-white py-3 rounded-xl text-xs font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm text-center"
            >
              twitch
            </a>
            <a
              href="https://x.com/gio8ll"
              className="bg-gray-700/50 hover:bg-gray-600/60 border border-gray-600/40 hover:border-gray-500/60 text-white py-3 rounded-xl text-xs font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm text-center"
            >
              x
            </a>
            <a
              href="https://youtube.com/@gio8l.online"
              className="bg-gray-700/50 hover:bg-gray-600/60 border border-gray-600/40 hover:border-gray-500/60 text-white py-3 rounded-xl text-xs font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm text-center"
            >
              youtube
            </a>
          </div>

          <div className="text-center pt-4 border-t border-gray-600/30">
            <p className="text-gray-400 text-sm font-light">for business inquiries: gio@gio8l.online</p>
            <p className="text-gray-400 text-sm font-light">rip gio8l.lol</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
