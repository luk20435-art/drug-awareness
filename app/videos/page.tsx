"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { BottomNavigation } from "@/components/bottom-navigation"
import { Search, Play, Eye, ArrowLeft, Filter } from "lucide-react"
import { useState } from "react"

export default function VideosPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const videoCategories = [
    { id: "all", label: "ทั้งหมด", count: 24 },
    { id: "prevention", label: "การป้องกัน", count: 8 },
    { id: "effects", label: "ผลกระทบ", count: 6 },
    { id: "recovery", label: "การฟื้นฟู", count: 5 },
    { id: "stories", label: "เรื่องเล่า", count: 5 },
  ]

  const featuredVideos = [
    {
      id: 1,
      title: "รู้ทันยาเสพติด: ความจริงที่ต้องรู้",
      description: "วิดีโอแนะนำเบื้องต้นเกี่ยวกับยาเสพติดและอันตรายที่ซ่อนเร้น",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "12:34",
      views: "15.2K",
      category: "prevention",
      tags: ["ความรู้เบื้องต้น", "ป้องกัน"],
      uploadDate: "2 สัปดาห์ที่แล้ว",
    },
    {
      id: 2,
      title: "ผลกระทบของยาบ้าต่อสมอง",
      description: "อธิบายผลกระทบของยาบ้าต่อระบบประสาทและสมองอย่างละเอียด",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "8:45",
      views: "8.7K",
      category: "effects",
      tags: ["ยาบ้า", "สมอง", "ผลกระทบ"],
      uploadDate: "1 สัปดาห์ที่แล้ว",
    },
    {
      id: 3,
      title: "เรื่องเล่าจากผู้ที่เคยติดยาเสพติด",
      description: "ประสบการณ์จริงจากผู้ที่เคยติดยาเสพติดและการฟื้นฟูตัวเอง",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "15:20",
      views: "22.1K",
      category: "stories",
      tags: ["เรื่องเล่า", "ฟื้นฟู", "แรงบันดาลใจ"],
      uploadDate: "3 สัปดาห์ที่แล้ว",
    },
    {
      id: 4,
      title: "วิธีการปฏิเสธยาเสพติด",
      description: "เทคนิคและวิธีการปฏิเสธเมื่อมีคนชักชวนให้ใช้ยาเสพติด",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "6:12",
      views: "12.5K",
      category: "prevention",
      tags: ["ปฏิเสธ", "เทคนิค", "ป้องกัน"],
      uploadDate: "4 วันที่แล้ว",
    },
    {
      id: 5,
      title: "การฟื้นฟูและการรักษา",
      description: "แนวทางการฟื้นฟูและการรักษาผู้ติดยาเสพติดอย่างมีประสิทธิภาพ",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "11:28",
      views: "9.3K",
      category: "recovery",
      tags: ["ฟื้นฟู", "รักษา", "สนับสนุน"],
      uploadDate: "5 วันที่แล้ว",
    },
    {
      id: 6,
      title: "สัญญาณเตือนการติดยาเสพติด",
      description: "รู้จักสัญญาณเตือนและวิธีการสังเกตการติดยาเสพติดในคนใกล้ตัว",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "9:15",
      views: "18.7K",
      category: "effects",
      tags: ["สัญญาณเตือน", "การติด", "สังเกต"],
      uploadDate: "1 สัปดาห์ที่แล้ว",
    },
  ]

  const filteredVideos = featuredVideos.filter((video) => {
    const matchesSearch =
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategory === "all" || video.category === selectedCategory

    return matchesSearch && matchesCategory
  })

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
            <h1 className="text-2xl font-bold">สื่อวิดีโอ</h1>
            <p className="text-primary-foreground/90 text-sm">วิดีโอการศึกษาและสื่อการเรียนรู้</p>
          </div>
        </div>
      </header>

      {/* Search and Filter Section */}
      <section className="py-6 px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="ค้นหาวิดีโอ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            {videoCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                className="flex-shrink-0"
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-4">วิดีโอแนะนำ</h2>
          <Card className="overflow-hidden">
            <div className="relative">
              <img
                src={featuredVideos[0].thumbnail || "/placeholder.svg"}
                alt={featuredVideos[0].title}
                className="w-full h-48 md:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <Button size="lg" className="rounded-full w-16 h-16 bg-primary/90 hover:bg-primary">
                  <Play className="w-6 h-6 ml-1" />
                </Button>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                {featuredVideos[0].duration}
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{featuredVideos[0].title}</CardTitle>
              <CardDescription>{featuredVideos[0].description}</CardDescription>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{featuredVideos[0].views} ครั้ง</span>
                </div>
                <span>{featuredVideos[0].uploadDate}</span>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">วิดีโอทั้งหมด</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.slice(1).map((video) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button size="sm" className="rounded-full w-12 h-12 bg-primary/90 hover:bg-primary">
                      <Play className="w-4 h-4 ml-0.5" />
                    </Button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base leading-tight line-clamp-2">{video.title}</CardTitle>
                  <CardDescription className="text-sm line-clamp-2">{video.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{video.views}</span>
                    </div>
                    <span>{video.uploadDate}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {video.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">ไม่พบวิดีโอที่ตรงกับการค้นหา</p>
            </div>
          )}
        </div>
      </section>

      {/* Video Stats */}
      <section className="py-6 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-card p-4 rounded-lg border">
              <div className="text-2xl font-bold text-primary">24</div>
              <div className="text-sm text-muted-foreground">วิดีโอทั้งหมด</div>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <div className="text-2xl font-bold text-primary">2.5ชม</div>
              <div className="text-sm text-muted-foreground">เวลารวม</div>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <div className="text-2xl font-bold text-primary">45.2K</div>
              <div className="text-sm text-muted-foreground">ยอดชม</div>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <div className="text-2xl font-bold text-primary">4.8</div>
              <div className="text-sm text-muted-foreground">คะแนนเฉลี่ย</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}
