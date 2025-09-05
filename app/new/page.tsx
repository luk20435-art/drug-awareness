"use client"

import { Button } from "@/components/ui/button" 
import { ArrowLeft, Home, User, Newspaper } from "lucide-react"
import React from "react"

export default function VideosPage() {
  return (
    <div className="min-h-screen from-slate-50 via-blue-50 to-indigo-100 pb-20">
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
                    ข่าวสารต่างๆ
                  </h1>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </header>

      {/* Facebook Page Sections - Responsive Layout */}
      <main className="container mx-auto max-w-7xl py-8 px-4">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
          {/* Facebook Page 1 */}
          <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-[4/5] md:aspect-[16/20] lg:aspect-[4/5]">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Foncb.go.th&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                className="w-full h-full"
                style={{ border: "none", overflow: "hidden" }}
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="ONCB Facebook Page"
              ></iframe>
            </div>
          </div>

          {/* Facebook Page 2 */}
          <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-[4/5] md:aspect-[16/20] lg:aspect-[4/5]">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcads.in.th&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                className="w-full h-full"
                style={{ border: "none", overflow: "hidden" }}
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="CADS Facebook Page"
              ></iframe>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t px-2 py-2 shadow-lg z-50">
        <div className="flex justify-between max-w-md mx-auto">
          {[ 
            { icon: Home, label: 'หน้าหลัก', href: '/' },
            { icon: Newspaper, label: 'ข่าวสาร', href: '/new' }, 
            { icon: User, label: 'โปรไฟล์', href: '/profile' }, 
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <button
                key={index}
                className={`flex flex-col items-center text-xs transition-colors duration-200 px-3 py-2 rounded-lg ${
                  item.href === "/new" 
                    ? "text-purple-600 bg-purple-50" 
                    : "text-gray-500 hover:text-purple-600 hover:bg-purple-50"
                }`}
                onClick={() => (window.location.href = item.href)}
              >
                <IconComponent className="w-6 h-6 mb-1" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  )
}