"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home, Newspaper, User, ExternalLink } from "lucide-react"

export default function QuizPage() {
  const form1 =
    "https://docs.google.com/forms/d/1XyQMgvr56fyZlZvbJGoqb-hweqfbx5XYnXxOTjzUaOc/viewform"

  const form2 =
    "https://docs.google.com/forms/d/1KiMcAE4thuZHexG8OFy-W7qTlZqTTRSnkoqlEbNfSUU/viewform"

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white py-6 px-4">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="text-white"
            onClick={() => (window.location.href = "/")}
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>

          <div>
            <h1 className="text-2xl font-bold">
              แบบสอบถามการป้องกันยาเสพติด
            </h1>
            <p className="text-sm text-blue-100">
              กรุณาเลือกแบบฟอร์มเพื่อทำแบบสอบถาม
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="py-8 px-4 max-w-3xl mx-auto space-y-6">
        {/* Form 1 */}
        <Card>
          <CardHeader>
            <CardTitle>แบบฟอร์มที่ 1</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              ความรู้เกี่ยวกับการป้องกันและเฝ้าระวังปัญหายาเสพติด
            </p>
            <Button
              className="w-full flex gap-2"
              onClick={() => window.open(form1, "_blank")}
            >
              <ExternalLink className="w-4 h-4" />
              เปิดแบบฟอร์ม
            </Button>
          </CardContent>
        </Card>

        {/* Form 2 */}
        <Card>
          <CardHeader>
            <CardTitle>แบบฟอร์มที่ 2</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              แบบสอบถามข้อมูลทั่วไปของผู้ตอบ
            </p>
            <Button
              variant="secondary"
              className="w-full flex gap-2"
              onClick={() => window.open(form2, "_blank")}
            >
              <ExternalLink className="w-4 h-4" />
              เปิดแบบฟอร์ม
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t px-2 py-2 shadow-md">
        <div className="flex justify-between max-w-md mx-auto">
          {[
            { icon: Home, label: "หน้าหลัก", href: "/" },
            { icon: Newspaper, label: "ข่าวสาร", href: "/new" },
            { icon: User, label: "โปรไฟล์", href: "/profile" },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <button
                key={index}
                className="flex flex-col items-center text-xs text-gray-500"
                onClick={() => (window.location.href = item.href)}
              >
                <Icon className="w-6 h-6 mb-1" />
                <span>{item.label}</span>
              </button>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
