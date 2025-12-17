"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BottomNavigation } from "@/components/bottom-navigation"
import { ArrowLeft, Play, Eye, ThumbsUp, Share2, Download } from "lucide-react"
import { useParams } from "next/navigation"

export default function VideoDetailPage() {
  const params = useParams()
  const videoId = params.id as string

  // Mock video data - in real app, this would be fetched based on videoId
  const video = {
    id: 1,
    title: "รู้ทันยาเสพติด: ความจริงที่ต้องรู้",
    description: `วิดีโอนี้จะพาคุณไปรู้จักกับความจริงเกี่ยวกับยาเสพติดที่หลายคนอาจไม่เคยรู้มาก่อน 
    
    เนื้อหาในวิดีโอ:
    • ประเภทของยาเสพติดที่พบบ่อย
    • ผลกระทบต่อร่างกายและจิตใจ
    • วิธีการป้องกันตัวเอง
    • แหล่งขอความช่วยเหลือ
    
    วิดีโอนี้เหมาะสำหรับ:
    - นักเรียน นักศึกษา
    - ผู้ปกครอง
    - ครูและผู้ที่ทำงานด้านการศึกษา
    - ผู้ที่สนใจเรื่องการป้องกันยาเสพติด`,
    thumbnail: "/placeholder.svg?height=400&width=700",
    duration: "12:34",
    views: "15,234",
    likes: "1,245",
    uploadDate: "2 สัปดาห์ที่แล้ว",
    category: "การป้องกัน",
    tags: ["ความรู้เบื้องต้น", "ป้องกัน", "การศึกษา"],
    author: "ศูนย์ป้องกันยาเสพติด",
  }

  const relatedVideos = [
    {
      id: 2,
      title: "ผลกระทบของยาบ้าต่อสมอง",
      thumbnail: "/placeholder.svg?height=120&width=200",
      duration: "8:45",
      views: "8.7K",
    },
    {
      id: 3,
      title: "วิธีการปฏิเสธยาเสพติด",
      thumbnail: "/placeholder.svg?height=120&width=200",
      duration: "6:12",
      views: "12.5K",
    },
    {
      id: 4,
      title: "สัญญาณเตือนการติดยาเสพติด",
      thumbnail: "/placeholder.svg?height=120&width=200",
      duration: "9:15",
      views: "18.7K",
    },
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
            onClick={() => (window.location.href = "/videos")}
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="flex-1">
            <h1 className="text-xl font-bold leading-tight line-clamp-2">{video.title}</h1>
          </div>
        </div>
      </header>

      {/* Video Player */}
      <section className="px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-black rounded-lg overflow-hidden">
            <img
              src={video.thumbnail || "/placeholder.svg"}
              alt={video.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <Button size="lg" className="rounded-full w-20 h-20 bg-primary/90 hover:bg-primary">
                <Play className="w-8 h-8 ml-1" />
              </Button>
            </div>
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded">{video.duration}</div>
          </div>
        </div>
      </section>

      {/* Video Info */}
      <section className="px-4 pb-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <Badge variant="secondary" className="mb-2">
                {video.category}
              </Badge>
              <h2 className="text-xl font-bold mb-2">{video.title}</h2>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{video.views} ครั้ง</span>
                </div>
                <div className="flex items-center gap-1">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{video.likes}</span>
                </div>
                <span>{video.uploadDate}</span>
              </div>
              <p className="text-sm text-muted-foreground">โดย {video.author}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <Button variant="outline" size="sm">
              <ThumbsUp className="w-4 h-4 mr-1" />
              ถูกใจ
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-1" />
              แชร์
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-1" />
              ดาวน์โหลด
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {video.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">รายละเอียดวิดีโอ</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="whitespace-pre-line text-sm leading-relaxed">{video.description}</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Videos */}
      <section className="px-4 pb-6 bg-muted/30">
        <div className="max-w-4xl mx-auto py-6">
          <h3 className="text-xl font-bold mb-6">วิดีโอที่เกี่ยวข้อง</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedVideos.map((relatedVideo) => (
              <Card key={relatedVideo.id} className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                <div className="relative">
                  <img
                    src={relatedVideo.thumbnail || "/placeholder.svg"}
                    alt={relatedVideo.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button size="sm" className="rounded-full w-10 h-10 bg-primary/90 hover:bg-primary">
                      <Play className="w-3 h-3 ml-0.5" />
                    </Button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {relatedVideo.duration}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm leading-tight line-clamp-2">{relatedVideo.title}</CardTitle>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Eye className="w-3 h-3" />
                    <span>{relatedVideo.views}</span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}
