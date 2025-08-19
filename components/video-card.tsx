"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Eye, Clock } from "lucide-react"

interface VideoCardProps {
  title: string
  description: string
  thumbnail: string
  duration: string
  views: string
  category: string
  tags: string[]
  uploadDate: string
  onClick?: () => void
}

export function VideoCard({
  title,
  description,
  thumbnail,
  duration,
  views,
  category,
  tags,
  uploadDate,
  onClick,
}: VideoCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={onClick}>
      <div className="relative">
        <img src={thumbnail || "/placeholder.svg"} alt={title} className="w-full h-40 object-cover" />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <Button size="sm" className="rounded-full w-12 h-12 bg-primary/90 hover:bg-primary">
            <Play className="w-4 h-4 ml-0.5" />
          </Button>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">{duration}</div>
      </div>
      <CardHeader className="pb-2">
        <Badge variant="outline" className="text-xs w-fit">
          {category}
        </Badge>
        <CardTitle className="text-base leading-tight line-clamp-2">{title}</CardTitle>
        <CardDescription className="text-sm line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            <span>{views}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{uploadDate}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1">
          {tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
