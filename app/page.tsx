"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Video, HelpCircle, Shield, FileText, Star } from "lucide-react"
import { BottomNavigation } from "@/components/bottom-navigation"

export default function HomePage() {
  const mainTopics = [
    {
      id: "knowledge",
      title: "คลังความรู้",
      description: "ข้อมูลและความรู้เกี่ยวกับยาเสพติดและผลกระทบ",
      icon: BookOpen,
      href: "/knowledge",
    },
    {
      id: "videos",
      title: "สื่อวิดีโอ",
      description: "วิดีโอการศึกษาและสื่อการเรียนรู้",
      icon: Video,
      href: "/videos",
    },
    {
      id: "help",
      title: "ขอความช่วยเหลือ",
      description: "ช่องทางการขอความช่วยเหลือและคำปรึกษา",
      icon: HelpCircle,
      href: "/help",
    },
    {
      id: "prevention",
      title: "มาตรการป้องกัน",
      description: "วิธีการป้องกันและหลีกเลี่ยงยาเสพติด",
      icon: Shield,
      href: "/prevention",
    },
    {
      id: "quiz",
      title: "แบบทดสอบ",
      description: "ทดสอบความรู้และความเข้าใจ",
      icon: FileText,
      href: "/quiz",
    },
    {
      id: "feedback",
      title: "แบบประเมินความพึงพอใจ",
      description: "ประเมินและให้ข้อเสนอแนะ",
      icon: Star,
      href: "/feedback",
    },
  ]

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-2">รู้ทันยาเสพติด</h1>
          <p className="text-primary-foreground/90">สื่อการเรียนรู้เพื่อป้องกันและรู้ทันยาเสพติด</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">เรียนรู้และป้องกันตัวเองจากยาเสพติด</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            แอปพลิเคชันนี้จัดทำขึ้นเพื่อให้ความรู้และสร้างความตระหนักเกี่ยวกับอันตรายของยาเสพติด พร้อมแนวทางการป้องกันที่เหมาะสมสำหรับทุกวัย
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            เริ่มเรียนรู้
          </Button>
        </div>
      </section>

      {/* Main Topics Grid */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-6">หัวข้อการเรียนรู้</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainTopics.map((topic) => {
              const IconComponent = topic.icon
              return (
                <Card key={topic.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{topic.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-sm">{topic.description}</CardDescription>
                    <Button
                      variant="outline"
                      className="w-full mt-4 bg-transparent"
                      onClick={() => (window.location.href = topic.href)}
                    >
                      เข้าสู่หัวข้อ
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-card p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary">6</div>
              <div className="text-sm text-muted-foreground">หัวข้อหลัก</div>
            </div>
            <div className="bg-card p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">เนื้อหาความรู้</div>
            </div>
            <div className="bg-card p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary">20+</div>
              <div className="text-sm text-muted-foreground">วิดีโอการศึกษา</div>
            </div>
            <div className="bg-card p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">ความช่วยเหลือ</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}
