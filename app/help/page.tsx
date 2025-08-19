"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { BottomNavigation } from "@/components/bottom-navigation"
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
} from "lucide-react"
import { useState } from "react"

export default function HelpPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
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
    },
    {
      id: 2,
      name: "สายด่วนสุขภาพจิต",
      number: "1323",
      description: "ให้คำปรึกษาด้านสุขภาพจิตและการฟื้นฟู",
      type: "mental",
      available: "24/7",
    },
    {
      id: 3,
      name: "ศูนย์ช่วยเหลือสังคม",
      number: "1300",
      description: "ช่วยเหลือด้านสังคมและครอบครัว",
      type: "social",
      available: "08:30-16:30",
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
    },
    {
      id: 2,
      name: "โรงพยาบาลธัญญารักษ์",
      address: "456 ถนนรัชดาภิเษก เขตห้วยขวาง กรุงเทพฯ 10310",
      phone: "02-234-5678",
      services: ["รักษา", "ฟื้นฟู", "ตรวจสุขภาพ"],
      hours: "24 ชั่วโมง",
    },
    {
      id: 3,
      name: "มูลนิธิช่วยเหลือผู้ติดยาเสพติด",
      address: "789 ถนนสุขุมวิท เขตวัฒนา กรุงเทพฯ 10110",
      phone: "02-345-6789",
      services: ["ให้คำปรึกษา", "สนับสนุน", "ฟื้นฟู"],
      hours: "จันทร์-เสาร์ 09:00-18:00",
    },
  ]

  const faqData = [
    {
      id: 1,
      question: "ฉันสงสัยว่าคนใกล้ตัวติดยาเสพติด ควรทำอย่างไร?",
      answer:
        "ควรสังเกตสัญญาณเตือน เช่น พฤติกรรมเปลี่ยนแปลง การนอนหลับผิดปกติ อารมณ์แปรปรวน หากมีความกังวล ควรปรึกษาผู้เชี่ยวชาญหรือโทรสายด่วน 1165 เพื่อขอคำแนะนำ",
    },
    {
      id: 2,
      question: "การรักษาและฟื้นฟูใช้เวลานานแค่ไหน?",
      answer:
        "ระยะเวลาการรักษาขึ้นอยู่กับหลายปัจจัย เช่น ประเภทของยาเสพติด ระยะเวลาการใช้ สภาพร่างกายและจิตใจ โดยทั่วไปการฟื้นฟูอาจใช้เวลา 3-12 เดือน หรือมากกว่า",
    },
    {
      id: 3,
      question: "ค่าใช้จ่ายในการรักษาเป็นอย่างไร?",
      answer:
        "โรงพยาบาลของรัฐให้บริการรักษาฟรีหรือค่าใช้จ่ายต่ำ มีศูนย์ฟื้นฟูของรัฐที่ไม่เสียค่าใช้จ่าย สำหรับเอกชนจะมีค่าใช้จ่ายแตกต่างกันไป ควรสอบถามข้อมูลก่อนเข้ารับการรักษา",
    },
    {
      id: 4,
      question: "ครอบครัวควรให้การสนับสนุนอย่างไร?",
      answer:
        "ครอบครัวมีบทบาทสำคัญ ควรให้กำลังใจ ไม่ตำหนิ เข้าใจว่าการติดยาเสพติดเป็นโรค ควรเรียนรู้เกี่ยวกับการฟื้นฟู และอาจต้องเข้าร่วมการบำบัดครอบครัวด้วย",
    },
    {
      id: 5,
      question: "หากกลับไปใช้ยาเสพติดอีก ควรทำอย่างไร?",
      answer:
        "การกลับไปใช้ยาเสพติดซ้ำ (Relapse) เป็นเรื่องปกติในกระบวนการฟื้นฟู ไม่ควรท้อแท้ ควรกลับเข้าสู่การรักษาใหม่ทันที และปรับแผนการรักษาให้เหมาะสมมากขึ้น",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert("ส่งคำขอความช่วยเหลือเรียบร้อยแล้ว เจ้าหน้าที่จะติดต่อกลับภายใน 24 ชั่วโมง")
    setFormData({ name: "", phone: "", email: "", message: "", urgency: "normal" })
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 px-4">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => (window.location.href = "/")}
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">ขอความช่วยเหลือ</h1>
            <p className="text-primary-foreground/90 text-sm">ช่องทางการขอความช่วยเหลือและคำปรึกษา</p>
          </div>
        </div>
      </header>

      {/* Emergency Alert */}
      <section className="py-4 px-4 bg-destructive/10 border-b border-destructive/20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0" />
            <div>
              <p className="font-semibold text-destructive">กรณีฉุกเฉิน</p>
              <p className="text-sm text-destructive/80">
                หากเป็นเหตุฉุกเฉินที่เกี่ยวข้องกับยาเสพติด โปรดโทร <strong>1669</strong> หรือ <strong>1165</strong> ทันที
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">สายด่วนช่วยเหลือ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {emergencyContacts.map((contact) => (
              <Card key={contact.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{contact.number}</CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {contact.available}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold mb-2">{contact.name}</h3>
                  <CardDescription className="text-sm mb-4">{contact.description}</CardDescription>
                  <Button className="w-full" onClick={() => (window.location.href = `tel:${contact.number}`)}>
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
      <section className="py-6 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">ส่งคำขอความช่วยเหลือ</h2>
          <Card>
            <CardHeader>
              <CardTitle>แบบฟอร์มขอความช่วยเหลือ</CardTitle>
              <CardDescription>กรอกข้อมูลเพื่อให้เจ้าหน้าที่ติดต่อกลับ</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">ชื่อ-นามสกุล</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="กรอกชื่อของคุณ"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">เบอร์โทรศัพท์</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="กรอกเบอร์โทรศัพท์"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">อีเมล (ไม่บังคับ)</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="กรอกอีเมล"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">ระดับความเร่งด่วน</label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                    className="w-full p-2 border border-input rounded-md bg-background"
                  >
                    <option value="normal">ปกติ</option>
                    <option value="urgent">เร่งด่วน</option>
                    <option value="emergency">ฉุกเฉิน</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">รายละเอียดปัญหา</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="อธิบายปัญหาหรือสิ่งที่ต้องการความช่วยเหลือ"
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  ส่งคำขอความช่วยเหลือ
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support Centers */}
      <section className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">ศูนย์ช่วยเหลือและรักษา</h2>
          <div className="space-y-4">
            {supportCenters.map((center) => (
              <Card key={center.id}>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <CardTitle className="text-lg">{center.name}</CardTitle>
                      <CardDescription className="mt-1">{center.address}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{center.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{center.hours}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {center.services.map((service) => (
                        <Badge key={service} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" onClick={() => (window.location.href = `tel:${center.phone}`)}>
                      <Phone className="w-4 h-4 mr-1" />
                      โทร
                    </Button>
                    <Button variant="outline" size="sm">
                      <MapPin className="w-4 h-4 mr-1" />
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
      <section className="py-6 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">คำถามที่พบบ่อย</h2>
          <div className="space-y-3">
            {faqData.map((faq) => (
              <Card key={faq.id}>
                <CardHeader
                  className="cursor-pointer"
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{faq.question}</CardTitle>
                    {expandedFaq === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </CardHeader>
                {expandedFaq === faq.id && (
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">ทรัพยากรเพิ่มเติม</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="text-center">
              <CardHeader>
                <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">การดูแลตนเอง</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>เทคนิคการดูแลสุขภาพจิตและการจัดการความเครียด</CardDescription>
                <Button variant="outline" size="sm" className="mt-3 bg-transparent">
                  เรียนรู้เพิ่มเติม
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">กลุ่มสนับสนุน</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>เข้าร่วมกลุ่มสนับสนุนและแบ่งปันประสบการณ์</CardDescription>
                <Button variant="outline" size="sm" className="mt-3 bg-transparent">
                  ค้นหากลุ่ม
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">การป้องกัน</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>แนวทางการป้องกันและหลีกเลี่ยงความเสี่ยง</CardDescription>
                <Button variant="outline" size="sm" className="mt-3 bg-transparent">
                  ดูแนวทาง
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}
