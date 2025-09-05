"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, LogIn, Loader2 } from "lucide-react"
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    setTimeout(() => {
      // ดึง users จาก localStorage
      const users = JSON.parse(localStorage.getItem("users") || "[]")
      const user = users.find((u: any) => u.email === email && u.password === password)

      if (user) {
        localStorage.setItem("isLoggedIn", "true")
        localStorage.setItem("loggedInUser", JSON.stringify(user))
        router.push('/') // ไปหน้า Home
      } else {
        setError("อีเมลหรือรหัสผ่านไม่ถูกต้อง")
      }

      setIsLoading(false)
    }, 800)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-300 via-pink-300 to-orange-200 p-6">
      <Card className="w-full max-w-md shadow-2xl rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 text-center text-white">
          <CardTitle className="text-3xl font-bold tracking-tight">เข้าสู่ระบบ</CardTitle>
          <CardDescription className="mt-2 text-indigo-100">
            กรอกอีเมลและรหัสผ่านเพื่อเริ่มใช้งาน
          </CardDescription>
        </div>
        <CardContent className="bg-white p-6">
          {error && <div className="bg-red-50 border-l-4 border-red-500 p-3 mb-4 text-red-700">{error}</div>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">อีเมล</Label>
              <Input
                id="email"
                type="email"
                placeholder="อีเมลของคุณ"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="transition-all duration-200 focus:border-indigo-500 focus:ring focus:ring-indigo-200 rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">รหัสผ่าน</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="รหัสผ่าน"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pr-10 transition-all duration-200 focus:border-indigo-500 focus:ring focus:ring-indigo-200 rounded-lg"
                />
                <button
                  type="button"
                  aria-label={showPassword ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-500 transition-colors duration-200"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full font-semibold py-4 text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500 text-white shadow-lg transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  กำลังเข้าสู่ระบบ...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <LogIn className="mr-2 h-5 w-5" />
                  เข้าสู่ระบบ
                </div>
              )}
            </Button>

            <div className="text-center text-sm text-gray-500">
              ยังไม่มีบัญชี?{" "}
              <Link href="/register" className="text-indigo-600 font-medium hover:underline">
                สมัครสมาชิก
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
