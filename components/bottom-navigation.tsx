"use client"

import { Home, Menu, Newspaper, User } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function BottomNavigation() {
  const pathname = usePathname()

  const navItems = [
    {
      id: "menu",
      label: "เมนู",
      icon: Menu,
      href: "/menu",
    },
    {
      id: "home",
      label: "หน้าหลัก",
      icon: Home,
      href: "/",
    },
    {
      id: "news",
      label: "ข่าวสาร",
      icon: Newspaper,
      href: "/news",
    },
    {
      id: "profile",
      label: "โปรไฟล์",
      icon: User,
      href: "/profile",
    },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const IconComponent = item.icon
          const isActive = pathname === item.href

          return (
            <button
              key={item.id}
              onClick={() => (window.location.href = item.href)}
              className={cn(
                "flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-colors",
                isActive ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-muted",
              )}
            >
              <IconComponent className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
