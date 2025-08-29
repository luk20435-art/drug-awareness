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

export default function HelpPage() {
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    urgency: "normal",
  })

  const emergencyContacts = [
    {
      id: 1,
      name: "สายด่วนป้องกันยาเสพติด",
      number: "1165",
      description: "บริการ 24 ชั่วโมง ให้คำปรึกษาและความช่วยเหลือ",
      type: "emergency",
      available: "24/7",
      color: "from-red-500 to-red-600",
      icon: "🚨",
    },
    {
      id: 2,
      name: "สายด่วนสุขภาพจิต",
      number: "1323",
      description: "ให้คำปรึกษาด้านสุขภาพจิตและการฟื้นฟู",
      type: "mental",
      available: "24/7",
      color: "from-blue-500 to-blue-600",
      icon: "🧠",
    },
    {
      id: 3,
      name: "ศูนย์ช่วยเหลือสังคม",
      number: "1300",
      description: "ช่วยเหลือด้านสังคมและครอบครัว",
      type: "social",
      available: "08:30-16:30",
      color: "from-green-500 to-green-600",
      icon: "🤝",
    },
  ]

  const supportCenters = [
    {
      id: 1,
      name: "ศูนย์ฟื้นฟูยาเสพติด กรุงเทพฯ",
      address: "123 ถนนพหลโยธิน เขตจตุจักร กรุงเทพฯ 10900",
      phone: "02-123-4567",
      services: ["ฟื้นฟู", "รักษา", "ให้คำปรึกษา"],
      hours: "จันทร์-ศุกร์ 08:00-17:00",
      rating: 4.8,
    },
    {
      id: 2,
      name: "โรงพยาบาลธัญญารักษ์",
      address: "456 ถนนรัชดาภิเษก เขตห้วยขวาง กรุงเทพฯ 10310",
      phone: "02-234-5678",
      services: ["รักษา", "ฟื้นฟู", "ตรวจสุขภาพ"],
      hours: "24 ชั่วโมง",
      rating: 4.9,
    },
    {
      id: 3,
      name: "มูลนิธิช่วยเหลือผู้ติดยาเสพติด",
      address: "789 ถนนสุขุมวิท เขตวัฒนา กรุงเทพฯ 10110",
      phone: "02-345-6789",
      services: ["ให้คำปรึกษา", "สนับสนุน", "ฟื้นฟู"],
      hours: "จันทร์-เสาร์ 09:00-18:00",
      rating: 4.7,
    },
  ]

  const faqData = [
    {
      id: 1,
      question: "ฉันสงสัยว่าคนใกล้ตัวติดยาเสพติด ควรทำอย่างไร?",
      answer:
        "ควรสังเกตสัญญาณเตือน เช่น พฤติกรรมเปลี่ยนแปลง การนอนหลับผิดปกติ อารมณ์แปรปรวน หากมีความกังวล ควรปรึกษาผู้เชี่ยวชาญหรือโทรสายด่วน 1165 เพื่อขอคำแนะนำ",
      category: "สังเกตสัญญาณ",
    },
    {
      id: 2,
      question: "การรักษาและฟื้นฟูใช้เวลานานแค่ไหน?",
      answer:
        "ระยะเวลาการรักษาขึ้นอยู่กับหลายปัจจัย เช่น ประเภทของยาเสพติด ระยะเวลาการใช้ สภาพร่างกายและจิตใจ โดยทั่วไปการฟื้นฟูอาจใช้เวลา 3-12 เดือน หรือมากกว่า",
      category: "การรักษา",
    },
    {
      id: 3,
      question: "ค่าใช้จ่ายในการรักษาเป็นอย่างไร?",
      answer:
        "โรงพยาบาลของรัฐให้บริการรักษาฟรีหรือค่าใช้จ่ายต่ำ มีศูนย์ฟื้นฟูของรัฐที่ไม่เสียค่าใช้จ่าย สำหรับเอกชนจะมีค่าใช้จ่ายแตกต่างกันไป ควรสอบถามข้อมูลก่อนเข้ารับการรักษา",
      category: "ค่าใช้จ่าย",
    },
    {
      id: 4,
      question: "ครอบครัวควรให้การสนับสนุนอย่างไร?",
      answer:
        "ครอบครัวมีบทบาทสำคัญ ควรให้กำลังใจ ไม่ตำหนิ เข้าใจว่าการติดยาเสพติดเป็นโรค ควรเรียนรู้เกี่ยวกับการฟื้นฟู และอาจต้องเข้าร่วมการบำบัดครอบครัวด้วย",
      category: "การสนับสนุน",
    },
    {
      id: 5,
      question: "หากกลับไปใช้ยาเสพติดอีก ควรทำอย่างไร?",
      answer:
        "การกลับไปใช้ยาเสพติดซ้ำ (Relapse) เป็นเรื่องปกติในกระบวนการฟื้นฟู ไม่ควรท้อแท้ ควรกลับเข้าสู่การรักษาใหม่ทันที และปรับแผนการรักษาให้เหมาะสมมากขึ้น",
      category: "การฟื้นฟู",
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("ส่งคำขอความช่วยเหลือเรียบร้อยแล้ว เจ้าหน้าที่จะติดต่อกลับภายใน 24 ชั่วโมง")
    setFormData({ name: "", phone: "", email: "", message: "", urgency: "normal" })
  }

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
                  <span className="font-black text-yellow-300 text-2xl mx-2">1669</span> 
                  หรือ 
                  <span className="font-black text-yellow-300 text-2xl mx-2">1165</span> 
                  ทันที
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">📞</div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              สายด่วนช่วยเหลือ
            </h2>
            <p className="text-gray-600 mt-2">บริการคำปรึกษาและความช่วยเหลือ</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emergencyContacts.map((contact, index) => (
              <Card key={contact.id} className={`hover:scale-105 transition-all duration-300 shadow-xl border-0 overflow-hidden group`}>
                <div className={`h-2 bg-gradient-to-r ${contact.color}`}></div>
                <CardHeader className="relative">
                  <div className="absolute -top-6 right-4 text-4xl">{contact.icon}</div>
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${contact.color} text-white text-2xl font-bold mb-3`}>
                      {contact.number}
                    </div>
                    <CardTitle className="text-xl mb-2">{contact.name}</CardTitle>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {contact.available}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-sm mb-6 leading-relaxed">
                    {contact.description}
                  </CardDescription>
                  <Button 
                    className={`w-full bg-gradient-to-r ${contact.color} hover:shadow-lg transform hover:-translate-y-1 transition-all`}
                    onClick={() => (window.location.href = `tel:${contact.number}`)}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    โทรเลย
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Help Request Form */}
      <section className="py-8 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">✍️</div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              ส่งคำขอความช่วยเหลือ
            </h2>
            <p className="text-gray-600 mt-2">กรอกข้อมูลเพื่อให้เจ้าหน้าที่ติดต่อกลับ</p>
          </div>
          
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-t-lg">
              <CardTitle className="text-xl">แบบฟอร์มขอความช่วยเหลือ</CardTitle>
              <CardDescription className="text-purple-100">
                ข้อมูลของคุณจะถูกเก็บเป็นความลับ
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold mb-3 block text-gray-700">ชื่อ-นามสกุล</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="กรอกชื่อของคุณ"
                      className="border-2 focus:border-purple-500 rounded-xl"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-3 block text-gray-700">เบอร์โทรศัพท์</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="กรอกเบอร์โทรศัพท์"
                      className="border-2 focus:border-purple-500 rounded-xl"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold mb-3 block text-gray-700">อีเมล (ไม่บังคับ)</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="กรอกอีเมล"
                    className="border-2 focus:border-purple-500 rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-3 block text-gray-700">ระดับความเร่งด่วน</label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                    className="w-full p-3 border-2 focus:border-purple-500 rounded-xl bg-white"
                  >
                    <option value="normal">🟢 ปกติ</option>
                    <option value="urgent">🟡 เร่งด่วน</option>
                    <option value="emergency">🔴 ฉุกเฉิน</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold mb-3 block text-gray-700">รายละเอียดปัญหา</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="อธิบายปัญหาหรือสิ่งที่ต้องการความช่วยเหลือ..."
                    rows={5}
                    className="border-2 focus:border-purple-500 rounded-xl"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-lg py-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  ส่งคำขอความช่วยเหลือ
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support Centers */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🏥</div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              ศูนย์ช่วยเหลือและรักษา
            </h2>
            <p className="text-gray-600 mt-2">สถานที่ให้บริการรักษาและฟื้นฟู</p>
          </div>
          
          <div className="space-y-6">
            {supportCenters.map((center) => (
              <Card key={center.id} className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden group">
                <div className="bg-gradient-to-r from-green-400 to-blue-400 h-1"></div>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl">
                      🏥
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-xl text-gray-800">{center.name}</CardTitle>
                        <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-semibold text-yellow-700">{center.rating}</span>
                        </div>
                      </div>
                      <CardDescription className="text-gray-600">{center.address}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
                      <Phone className="w-5 h-5 text-blue-500" />
                      <span className="font-medium">{center.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                      <Clock className="w-5 h-5 text-green-500" />
                      <span className="font-medium">{center.hours}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {center.services.map((service) => (
                        <Badge key={service} className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button 
                      className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                      onClick={() => (window.location.href = `tel:${center.phone}`)}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      โทร
                    </Button>
                    <Button variant="outline" className="border-2 hover:bg-gray-50">
                      <MapPin className="w-4 h-4 mr-2" />
                      ดูแผนที่
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-8 px-4 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">❓</div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              คำถามที่พบบ่อย
            </h2>
            <p className="text-gray-600 mt-2">คำตอบสำหรับคำถามที่ผู้คนถามบ่อยที่สุด</p>
          </div>
          
          <div className="space-y-4">
            {faqData.map((faq) => (
              <Card key={faq.id} className="shadow-lg border-0 overflow-hidden">
                <CardHeader
                  className="cursor-pointer hover:bg-orange-50 transition-colors"
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-orange-100 text-orange-800">{faq.category}</Badge>
                      <CardTitle className="text-lg text-gray-800">{faq.question}</CardTitle>
                    </div>
                    <div className="flex-shrink-0">
                      {expandedFaq === faq.id ? (
                        <ChevronUp className="w-6 h-6 text-orange-500" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-orange-500" />
                      )}
                    </div>
                  </div>
                </CardHeader>
                {expandedFaq === faq.id && (
                  <CardContent className="bg-orange-50 border-t">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section> 
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
