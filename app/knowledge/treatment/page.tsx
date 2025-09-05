
'use client' 
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Link, Newspaper, Play, User } from "lucide-react";
import Image from "next/image";
import React from "react"; 

// ถ้าต้องการให้หน้าคือ Client Component ให้ใส่ 'use client' ข้างล่างนี้

// export const metadata = { title: "ประเภทของยาเสพติด" }; // สำหรับ App Router metadata

export default function TypesPage() {
  return (
    
    <div className="min-h-screen p-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"> 
       <header className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white py-6 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-700/20 animate-pulse"></div>
        <div className="max-w-4xl mx-auto flex items-center gap-4 relative z-10">
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl transition-all duration-300 hover:scale-105"
            onClick={() => (window.location.href = "/knowledge")}
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="flex-1">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">
              แนวทางการบำบัดรักษา
            </h1> 
          </div>
        </div>
      </header>
      
     <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center mt-8 mb-14">
          {/* กล่อง A4 แบบ responsive */}
          <div
            className="relative w-full
              max-w-[350px]    /* มือถือ */
              sm:max-w-[400px] /* tablet เล็ก */
              md:max-w-[500px] /* tablet ใหญ่ */
              lg:max-w-[500px] /* desktop */
              xl:max-w-[600px] /* จอใหญ่ */
              aspect-[210/297]
              rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-white"
          >
            <Image
              src="/images/guidline.jpg" // 🔄 รูปโปสเตอร์ของคุณ
              alt="โปสเตอร์ A4"
              fill
              className="object-cover"
              priority
            />
          </div>
        </main>

      
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
  );
}
