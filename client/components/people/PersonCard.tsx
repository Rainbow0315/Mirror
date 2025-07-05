import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MapPin, MessageSquare } from "lucide-react"
import type { Person } from "@/types/person"
import { formatDate } from "@/lib/date"

interface PersonCardProps {
  person: Person
}

export function PersonCard({ person }: PersonCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={person.avatar || "/placeholder.svg"} alt={person.name} />
            <AvatarFallback>{person.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-base">{person.name}</CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Badge variant="outline">{person.relationship}</Badge>
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                <span>{person.location}</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="mb-3">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MessageSquare className="h-3 w-3" />
            <span>
              最后互动：{person.interactionType}，{formatDate(person.lastInteraction)}
            </span>
          </div>
        </div>
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-medium">备注</h4>
            <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
              {person.notes.map((note, index) => (
                <li key={index} className="flex items-start gap-1">
                  <span className="mt-1 h-1 w-1 rounded-full bg-muted-foreground"></span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium">喜好</h4>
            <div className="mt-1 grid grid-cols-2 gap-2">
              <div>
                <h5 className="text-xs font-medium text-green-600">喜欢</h5>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {person.likes.map((like, index) => (
                    <li key={index} className="flex items-start gap-1">
                      <span className="mt-1 h-1 w-1 rounded-full bg-green-600"></span>
                      <span>{like}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-xs font-medium text-red-600">不喜欢</h5>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {person.dislikes.map((dislike, index) => (
                    <li key={index} className="flex items-start gap-1">
                      <span className="mt-1 h-1 w-1 rounded-full bg-red-600"></span>
                      <span>{dislike}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium">礼物</h4>
            <div className="mt-1 space-y-1 text-sm text-muted-foreground">
              {person.gifts.map((gift, index) => (
                <div key={index} className="flex items-start gap-1">
                  <span className="mt-1 h-1 w-1 rounded-full bg-muted-foreground"></span>
                  <span>
                    {gift.type === "given" ? "送出：" : "收到："}
                    {gift.item} ({formatDate(gift.date)})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
