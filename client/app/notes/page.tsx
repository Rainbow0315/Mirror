"use client"

import { NoteCard } from "@/components/notes/NoteCard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import type { Note } from "@/types/note"
import{useEffect, useState} from "react"

export default function NotesPage() {
  // 定义了一个叫notes的状态，用setNotes去更新
  const [notes, setNotes] = useState<Note[]>([])

  useEffect(() => {
    async function fetchNotes() {
      const res = await fetch("http://localhost:4000/api/notes")
      const data = await res.json()
      setNotes(data)
    }
    fetchNotes()
  }, [])

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>你的笔记</CardTitle>
              <CardDescription>记录你的想法、灵感和回忆</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="搜索笔记..."
                  className="w-full rounded-md pl-8 md:w-[200px] lg:w-[300px]"
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">所有笔记</TabsTrigger>
              <TabsTrigger value="personal">个人</TabsTrigger>
              <TabsTrigger value="work">工作</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-0">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {notes.map((note) => (
                  <NoteCard key={note.id} note={note} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="personal" className="mt-0">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {notes
                  .filter((note) => note.tags.includes("个人"))
                  .map((note) => (
                    <NoteCard key={note.id} note={note} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="work" className="mt-0">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {notes
                  .filter((note) => note.tags.includes("工作"))
                  .map((note) => (
                    <NoteCard key={note.id} note={note} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
