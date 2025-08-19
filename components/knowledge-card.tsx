"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock } from "lucide-react"

interface KnowledgeCardProps {
  title: string
  excerpt: string
  category: string
  readTime: string
  tags: string[]
  onClick?: () => void
}

export function KnowledgeCard({ title, excerpt, category, readTime, tags, onClick }: KnowledgeCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={onClick}>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg leading-tight">{title}</CardTitle>
          <BookOpen className="w-5 h-5 text-muted-foreground flex-shrink-0" />
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Badge variant="outline" className="text-xs">
            {category}
          </Badge>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{readTime}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4">{excerpt}</CardDescription>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <Button variant="outline" size="sm" className="w-full bg-transparent">
          อ่านบทความ
        </Button>
      </CardContent>
    </Card>
  )
}
