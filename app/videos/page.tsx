"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { BottomNavigation } from "@/components/bottom-navigation"
import { Search, Play, Eye, ArrowLeft, Filter, Star, Clock, Users, TrendingUp, Home, Heart, User, Newspaper } from "lucide-react"
import { useState } from "react"

export default function VideosPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const videoCategories = [
    { id: "all", label: "ทั้งหมด", count: 24, color: "from-purple-500 to-pink-500" },
    { id: "prevention", label: "การป้องกัน", count: 8, color: "from-green-500 to-emerald-500" },
    { id: "effects", label: "ผลกระทบ", count: 6, color: "from-red-500 to-orange-500" },
    { id: "recovery", label: "การฟื้นฟู", count: 5, color: "from-blue-500 to-cyan-500" },
    { id: "stories", label: "เรื่องเล่า", count: 5, color: "from-yellow-500 to-amber-500" },
  ]

  const featuredVideos = [
    {
      id: 1,
      title: "รู้ทันยาเสพติด: ความจริงที่ต้องรู้",
      description: "วิดีโอแนะนำเบื้องต้นเกี่ยวกับยาเสพติดและอันตรายที่ซ่อนเร้น พร้อมคำแนะนำจากผู้เชี่ยวชาญ",
      thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=350&h=200&fit=crop",
      duration: "12:34",
      views: "15.2K",
      category: "prevention",
      tags: ["ความรู้เบื้องต้น", "ป้องกัน"],
      uploadDate: "2 สัปดาห์ที่แล้ว",
      rating: 4.8,
      channel: "Drug Education Thailand"
    },
    {
      id: 2,
      title: "ผลกระทบของยาบ้าต่อสมอง",
      description: "อธิบายผลกระทบของยาบ้าต่อระบบประสาทและสมองอย่างละเอียด พร้อมภาพจำลอง 3D",
      thumbnail: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=350&h=200&fit=crop",
      duration: "8:45",
      views: "8.7K",
      category: "effects",
      tags: ["ยาบ้า", "สมอง", "ผลกระทบ"],
      uploadDate: "1 สัปดาห์ที่แล้ว",
      rating: 4.6,
      channel: "Medical Science TH"
    },
    {
      id: 3,
      title: "เรื่องเล่าจากผู้ที่เคยติดยาเสพติด",
      description: "ประสบการณ์จริงจากผู้ที่เคยติดยาเสพติดและการฟื้นฟูตัวเอง เรื่องราวที่สร้างแรงบันดาลใจ",
      thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=350&h=200&fit=crop",
      duration: "15:20",
      views: "22.1K",
      category: "stories",
      tags: ["เรื่องเล่า", "ฟื้นฟู", "แรงบันดาลใจ"],
      uploadDate: "3 สัปดาห์ที่แล้ว",
      rating: 4.9,
      channel: "Recovery Stories"
    },
    {
      id: 4,
      title: "วิธีการปฏิเสธยาเสพติด",
      description: "เทคนิคและวิธีการปฏิเสธเมื่อมีคนชักชวนให้ใช้ยาเสพติด พร้อมเทคนิคการสื่อสาร",
      thumbnail: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=350&h=200&fit=crop",
      duration: "6:12",
      views: "12.5K",
      category: "prevention",
      tags: ["ปฏิเสธ", "เทคนิค", "ป้องกัน"],
      uploadDate: "4 วันที่แล้ว",
      rating: 4.7,
      channel: "Life Skills Channel"
    },
    {
      id: 5,
      title: "การฟื้นฟูและการรักษา",
      description: "แนวทางการฟื้นฟูและการรักษาผู้ติดยาเสพติดอย่างมีประสิทธิภาพ จากโรงพยาบาลชั้นนำ",
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=350&h=200&fit=crop",
      duration: "11:28",
      views: "9.3K",
      category: "recovery",
      tags: ["ฟื้นฟู", "รักษา", "สนับสนุน"],
      uploadDate: "5 วันที่แล้ว",
      rating: 4.5,
      channel: "Medical Thailand"
    },
    {
      id: 6,
      title: "สัญญาณเตือนการติดยาเสพติด",
      description: "รู้จักสัญญาณเตือนและวิธีการสังเกตการติดยาเสพติดในคนใกล้ตัว เพื่อการช่วยเหลือทันท่วงที",
      thumbnail: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=350&h=200&fit=crop",
      duration: "9:15",
      views: "18.7K",
      category: "effects",
      tags: ["สัญญาณเตือน", "การติด", "สังเกต"],
      uploadDate: "1 สัปดาห์ที่แล้ว",
      rating: 4.8,
      channel: "Family Care TH"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pb-20">
      {/* Animated Header */}
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
              สื่อวิดีโอการศึกษา
            </h1>
            <p className="text-blue-100 text-sm mt-1 flex items-center gap-2">
              <Play className="w-4 h-4" />
              วิดีโอคุณภาพสูงเพื่อการเรียนรู้และป้องกัน
            </p>
          </div>
        </div>
      </header>

      {/* Modern Search and Filter Section */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Search Bar */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-1 border border-white/20 shadow-lg">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-500 w-5 h-5" />
                <Input
                  placeholder="ค้นหาวิดีโอที่น่าสนใจ..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-3 bg-transparent border-0 text-lg placeholder:text-purple-400 focus-visible:ring-0"
                />
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            <div className="flex items-center gap-2 text-gray-600 flex-shrink-0">
              <Filter className="w-5 h-5" />
              <span className="font-medium">หมวดหมู่:</span>
            </div>
            {videoCategories.map((category) => (
              <Button
                key={category.id}
                variant="ghost"
                size="sm"
                className={`flex-shrink-0 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : "bg-white/60 backdrop-blur-sm border border-gray-200 hover:bg-white/80"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="font-medium">{category.label}</span>
                <Badge 
                  variant="secondary" 
                  className={`ml-2 ${selectedCategory === category.id ? "bg-white/20 text-white" : "bg-gray-100"}`}
                >
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Featured Video */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-800">วิดีโอแนะนำพิเศษ</h2>
            <TrendingUp className="w-6 h-6 text-orange-500" />
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition duration-500"></div>
            <Card className="relative overflow-hidden rounded-3xl border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
              <div className="relative">
                <img
                  src={featuredVideos[0].thumbnail}
                  alt={featuredVideos[0].title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Play Button with Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative group/play cursor-pointer">
                    <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-30"></div>
                    <div className="relative bg-gradient-to-r from-pink-500 to-violet-600 rounded-full w-20 h-20 flex items-center justify-center shadow-2xl transform group-hover/play:scale-110 transition-all duration-300">
                      <Play className="w-8 h-8 ml-1 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  <Clock className="w-4 h-4 inline mr-1" />
                  {featuredVideos[0].duration}
                </div>
                
                {/* Channel Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {featuredVideos[0].channel}
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  {featuredVideos[0].title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {featuredVideos[0].description}
                </CardDescription>
                
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span className="font-medium">{featuredVideos[0].views} ครั้ง</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-medium">{featuredVideos[0].rating}</span>
                    </div>
                    <span>{featuredVideos[0].uploadDate}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    {featuredVideos[0].tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-gradient-to-r from-blue-100 to-purple-100 text-purple-700 border-0">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-8 px-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-800">คลังวิดีโอทั้งหมด</h2>
            <Users className="w-6 h-6 text-purple-500" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.slice(1).map((video, index) => (
              <div key={video.id} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer transform group-hover:scale-105 border-0 bg-white/90 backdrop-blur-sm rounded-2xl">
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Play className="w-5 h-5 ml-0.5 text-purple-600" />
                      </div>
                    </div>
                    
                    {/* Duration */}
                    <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-medium">
                      {video.duration}
                    </div>
                    
                    {/* Category Badge */}
                    <div className={`absolute top-2 left-2 bg-gradient-to-r ${videoCategories.find(cat => cat.id === video.category)?.color} text-white px-2 py-1 rounded-lg text-xs font-medium`}>
                      {videoCategories.find(cat => cat.id === video.category)?.label}
                    </div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg leading-tight line-clamp-2 text-gray-800 group-hover:text-purple-700 transition-colors">
                      {video.title}
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-2 text-gray-600">
                      {video.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span className="font-medium">{video.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                          <span className="font-medium">{video.rating}</span>
                        </div>
                      </div>
                      <span>{video.uploadDate}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-2">
                      {video.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs bg-gradient-to-r from-gray-100 to-blue-100 text-blue-700 border-0">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="text-xs text-gray-400 font-medium">
                      {video.channel}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-gradient-to-r from-gray-100 to-blue-100 rounded-2xl p-8 max-w-md mx-auto">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg font-medium">ไม่พบวิดีโอที่ตรงกับการค้นหา</p>
                <p className="text-gray-500 text-sm mt-2">ลองใช้คำค้นหาอื่นหรือเปลี่ยนหมวดหมู่</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bottom Navigation */}
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