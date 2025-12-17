"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BottomNavigation } from "@/components/bottom-navigation"
import { ArrowLeft, Star, Send, ThumbsUp, MessageSquare, Users, TrendingUp, Home, Newspaper, User } from "lucide-react"
import { useState } from "react"

export default function FeedbackPage() {
  const [ratings, setRatings] = useState({
    overall: 0,
    content: 0,
    design: 0,
    usefulness: 0,
  })
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    comments: "",
    improvements: "",
    recommend: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const ratingCategories = [
    { key: "overall", label: "ความพึงพอใจโดยรวม", description: "ประเมินแอปพลิเคชันโดยรวม" },
    { key: "content", label: "เนื้อหาและความรู้", description: "คุณภาพของเนื้อหาและข้อมูล" },
    { key: "design", label: "การออกแบบและใช้งาน", description: "ความสวยงามและความง่ายในการใช้งาน" },
    { key: "usefulness", label: "ประโยชน์ที่ได้รับ", description: "ความเป็นประโยชน์ในชีวิตจริง" },
  ]

  const handleRatingChange = (category: string, rating: number) => {
    setRatings((prev) => ({ ...prev, [category]: rating }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setSubmitted(true)
  }

  const StarRating = ({ rating, onRatingChange }: { rating: number; onRatingChange: (rating: number) => void }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onRatingChange(star)}
            className={`w-8 h-8 ${star <= rating ? "text-yellow-400" : "text-gray-300"} hover:text-yellow-400 transition-colors`}
          >
            <Star className="w-full h-full fill-current" />
          </button>
        ))}
      </div>
    )
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background pb-20">
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
              <h1 className="text-2xl font-bold">ขอบคุณสำหรับการประเมิน</h1>
            </div>
          </div>
        </header>

        <section className="py-8 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card>
              <CardHeader>
                <ThumbsUp className="w-16 h-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">ส่งการประเมินเรียบร้อยแล้ว!</CardTitle>
                <CardDescription>ขอบคุณสำหรับความคิดเห็นที่มีค่า เราจะนำไปปรับปรุงแอปให้ดีขึ้น</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">สิ่งที่คุณสามารถทำต่อได้:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• แชร์แอปให้เพื่อนและครอบครัว</li>
                    <li>• ทำแบบทดสอบซ้ำเพื่อทบทวนความรู้</li>
                    <li>• ติดตามข่าวสารและเนื้อหาใหม่ๆ</li>
                    <li>• ใช้ช่องทางขอความช่วยเหลือเมื่อจำเป็น</li>
                  </ul>
                </div>
                <div className="flex gap-3 justify-center">
                  <Button onClick={() => (window.location.href = "/")} variant="outline">
                    กลับหน้าหลัก
                  </Button>
                  <Button onClick={() => (window.location.href = "/quiz")}>ทำแบบทดสอบอีกครั้ง</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <BottomNavigation />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
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
                          แบบประเมินความพึงพอใจ
                        </h1>
                        <p className="text-white/90 text-lg">ช่วยให้เราปรับปรุงแอปให้ดีขึ้น</p>
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
       </header> 

      {/* Feedback Form */}
      <section className="py-6 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">ความคิดเห็นและข้อเสนอแนะ</h2>
          <Card>
            <CardHeader>
              <CardTitle>แบบฟอร์มประเมิน</CardTitle>
              <CardDescription>กรุณาแบ่งปันความคิดเห็นของคุณ</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">ชื่อ (ไม่บังคับ)</label>
                    <Input
                      value={feedback.name}
                      onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
                      placeholder="กรอกชื่อของคุณ"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">อีเมล (ไม่บังคับ)</label>
                    <Input
                      type="email"
                      value={feedback.email}
                      onChange={(e) => setFeedback({ ...feedback, email: e.target.value })}
                      placeholder="กรอกอีเมล"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    สิ่งที่คุณชอบมากที่สุดในแอปนี้ <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    value={feedback.comments}
                    onChange={(e) => setFeedback({ ...feedback, comments: e.target.value })}
                    placeholder="เช่น เนื้อหามีประโยชน์, ใช้งานง่าย, ออกแบบสวย..."
                    rows={3}
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">ข้อเสนอแนะเพื่อการปรับปรุง</label>
                  <Textarea
                    value={feedback.improvements}
                    onChange={(e) => setFeedback({ ...feedback, improvements: e.target.value })}
                    placeholder="สิ่งที่ควรปรับปรุงหรือเพิ่มเติม..."
                    rows={3}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    คุณจะแนะนำแอปนี้ให้คนอื่นหรือไม่ <span className="text-destructive">*</span>
                  </label>
                  <select
                    value={feedback.recommend}
                    onChange={(e) => setFeedback({ ...feedback, recommend: e.target.value })}
                    className="w-full p-2 border border-input rounded-md bg-background"
                    required
                  >
                    <option value="">เลือกคำตอบ</option>
                    <option value="definitely">แน่นอน จะแนะนำอย่างแน่นอน</option>
                    <option value="probably">น่าจะแนะนำ</option>
                    <option value="maybe">อาจจะแนะนำ</option>
                    <option value="probably-not">น่าจะไม่แนะนำ</option>
                    <option value="definitely-not">ไม่แนะนำแน่นอน</option>
                  </select>
                </div>

                <Button type="submit" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  ส่งการประเมิน
                </Button>
              </form>
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
