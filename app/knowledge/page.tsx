"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { BottomNavigation } from "@/components/bottom-navigation"
import { Search, BookOpen, AlertTriangle, Heart, Brain, Users, ArrowLeft } from "lucide-react"
import { useState } from "react"

export default function KnowledgePage() {
  const [searchTerm, setSearchTerm] = useState("")

  const knowledgeCategories = [
    {
      id: "types",
      title: "ประเภทของยาเสพติด",
      description: "เรียนรู้เกี่ยวกับประเภทต่างๆ ของยาเสพติดและลักษณะเฉพาะ",
      icon: AlertTriangle,
      color: "bg-red-100 text-red-600",
      articles: 12,
    },
    {
      id: "effects",
      title: "ผลกระทบต่อร่างกาย",
      description: "ผลกระทบทางกายภาพและสุขภาพจากการใช้ยาเสพติด",
      icon: Heart,
      color: "bg-orange-100 text-orange-600",
      articles: 8,
    },
    {
      id: "mental",
      title: "ผลกระทบต่อจิตใจ",
      description: "ผลกระทบทางจิตใจและพฤติกรรมจากยาเสพติด",
      icon: Brain,
      color: "bg-purple-100 text-purple-600",
      articles: 10,
    },
    {
      id: "social",
      title: "ผลกระทบต่อสังคม",
      description: "ผลกระทบต่อครอบครัว ชุมชน และสังคม",
      icon: Users,
      color: "bg-blue-100 text-blue-600",
      articles: 6,
    },
  ]

  const featuredArticles = [
    {
      id: 1,
      title: "ยาบ้า: อันตรายที่ซ่อนเร้น",
      excerpt: "เรียนรู้เกี่ยวกับยาบ้า ผลกระทบ และวิธีการป้องกัน",
      category: "ประเภทของยาเสพติด",
      readTime: "5 นาที",
      tags: ["ยาบ้า", "อันตราย", "ป้องกัน"],
    },
    {
      id: 2,
      title: "สัญญาณเตือนการติดยาเสพติด",
      excerpt: "รู้จักสัญญาณเตือนและวิธีการสังเกตการติดยาเสพติด",
      category: "ผลกระทบต่อจิตใจ",
      readTime: "7 นาที",
      tags: ["สัญญาณเตือน", "การติด", "พฤติกรรม"],
    },
    {
      id: 3,
      title: "ผลกระทบต่อระบบประสาท",
      excerpt: "ยาเสพติดส่งผลกระทบต่อระบบประสาทอย่างไร",
      category: "ผลกระทบต่อร่างกาย",
      readTime: "6 นาที",
      tags: ["ระบบประสาท", "สมอง", "สุขภาพ"],
    },
    {
      id: 4,
      title: "การฟื้นฟูและการรักษา",
      excerpt: "แนวทางการฟื้นฟูและการรักษาผู้ติดยาเสพติด",
      category: "ผลกระทบต่อสังคม",
      readTime: "8 นาที",
      tags: ["ฟื้นฟู", "รักษา", "สนับสนุน"],
    },
  ]

  const filteredArticles = featuredArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
  )

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
            <h1 className="text-2xl font-bold">คลังความรู้</h1>
            <p className="text-primary-foreground/90 text-sm">ความรู้และข้อมูลเกี่ยวกับยาเสพติด</p>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <section className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="ค้นหาความรู้..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* Knowledge Categories */}
      <section className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">หมวดหมู่ความรู้</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {knowledgeCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <Card key={category.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${category.color}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{category.title}</CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {category.articles} บทความ
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription>{category.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-6 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">บทความแนะนำ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                    <BookOpen className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Badge variant="outline" className="text-xs">
                      {article.category}
                    </Badge>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{article.excerpt}</CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    อ่านต่อ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredArticles.length === 0 && searchTerm && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">ไม่พบบทความที่ตรงกับการค้นหา "{searchTerm}"</p>
            </div>
          )}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-card p-4 rounded-lg border">
              <div className="text-2xl font-bold text-primary">36</div>
              <div className="text-sm text-muted-foreground">บทความทั้งหมด</div>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <div className="text-2xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground">หมวดหมู่</div>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <div className="text-2xl font-bold text-primary">15</div>
              <div className="text-sm text-muted-foreground">ผู้เชี่ยวชาญ</div>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <div className="text-2xl font-bold text-primary">1,250</div>
              <div className="text-sm text-muted-foreground">ผู้อ่าน</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}
