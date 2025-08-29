"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BottomNavigation } from "@/components/bottom-navigation"
import {
  Shield,
  Users,
  Home,
  School,
  Heart,
  Brain,
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  Target,
  Lightbulb,
  Play,
  Search,
  User,
  Newspaper,
} from "lucide-react"
import { useState } from "react"

export default function PreventionPage() {
  const [selectedLevel, setSelectedLevel] = useState("personal")

  const preventionLevels = [
    { id: "personal", label: "ระดับบุคคล", icon: Shield },
    { id: "family", label: "ระดับครอบครัว", icon: Home },
    { id: "community", label: "ระดับชุมชน", icon: Users },
    { id: "school", label: "ระดับสถานศึกษา", icon: School },
  ]

  const preventionStrategies = {
    personal: [
      {
        title: "สร้างความรู้ความเข้าใจ",
        description: "เรียนรู้เกี่ยวกับยาเสพติดและผลกระทบ",
        tips: [
          "ศึกษาข้อมูลจากแหล่งที่น่าเชื่อถือ",
          "เข้าใจความแตกต่างระหว่างยาและยาเสพติด",
          "รู้จักสัญญาณเตือนการติดยาเสพติด",
          "ติดตามข่าวสารและงานวิจัยใหม่ๆ",
        ],
        icon: Brain,
      },
      {
        title: "พัฒนาทักษะการปฏิเสธ",
        description: "เรียนรู้วิธีการปฏิเสธเมื่อมีคนชักชวน",
        tips: [
          "ฝึกพูด 'ไม่' อย่างมั่นใจและชัดเจน",
          "หาข้อแก้ตัวที่เหมาะสม เช่น 'ฉันมีนัดหมาย'",
          "หลีกเลี่ยงสถานการณ์เสี่ยง",
          "มีเพื่อนที่คิดเหมือนกันเป็นกำลังใจ",
        ],
        icon: Shield,
      },
      {
        title: "ดูแลสุขภาพจิต",
        description: "สร้างความแข็งแกร่งทางจิตใจ",
        tips: ["ออกกำลังกายสม่ำเสมอ", "ฝึกสมาธิและการผ่อนคลาย", "มีกิจกรรมที่ทำให้มีความสุข", "ขอความช่วยเหลือเมื่อมีปัญหา"],
        icon: Heart,
      },
    ],
    family: [
      {
        title: "สร้างสัมพันธภาพที่ดี",
        description: "เสริมสร้างความผูกพันในครอบครัว",
        tips: ["ใช้เวลาร่วมกันเป็นประจำ", "สื่อสารอย่างเปิดใจและไม่ตัดสิน", "แสดงความรักและการยอมรับ", "เป็นแบบอย่างที่ดีให้กัน"],
        icon: Home,
      },
      {
        title: "ให้ความรู้และคำแนะนำ",
        description: "ถ่ายทอดความรู้เกี่ยวกับยาเสพติด",
        tips: [
          "พูดคุยเรื่องยาเสพติดอย่างเปิดเผย",
          "ใช้ข้อมูลที่ถูกต้องและเป็นจริง",
          "ไม่ขู่หรือใช้วิธีการที่รุนแรง",
          "ตอบคำถามด้วยความอดทนและเข้าใจ",
        ],
        icon: Brain,
      },
      {
        title: "สร้างกฎเกณฑ์ที่ชัดเจน",
        description: "กำหนดขอบเขตและผลที่ตามมา",
        tips: ["ตั้งกฎที่เหมาะสมกับวัย", "อธิบายเหตุผลของกฎเกณฑ์", "ให้รางวัลเมื่อปฏิบัติตาม", "ใช้วิธีการลงโทษที่สร้างสรรค์"],
        icon: Shield,
      },
    ],
    community: [
      {
        title: "สร้างเครือข่ายชุมชน",
        description: "ร่วมมือกันป้องกันยาเสพติด",
        tips: ["จัดตั้งกลุ่มเฝ้าระวังชุมชน", "ประสานงานกับเจ้าหน้าที่ตำรวจ", "สร้างกิจกรรมเพื่อสังคม", "แลกเปลี่ยนข้อมูลข่าวสาร"],
        icon: Users,
      },
      {
        title: "จัดกิจกรรมทดแทน",
        description: "สร้างทางเลือกที่ดีสำหรับเยาวชน",
        tips: ["จัดกิจกรรมกีฬาและนันทนาการ", "สร้างศูนย์เรียนรู้ชุมชน", "ส่งเสริมอาชีพและทักษะ", "จัดค่ายพัฒนาเยาวชน"],
        icon: Target,
      },
      {
        title: "ปรับปรุงสภาพแวดล้อม",
        description: "สร้างชุมชนที่ปลอดภัย",
        tips: ["ปรับปรุงแสงสว่างในพื้นที่เสี่ยง", "จัดระเบียบพื้นที่สาธารณะ", "สร้างจุดตรวจชุมชน", "รณรงค์ให้ชุมชนมีส่วนร่วม"],
        icon: Shield,
      },
    ],
    school: [
      {
        title: "หลักสูตรการศึกษา",
        description: "บูรณาการเนื้อหาป้องกันยาเสพติด",
        tips: ["สอนในรูปแบบที่น่าสนใจ", "ใช้กรณีศึกษาจริง", "จัดกิจกรรมเชิงปฏิบัติการ", "ประเมินผลการเรียนรู้"],
        icon: School,
      },
      {
        title: "สร้างสภาพแวดล้อมที่ดี",
        description: "พัฒนาบรรยากาศโรงเรียน",
        tips: ["มีกฎระเบียบที่ชัดเจน", "ส่งเสริมกิจกรรมเสริมหลักสูตร", "สร้างความสัมพันธ์ครู-นักเรียน", "จัดพื้นที่ปลอดภัย"],
        icon: Shield,
      },
      {
        title: "ระบบช่วยเหลือนักเรียน",
        description: "ให้การสนับสนุนนักเรียนที่มีปัญหา",
        tips: ["มีครูที่ปรึกษาเฉพาะ", "จัดกลุ่มสนับสนุนเพื่อน", "ประสานงานกับผู้ปกครอง", "เชื่อมโยงกับหน่วยงานภายนอก"],
        icon: Heart,
      },
    ],
  }

  const refusalTechniques = [
    {
      technique: "การปฏิเสธตรงไปตรงมา",
      example: "ไม่ครับ/ค่ะ ผมไม่สนใจ",
      when: "เมื่อมั่นใจและสามารถปฏิเสธได้อย่างชัดเจน",
    },
    {
      technique: "การให้เหตุผล",
      example: "ผมต้องขับรถกลับบ้าน ไม่สามารถดื่มได้",
      when: "เมื่อต้องการอธิบายเหตุผลที่ไม่สามารถทำได้",
    },
    {
      technique: "การเสนอทางเลือก",
      example: "ไปดูหนังกันดีกว่า หรือไปกินข้าวกัน",
      when: "เมื่อต้องการเปลี่ยนกิจกรรมเป็นสิ่งอื่น",
    },
    {
      technique: "การหลีกเลี่ยง",
      example: "ผมมีธุระด่วน ต้องไปก่อนนะ",
      when: "เมื่อสถานการณ์เริ่มไม่ปลอดภัย",
    },
  ]

  const warningSignsEnvironment = [
    "มีการขายยาเสพติดในบริเวณใกล้เคียง",
    "เพื่อนหรือคนรู้จักเริ่มใช้ยาเสพติด",
    "มีการชักชวนให้ลองใช้ยาเสพติด",
    "อยู่ในสถานที่ที่มีความเสี่ยงสูง",
    "ขาดการดูแลจากผู้ใหญ่",
    "มีปัญหาทางการเงินหรือครอบครัว",
  ]

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
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
              มาตรการป้องกัน
            </h1>
            <p className="text-blue-100 text-sm mt-1 flex items-center gap-2">
              <Play className="w-4 h-4" />
              ประสิทธิภาพการป้องกัน
            </p>
          </div>
        </div>
      </header>

     
      {/* Action Plan */}
      <section className="py-6 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">แผนการป้องกันส่วนบุคคล</h2>
          <Card>
            <CardHeader>
              <CardTitle>สร้างแผนการป้องกันของคุณเอง</CardTitle>
              <CardDescription>ทำตามขั้นตอนเหล่านี้เพื่อสร้างแผนป้องกันที่เหมาะกับตัวคุณ</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">ขั้นตอนที่ 1: ประเมินความเสี่ยง</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                        1
                      </span>
                      <span>ระบุสถานการณ์เสี่ยงในชีวิตประจำวัน</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                        2
                      </span>
                      <span>ประเมินระดับความเสี่ยงของแต่ละสถานการณ์</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                        3
                      </span>
                      <span>ระบุจุดอ่อนและจุดแข็งของตัวเอง</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold">ขั้นตอนที่ 2: วางแผนป้องกัน</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                        4
                      </span>
                      <span>เลือกเทคนิคการป้องกันที่เหมาะสม</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                        5
                      </span>
                      <span>ฝึกฝนทักษะการปฏิเสธ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                        6
                      </span>
                      <span>สร้างเครือข่ายสนับสนุน</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-4">
                <Button className="w-full md:w-auto">
                  <Target className="w-4 h-4 mr-2" />
                  เริ่มสร้างแผนป้องกัน
                </Button>
              </div>
            </CardContent>
          </Card>
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
