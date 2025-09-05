"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowLeft, Edit3, Eye, EyeOff, Home, LogOut, Mail, Newspaper, User } from "lucide-react"

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    const loggedInUser = localStorage.getItem("loggedInUser")

    if (isLoggedIn && loggedInUser) {
      setUser(JSON.parse(loggedInUser))
    } else {
      alert("กรุณาเข้าสู่ระบบก่อนเข้าหน้าโปรไฟล์")
      router.push("/login")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("loggedInUser")
    alert("ออกจากระบบสำเร็จ")
    router.push("/login")
  }

  if (!user) return null

  return (
    <div>
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
               
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text">
                    ข่าวสารต่างๆ
                  </h1>
                </div>
              </div>
            </div> 
          </div>
        </div>
        </header>

        <div className="flex min-h-screen items-center justify-center from-indigo-900 via-purple-900 to-pink-900">

            <Card className="max-w-sm w-full shadow-xl rounded-2xl border-0 bg-white/95 backdrop-blur-xl relative overflow-hidden">

            {/* Profile header with avatar */}
            <div className="relative text-center">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1">
                โปรไฟล์ผู้ใช้
                </CardTitle>
                <CardDescription className="text-gray-500 text-base">
                ข้อมูลบัญชีของคุณ
                </CardDescription>
            </div>

            <CardContent className="space-y-4 px-6 pb-6">
                {/* ชื่อ */}
                <div className="group">
                <div className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 transition-all duration-300 group-hover:shadow-md group-hover:border-blue-200">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-2">
                    <User className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                    <p className="text-sm font-medium text-gray-500 mb-1">ชื่อ</p>
                    <p className="text-base font-semibold text-gray-800">{user.name}</p>
                    </div>
                </div>
                </div>

                {/* อีเมล */}
                <div className="group">
                <div className="flex items-center p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100 transition-all duration-300 group-hover:shadow-md group-hover:border-purple-200">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-2">
                    <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                    <p className="text-sm font-medium text-gray-500 mb-1">อีเมล</p>
                    <p className="text-base font-semibold text-gray-800">{user.email}</p>
                    </div>
                </div>
                </div>

                {/* รหัสผ่าน */}
                <div className="group">
                <div className="flex items-center p-3 bg-gradient-to-r from-pink-50 to-red-50 rounded-xl border border-pink-100 transition-all duration-300 group-hover:shadow-md group-hover:border-pink-200">
                    <div className="flex-1">
                    <p className="text-sm font-medium text-gray-500 mb-1">รหัสผ่าน</p>
                    <div className="flex items-center justify-between">
                        <p className="text-base font-semibold text-gray-800 flex-1">
                        {showPassword ? user.password : '••••••••••••'}
                        </p>
                        <button
                        type="button"
                        className="ml-2 p-1 text-gray-400 hover:text-pink-500 hover:bg-pink-100 rounded-lg transition-all duration-200"
                        onClick={() => setShowPassword(!showPassword)}
                        >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                    </div>
                    </div>
                </div>
                </div>

                {/* Logout */}
                <Button
                onClick={handleLogout}
                variant="outline"
                className="w-full border-2 border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 font-semibold py-2 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                <LogOut className="w-4 h-4 mr-2" />
                ออกจากระบบ
                </Button>
            </CardContent>
            </Card>
        </div>

        <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t px-2 py-2 shadow-lg z-50">
        <div className="flex justify-between max-w-md mx-auto">
          {[ 
            { icon: Home, label: 'หน้าหลัก', href: '/' },
            { icon: Newspaper, label: 'ข่าวสาร', href: '/new' }, 
            { icon: User, label: 'โปรไฟล์', href: '/profile' }, 
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <button
                key={index}
                className={`flex flex-col items-center text-xs transition-colors duration-200 px-3 py-2 rounded-lg ${
                  item.href === "/new" 
                    ? "text-purple-600 bg-purple-50" 
                    : "text-gray-500 hover:text-purple-600 hover:bg-purple-50"
                }`}
                onClick={() => (window.location.href = item.href)}
              >
                <IconComponent className="w-6 h-6 mb-1" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  )
}
