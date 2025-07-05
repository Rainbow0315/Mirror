import { Badge } from "@/components/ui/badge"
import { Lightbulb, Palette, Music, Camera, PenTool } from "lucide-react"
import type { Inspiration } from "@/types/inspiration"
import { formatDate } from "@/lib/date"

interface InspirationCardProps {
  inspiration: Inspiration
}

export function InspirationCard({ inspiration }: InspirationCardProps) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "写作":
        return <PenTool className="h-4 w-4" />
      case "艺术":
        return <Palette className="h-4 w-4" />
      case "音乐":
        return <Music className="h-4 w-4" />
      case "摄影":
        return <Camera className="h-4 w-4" />
      default:
        return <Lightbulb className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "写作":
        return "text-blue-600 bg-blue-50"
      case "艺术":
        return "text-purple-600 bg-purple-50"
      case "音乐":
        return "text-green-600 bg-green-50"
      case "摄影":
        return "text-orange-600 bg-orange-50"
      default:
        return "text-yellow-600 bg-yellow-50"
    }
  }

  const getMoodColor = (mood: string) => {
    const colors: { [key: string]: string } = {
      忧郁: "text-indigo-600 bg-indigo-50",
      平静: "text-blue-600 bg-blue-50",
      怀念: "text-amber-600 bg-amber-50",
      思考: "text-gray-600 bg-gray-50",
      宁静: "text-teal-600 bg-teal-50",
      好奇: "text-pink-600 bg-pink-50",
    }
    return colors[mood] || "text-gray-600 bg-gray-50"
  }

  return (
    <div className="rounded-lg border p-4 transition-all hover:shadow-md">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className={`p-1 rounded ${getTypeColor(inspiration.type)}`}>{getTypeIcon(inspiration.type)}</div>
          <h3 className="font-medium">{inspiration.title}</h3>
        </div>
        <div className="text-xs text-muted-foreground">{formatDate(inspiration.createdAt)}</div>
      </div>

      <p className="text-sm text-muted-foreground line-clamp-3 mb-3">{inspiration.content}</p>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs">
            {inspiration.type}
          </Badge>
          <Badge variant="secondary" className={`text-xs ${getMoodColor(inspiration.mood)}`}>
            {inspiration.mood}
          </Badge>
        </div>

        <div className="flex flex-wrap gap-1">
          {inspiration.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {inspiration.source && <div className="text-xs text-muted-foreground">灵感来源：{inspiration.source}</div>}
      </div>
    </div>
  )
}
