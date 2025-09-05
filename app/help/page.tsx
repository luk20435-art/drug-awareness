"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  MapPin,
  Clock,
  ArrowLeft,
  AlertCircle,
  Heart,
  Users,
  Shield,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Headphones,
  Star,
  CheckCircle,
  Home,
  Newspaper,
  User,
} from "lucide-react"
import { useState } from "react"
import Image from "next/image"; 

export default function HelpPage() {
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Animated Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        
        <div className="relative py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 backdrop-blur-sm"
                onClick={() => (window.location.href = "/")}
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <div className="flex items-center gap-3">
                <div className="text-4xl">🆘</div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text">
                    ขอความช่วยเหลือ
                  </h1>
                  <p className="text-white/90 text-lg">ช่องทางการขอความช่วยเหลือและคำปรึกษา</p>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </header>

      {/* Emergency Alert */}
      <section className="py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-6 text-white shadow-2xl animate-bounce">
            <div className="flex items-center gap-4">
              <div className="text-3xl">🚨</div>
              <div>
                <p className="font-bold text-xl">กรณีฉุกเฉิน</p>
                <p className="text-lg opacity-90">
                  หากเป็นเหตุฉุกเฉินที่เกี่ยวข้องกับยาเสพติด โปรดโทร  
                  <span className="font-black text-yellow-300 text-2xl mx-2">1165</span> 
                  ทันที
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="min-h-screen from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center mt-8 mb-20">
                {/* กล่อง A4 แบบ responsive */}
                <div
                  className="relative w-full
                    max-w-[350px]    /* มือถือ */
                    sm:max-w-[400px] /* tablet เล็ก */
                    md:max-w-[500px] /* tablet ใหญ่ */
                    lg:max-w-[500px] /* desktop */
                    xl:max-w-[600px] /* จอใหญ่ */
                    aspect-[210/297]
                    rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-white"
                >
                  <Image
                    src="/images/stop_drug.jpg" // 🔄 รูปโปสเตอร์ของคุณ
                    alt="โปสเตอร์ A4"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
      </main>
     
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
