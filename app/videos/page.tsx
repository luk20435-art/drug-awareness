"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button" 
import { Search, Play, Eye, ArrowLeft, Filter, Star, Clock, Users, TrendingUp, Home, Heart, User, Newspaper } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import React from "react"

export default function VideosPage() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const videos = [
  { id: "i0alhu6FNAs", title: "วิดีโอ 1" },
  { id: "i0E3lWCttdo", title: "วิดีโอ 2" },
  { id: "qvf6ak8Cdq8", title: "วิดีโอ 3" },
  { id: "3CXgx00EuSo", title: "วิดีโอ 4" },
  { id: "2Bfm7TX7l8I", title: "วิดีโอ 5" },
  // สามารถเพิ่มวิดีโออื่น ๆ ได้
];

  return (
    <div className="min-h-screen from-slate-50 via-blue-50 to-indigo-100 pb-20">
      {/* Animated Header */}
      <header className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white py-6 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-700/20 animate-pulse"></div>
        <div className="max-w-4xl mx-auto flex items-center gap-4 relative z-10">
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl transition-all duration-300 hover:scale-105"
            onClick={() => (window.location.href = "/")}
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="flex-1">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">
              สื่อวิดีโอการศึกษา
            </h1>
            <p className="text-blue-100 text-sm mt-1 flex items-center gap-2">
              <Play className="w-4 h-4" />
              วิดีโอคุณภาพสูงเพื่อการเรียนรู้และป้องกัน
            </p>
          </div>
        </div>
      </header>

      {/* Hero Featured Video */}
      <section className="py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-800 mt-4">สื่อ</h2>
            <TrendingUp className="w-6 h-6 text-orange-500" />
          </div> 
          <main className="min-h-screen from-slate-50 via-blue-50 to-indigo-100 flex justify-center items-start">
            <div className="flex flex-col gap-6 w-full max-w-[1400px]">
              
              {/* โปสเตอร์ตัวที่ 1 */}
              <div className="relative w-full rounded-xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/pan.jpg"
                  alt="โปสเตอร์ 1"
                  className="w-full h-auto object-contain"
                  width={1400} // กำหนด width จริงของภาพ
                  height={0}   // ให้ h-auto ปรับตามสัดส่วน
                  priority
                />
              </div>

              {/* โปสเตอร์ตัวที่ 2 */}
              <div className="relative w-full rounded-xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/panpub_one.jpg"
                  alt="โปสเตอร์ 2"
                  className="w-full h-auto object-contain"
                  width={1400} // กำหนด width จริงของภาพ
                  height={0}   // ให้ h-auto ปรับตามสัดส่วน
                  priority
                />
              </div> 
            </div>
          </main> 
        </div>
      </section> 

      {/* Video Grid */}
        <section className="py-8 px-4 mb-8 from-slate-50 via-blue-50 to-indigo-100">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-800">วิดีโอ</h2>
              <Users className="w-6 h-6 text-purple-500" />
            </div>

            {/* Grid วิดีโอ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="relative w-full pb-[56.25%] overflow-hidden rounded-lg shadow-lg cursor-pointer"
                  onClick={() =>
                    setPlayingVideo((prev) => (prev === video.id ? null : video.id))
                  }
                >
                  {playingVideo === video.id ? (
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={`Thumbnail ${video.title}`}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
  


      {/* Bottom Navigation */}
     <nav className="fixed bottom-0 left-0 right-0 bg-white border-t px-2 py-2 shadow-md">
        <div className="flex justify-between max-w-md mx-auto">
          {[
            { icon: Home, label: 'หน้าหลัก', active: true, href: '/' },
            { icon: Newspaper, label: 'ข่าวสาร', href: '/new' }, 
            { icon: User, label: 'โปรไฟล์', href: '/profile' }, 
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <button
                key={index}
                className={`flex flex-col items-center text-xs ${item.active ? 'text-purple-600' : 'text-gray-500'}`}
                onClick={() => {
                  if(item.label === 'ออกจากระบบ') {
                    localStorage.removeItem("isLoggedIn");
                    window.location.href = item.href;
                  } else {
                    window.location.href = item.href;
                  }
                }}
              >
                <IconComponent className="w-6 h-6 mb-1" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
     </nav>
    </div>
  )
}