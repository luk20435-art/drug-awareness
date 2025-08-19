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
            <h1 className="text-2xl font-bold">มาตรการป้องกัน</h1>
            <p className="text-primary-foreground/90 text-sm">วิธีการป้องกันและหลีกเลี่ยงยาเสพติด</p>
          </div>
        </div>
      </header>

      {/* Prevention Levels Navigation */}
      <section className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-4">ระดับการป้องกัน</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {preventionLevels.map((level) => {
              const IconComponent = level.icon
              return (
                <Button
                  key={level.id}
                  variant={selectedLevel === level.id ? "default" : "outline"}
                  className="h-auto p-4 flex flex-col gap-2"
                  onClick={() => setSelectedLevel(level.id)}
                >
                  <IconComponent className="w-6 h-6" />
                  <span className="text-sm">{level.label}</span>
                </Button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Prevention Strategies */}
      <section className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">
            มาตรการป้องกัน{preventionLevels.find((l) => l.id === selectedLevel)?.label}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {preventionStrategies[selectedLevel as keyof typeof preventionStrategies].map((strategy, index) => {
              const IconComponent = strategy.icon
              return (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{strategy.title}</CardTitle>
                    </div>
                    <CardDescription>{strategy.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {strategy.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Refusal Techniques */}
      <section className="py-6 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">เทคนิคการปฏิเสธ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {refusalTechniques.map((technique, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    {technique.technique}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">ตัวอย่าง:</p>
                    <p className="text-sm bg-muted p-2 rounded italic">"{technique.example}"</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">เหมาะสำหรับ:</p>
                    <p className="text-sm">{technique.when}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">สัญญาณเตือนสภาพแวดล้อมเสี่ยง</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                สิ่งที่ควรระวัง
              </CardTitle>
              <CardDescription>สัญญาณที่บ่งบอกว่าอาจมีความเสี่ยงต่อการสัมผัสยาเสพติด</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {warningSignsEnvironment.map((sign, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{sign}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

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

      {/* Prevention Stats */}
      <section className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-card p-4 rounded-lg border">
              <div className="text-2xl font-bold text-primary">85%</div>
              <div className="text-sm text-muted-foreground">ประสิทธิภาพการป้องกัน</div>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <div className="text-2xl font-bold text-primary">12</div>
              <div className="text-sm text-muted-foreground">เทคนิคป้องกัน</div>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <div className="text-2xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground">ระดับการป้องกัน</div>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">การสนับสนุน</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}
