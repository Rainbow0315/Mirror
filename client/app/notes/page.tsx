import { NoteCard } from "@/components/notes/NoteCard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import type { Note } from "@/types/note"

export default function NotesPage() {
  // 示例笔记数据
  const notes: Note[] = [
    {
      id: "1",
      title: "下季度项目想法",
      content: "为Q3头脑风暴了一些潜在项目。需要和团队讨论。",
      date: "2025-06-24",
      tags: ["工作", "想法", "规划"],
      people: [],
      createdAt: new Date("2025-06-24"),
      updatedAt: new Date("2025-06-24"),
    },
    {
      id: "2",
      title: "Lisa推荐的书",
      content: "Lisa推荐了《原子习惯》。这个周末要去看看。",
      date: "2025-06-26",
      tags: ["个人", "书籍"],
      people: ["Lisa"],
      createdAt: new Date("2025-06-26"),
      updatedAt: new Date("2025-06-26"),
    },
    {
      id: "3",
      title: "工作生活平衡的反思",
      content: "我需要在工作之外为自己找更多时间。也许我应该尝试Sarah推荐的冥想app。",
      date: "2025-06-27",
      tags: ["个人", "反思", "健康"],
      people: ["Sarah"],
      createdAt: new Date("2025-06-27"),
      updatedAt: new Date("2025-06-27"),
    },
    {
      id: "4",
      title: "咖啡店推荐",
      content: "Blue Bottle Coffee的冷萃很棒。Sarah提到下个月办公室附近会开一家新店。",
      date: "2025-06-25",
      tags: ["个人", "美食"],
      people: ["Sarah"],
      createdAt: new Date("2025-06-25"),
      updatedAt: new Date("2025-06-25"),
    },
    {
      id: "5",
      title: "会议记录：团队同步",
      content: "讨论了项目时间线和资源分配。Mike将负责后端实现。",
      date: "2025-06-23",
      tags: ["工作", "会议"],
      people: ["Mike", "团队"],
      createdAt: new Date("2025-06-23"),
      updatedAt: new Date("2025-06-23"),
    },
  ]

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
