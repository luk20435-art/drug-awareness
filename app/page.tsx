"use client"

import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Video, HelpCircle, Shield, FileText, Star, ChevronRight, Home, Search, Heart, User, LogOut, Newspaper } from "lucide-react"

export default function HomePage() {
  const router = useRouter()
  const [hoveredCard, setHoveredCard] = useState(null)
  const [scrollY, setScrollY] = useState(0)
 
  // ข้อมูลหัวข้อ
  const mainTopics = [
    { id: "knowledge", title: "คลังความรู้", icon: BookOpen, href: "/knowledge", gradient: "from-emerald-500 to-teal-500", bgPattern: "bg-emerald-50" },
    { id: "videos", title: "สื่อ/วิดีโอ", icon: Video, href: "/videos", gradient: "from-red-500 to-pink-500", bgPattern: "bg-red-50" },
    { id: "help", title: "ขอความช่วยเหลือ", icon: HelpCircle, href: "/help", gradient: "from-blue-500 to-indigo-500", bgPattern: "bg-blue-50" },
    { id: "prevention", title: "มาตรการป้องกัน", icon: Shield, href: "/prevention", gradient: "from-green-500 to-emerald-500", bgPattern: "bg-green-50" },
    { id: "quiz", title: "แบบทดสอบ", icon: FileText, href: "/quiz", gradient: "from-purple-500 to-violet-500", bgPattern: "bg-purple-50" },
    { id: "feedback", title: "แบบประเมินความพึงพอใจ", icon: Star, href: "/feedback", gradient: "from-yellow-500 to-orange-500", bgPattern: "bg-yellow-50" },
  ];

  // ตรวจสอบล็อกอินปลอม
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (!isLoggedIn) {
      router.push('/login')
    }
  }, [router])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    router.push('/login')
  }

  return (
   <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-6 relative shadow-md mb-6">
        {/* Title อยู่ตรงกลาง */}
        <h1 className="text-3xl font-bold text-center">รู้ทันยาเสพติด</h1>

        {/* ปุ่ม Logout อยู่ด้านขวา */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <Button 
            variant="ghost" 
            className="flex items-center gap-2 text-white hover:bg-white/20" 
            onClick={handleLogout}
          >
            <LogOut className="w-5 h-5" /> Logout
          </Button>
        </div>
      </header>

      {/* Main Topics */}
      <section className="py-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {mainTopics.map((topic) => {
            const IconComponent = topic.icon;
            return (
              <Card key={topic.id}
                className={`group relative bg-white/80 shadow-md cursor-pointer rounded-xl transition-transform hover:scale-105`}
                onMouseEnter={() => setHoveredCard(topic.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardHeader className="text-center pt-4 pb-2">
                  <div className={`mx-auto w-12 h-12 bg-gradient-to-r ${topic.gradient} rounded-xl flex items-center justify-center mb-2`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-md font-bold text-gray-800">{topic.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center pb-4">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => (window.location.href = topic.href)}
                  >
                    เข้าสู่หัวข้อ
                  </Button>
                </CardContent>
              </Card>
            );
          })}
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
