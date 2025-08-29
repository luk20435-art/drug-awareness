"use client"

import React, { useState } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye, EyeOff, UserPlus, Sparkles, Shield, Mail, User, Calendar, MapPin, Phone } from "lucide-react"
import Link from 'next/link'

export default function RegisterPage() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState('')
  const [birthDay, setBirthDay] = useState('')
  const [birthMonth, setBirthMonth] = useState('')
  const [birthYear, setBirthYear] = useState('')
  const [education, setEducation] = useState('')
  const [occupation, setOccupation] = useState('')
  const [numberOfFamily, setNumberOfFamily] = useState('')
  const [income, setIncome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [focusedField, setFocusedField] = useState('')
  
  const { register } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (password !== confirmPassword) {
      setError('รหัสผ่านไม่ตรงกัน')
      return
    }
    
    setIsLoading(true)
    setError('')
    
    try {
      const success = await register(email, password, `${firstName} ${lastName}`)
      if (success) {
        router.push('/')
      } else {
        setError('เกิดข้อผิดพลาดในการสมัครสมาชิก')
      }
    } catch (err) {
      setError('เกิดข้อผิดพลาดในการสมัครสมาชิก')
    } finally {
      setIsLoading(false)
    }
  }

  const days = Array.from({length: 31}, (_, i) => i + 1)
  const months = [
    'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
    'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
  ]
  const years = Array.from({length: 80}, (_, i) => new Date().getFullYear() - i)

  const CircleLogo = () => (
    <div className="w-16 h-16 rounded-full bg-gradient-to-b from-blue-200 to-green-300 flex items-center justify-center relative overflow-hidden shadow-lg">
      {/* Sky */}
      <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-blue-200 to-blue-100">
        {/* Cloud */}
        <div className="absolute top-1.5 right-1.5 w-3 h-1.5 bg-white rounded-full opacity-80" />
        <div className="absolute top-0.5 right-0.5 w-1.5 h-1 bg-white rounded-full opacity-60" />
      </div>
      {/* Mountains/Hills */}
      <div className="absolute bottom-0 w-full h-1/2">
        <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[12px] border-b-green-500" />
        <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[10px] border-b-green-400" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[11px] border-b-green-600" />
      </div>
    </div>
  )

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 via-pink-50 to-orange-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse" />
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full opacity-20 animate-bounce" />
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 animate-ping" />
      
      <Card className="w-full max-w-lg shadow-2xl border-0 backdrop-blur-sm bg-white/80 relative z-10 transform hover:scale-[1.01] transition-all duration-300">
        {/* Glowing Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg opacity-20 blur-xl" />
        
        <CardHeader className="space-y-3 relative">
          <div className="flex items-center justify-center mb-2">
            <div className="relative">
              <CircleLogo />
              <Sparkles className="absolute -top-1 -right-1 w-6 h-6 text-yellow-400 animate-pulse" />
            </div>
          </div>
          <CardTitle className="text-xl text-center bg-gradient-to-r from-gray-800 via-purple-600 to-blue-600 bg-clip-text text-transparent font-bold">
            รูปโปรไฟล์
          </CardTitle>
          <CardDescription className="text-center text-gray-600 text-sm">
            กรอกข้อมูลเพื่อสร้างบัญชีใหม่
          </CardDescription>
        </CardHeader>
        
        <CardContent className="relative px-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 border-l-4 border-red-400 text-red-700 p-4 rounded-md text-sm flex items-center space-x-2 animate-shake">
                <Shield className="w-4 h-4" />
                <span>{error}</span>
              </div>
            )}
            
            {/* ชื่อ - สกุล */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-gray-700 font-medium">ชื่อ</Label>
                <div className={`relative group ${focusedField === 'firstName' ? 'transform scale-[1.02]' : ''} transition-all duration-200`}>
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    onFocus={() => setFocusedField('firstName')}
                    onBlur={() => setFocusedField('')}
                    className="pl-10 pr-4 py-2.5 border-2 border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 rounded-xl transition-all duration-300 bg-white/70"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-gray-700 font-medium">สกุล</Label>
                <div className={`relative group ${focusedField === 'lastName' ? 'transform scale-[1.02]' : ''} transition-all duration-200`}>
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    onFocus={() => setFocusedField('lastName')}
                    onBlur={() => setFocusedField('')}
                    className="pl-10 pr-4 py-2.5 border-2 border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 rounded-xl transition-all duration-300 bg-white/70"
                    required
                  />
                </div>
              </div>
            </div>

            {/* เพศ */}
            <div className="space-y-2">
              <Label className="text-gray-700 font-medium">เพศ</Label>
              <div className="flex space-x-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="ชาย"
                    checked={gender === 'ชาย'}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="text-gray-700">ชาย</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="หญิง"
                    checked={gender === 'หญิง'}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-4 h-4 text-pink-600 focus:ring-pink-500 focus:ring-2"
                  />
                  <span className="text-gray-700">หญิง</span>
                </label>
              </div>
            </div>

            {/* อายุ (ปี) */}
            <div className="space-y-2">
              <Label className="text-gray-700 font-medium">อายุ (ปี)</Label>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label className="text-sm text-gray-600">วัน</Label>
                  <Select value={birthDay} onValueChange={setBirthDay}>
                    <SelectTrigger className="mt-1 border-2 border-gray-200 focus:border-blue-400 rounded-xl bg-white/70">
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                      {days.map(day => (
                        <SelectItem key={day} value={day.toString()}>{day}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm text-gray-600">เดือน</Label>
                  <Select value={birthMonth} onValueChange={setBirthMonth}>
                    <SelectTrigger className="mt-1 border-2 border-gray-200 focus:border-blue-400 rounded-xl bg-white/70">
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                      {months.map((month, index) => (
                        <SelectItem key={index} value={(index + 1).toString()}>{month}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm text-gray-600">ปี</Label>
                  <Select value={birthYear} onValueChange={setBirthYear}>
                    <SelectTrigger className="mt-1 border-2 border-gray-200 focus:border-blue-400 rounded-xl bg-white/70">
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map(year => (
                        <SelectItem key={year} value={year.toString()}>{year + 543}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* ระดับการศึกษา */}
            <div className="space-y-2">
              <Label className="text-gray-700 font-medium">ระดับการศึกษา</Label>
              <Select value={education} onValueChange={setEducation}>
                <SelectTrigger className="border-2 border-gray-200 focus:border-green-400 rounded-xl bg-white/70">
                  <SelectValue placeholder="เลือกระดับการศึกษา" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ประถมศึกษา">ประถมศึกษา</SelectItem>
                  <SelectItem value="มัธยมศึกษาตอนต้น">มัธยมศึกษาตอนต้น</SelectItem>
                  <SelectItem value="มัธยมศึกษาตอนปลาย">มัธยมศึกษาตอนปลาย</SelectItem>
                  <SelectItem value="ประกาศนียบัตรวิชาชีพ">ประกาศนียบัตรวิชาชีพ</SelectItem>
                  <SelectItem value="อนุปริญญา">อนุปริญญา</SelectItem>
                  <SelectItem value="ปริญญาตรี">ปริญญาตรี</SelectItem>
                  <SelectItem value="ปริญญาโท">ปริญญาโท</SelectItem>
                  <SelectItem value="ปริญญาเอก">ปริญญาเอก</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* อาชีพ */}
            <div className="space-y-2">
              <Label htmlFor="occupation" className="text-gray-700 font-medium">อาชีพ</Label>
              <div className={`relative group ${focusedField === 'occupation' ? 'transform scale-[1.02]' : ''} transition-all duration-200`}>
                <Input
                  id="occupation"
                  type="text"
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                  onFocus={() => setFocusedField('occupation')}
                  onBlur={() => setFocusedField('')}
                  className="pl-4 pr-4 py-3 border-2 border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 rounded-xl transition-all duration-300 bg-white/70"
                />
              </div>
            </div>

            {/* จำนวนสมาชิกในครอบครัว */}
            <div className="space-y-2">
              <Label htmlFor="numberOfFamily" className="text-gray-700 font-medium">จำนวนสมาชิกในครอบครัว</Label>
              <div className={`relative group ${focusedField === 'numberOfFamily' ? 'transform scale-[1.02]' : ''} transition-all duration-200`}>
                <Input
                  id="numberOfFamily"
                  type="number"
                  value={numberOfFamily}
                  onChange={(e) => setNumberOfFamily(e.target.value)}
                  onFocus={() => setFocusedField('numberOfFamily')}
                  onBlur={() => setFocusedField('')}
                  className="pl-4 pr-4 py-3 border-2 border-gray-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-100 rounded-xl transition-all duration-300 bg-white/70"
                  placeholder="จำนวน"
                />
              </div>
            </div>

            {/* รายได้เฉลี่ยต่อเดือนในครั้งนั้น */}
            <div className="space-y-2">
              <Label htmlFor="income" className="text-gray-700 font-medium">รายได้เฉลี่ยต่อเดือนในครั้งนั้น</Label>
              <div className={`relative group ${focusedField === 'income' ? 'transform scale-[1.02]' : ''} transition-all duration-200`}>
                <Input
                  id="income"
                  type="number"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  onFocus={() => setFocusedField('income')}
                  onBlur={() => setFocusedField('')}
                  className="pl-4 pr-4 py-3 border-2 border-gray-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 rounded-xl transition-all duration-300 bg-white/70"
                  placeholder="บาท"
                />
              </div>
            </div>

            {/* เบอร์โทรศัพท์ */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium">เบอร์โทรศัพท์</Label>
              <div className={`relative group ${focusedField === 'email' ? 'transform scale-[1.02]' : ''} transition-all duration-200`}>
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField('')}
                  className="pl-10 pr-4 py-3 border-2 border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 rounded-xl transition-all duration-300 bg-white/70"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700 font-medium">รหัสผ่าน</Label>
              <div className={`relative group ${focusedField === 'password' ? 'transform scale-[1.02]' : ''} transition-all duration-200`}>
                <Shield className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="รหัสผ่านของคุณ"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField('')}
                  className="pl-10 pr-12 py-3 border-2 border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 rounded-xl transition-all duration-300 bg-white/70"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-all duration-200"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">ยืนยันรหัสผ่าน</Label>
              <div className={`relative group ${focusedField === 'confirmPassword' ? 'transform scale-[1.02]' : ''} transition-all duration-200`}>
                <Shield className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="ยืนยันรหัสผ่าน"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onFocus={() => setFocusedField('confirmPassword')}
                  onBlur={() => setFocusedField('')}
                  className="pl-10 pr-12 py-3 border-2 border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 rounded-xl transition-all duration-300 bg-white/70"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-all duration-200"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full py-2.5 text-base font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl border-0 relative overflow-hidden group"
              disabled={isLoading}
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                  กำลังสมัครสมาชิก...
                </>
              ) : (
                <>
                  <UserPlus className="mr-2 h-5 w-5" />
                  สมัครสมาชิก
                </>
              )}
            </Button>
            
            <div className="text-center text-gray-600 bg-gray-50 py-4 rounded-xl border border-gray-100">
              มีบัญชีอยู่แล้ว?{" "}
              <Link 
                href="/login" 
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 font-medium transition-all duration-300 hover:underline"
              >
                เข้าสู่ระบบ
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}