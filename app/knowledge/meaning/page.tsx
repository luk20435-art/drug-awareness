"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Newspaper, User } from "lucide-react"; 
import React from "react";

export default function TypesPage() {
  return (
    <div className="min-h-screen p-6 from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
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
              ความหมายของยาเสพติด
            </h1>
          </div>
        </div>
      </header>

      {/* Poster A4 */}
      <main className="min-h-screen from-slate-50 via-blue-50 to-indigo-100 flex justify-center items-start p-6 mt-8 mb-14">
          <div className="flex flex-wrap justify-center gap-6 w-full max-w-[1400px]">
            {/* โปสเตอร์ตัวที่ 1 */}
            <div
              className="relative w-full sm:w-[45%] md:w-[45%] lg:w-[48%] xl:w-[48%] aspect-[210/297] rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-white"
            >
              <Image
                src="/images/mean.png"
                alt="โปสเตอร์ A4 1"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* โปสเตอร์ตัวที่ 2 */}
            <div
              className="relative w-full sm:w-[45%] md:w-[45%] lg:w-[48%] xl:w-[48%] aspect-[210/297] rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-white"
            >
              <Image
                src="/images/time.png"
                alt="โปสเตอร์ A4 2"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
      </main>


      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t px-2 py-2 shadow-md">
        <div className="flex justify-between max-w-md mx-auto">
          {[
            { icon: Home, label: "หน้าหลัก", active: true, href: "/" },
            { icon: Newspaper, label: "ข่าวสาร", href: "/new" },
            { icon: User, label: "โปรไฟล์", href: "/profile" },
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <button
                key={index}
                className={`flex flex-col items-center text-xs ${
                  item.active ? "text-purple-600" : "text-gray-500"
                }`}
                onClick={() => (window.location.href = item.href)}
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
