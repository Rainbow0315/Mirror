import { Badge } from "@/components/ui/badge"
import { Tag, Users } from "lucide-react"
import type { Note } from "@/types/note"
import { formatDate } from "@/lib/date"

interface NoteCardProps {
  note: Note
}

export function NoteCard({ note }: NoteCardProps) {
  return (
    <div className="rounded-lg border p-4 transition-all hover:shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">{note.title}</h3>
        <div className="text-xs text-muted-foreground">{formatDate(note.createdAt)}</div>
      </div>
      <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{note.content}</p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {note.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs flex items-center gap-1">
            <Tag className="h-3 w-3" />
            {tag}
          </Badge>
        ))}
        {note.people.map((person) => (
          <Badge key={person} variant="outline" className="text-xs flex items-center gap-1">
            <Users className="h-3 w-3" />
            {person}
          </Badge>
        ))}
      </div>
    </div>
  )
}
