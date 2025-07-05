import { PersonCard } from "@/components/people/PersonCard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import type { Person } from "@/types/person"

export default function PeoplePage() {
  // 示例人物数据
  const people: Person[] = [
    {
      id: "1",
      name: "Sarah Chen",
      relationship: "朋友",
      location: "旧金山，加州",
      lastInteraction: new Date("2025-06-25"),
      interactionType: "喝咖啡",
      notes: ["推荐了冥想app", "喜欢徒步和户外活动", "生日：8月15日"],
      tags: ["朋友", "科技", "健身"],
      likes: ["咖啡店", "徒步", "摄影"],
      dislikes: ["拥挤的地方", "辣食"],
      gifts: [
        { type: "given", item: "书：《牧羊少年奇幻之旅》", date: new Date("2024-12-25") },
        { type: "received", item: "手工围巾", date: new Date("2025-01-15") },
      ],
      avatar: "/placeholder.svg",
    },
    {
      id: "2",
      name: "Mike Johnson",
      relationship: "同事",
      location: "西雅图，华盛顿",
      lastInteraction: new Date("2025-06-23"),
      interactionType: "晚餐",
      notes: ["从事后端开发", "对AI和机器学习感兴趣", "有一只叫Max的金毛"],
      tags: ["同事", "科技", "狗"],
      likes: ["日料", "精酿啤酒", "徒步"],
      dislikes: ["天妇罗", "吵闹的音乐"],
      gifts: [{ type: "given", item: "技术会议门票", date: new Date("2025-03-10") }],
      avatar: "/placeholder.svg",
    },
    {
      id: "3",
      name: "Lisa Wong",
      relationship: "朋友",
      location: "纽约，纽约",
      lastInteraction: new Date("2025-06-26"),
      interactionType: "电话",
      notes: ["推荐了《原子习惯》", "计划8月来访", "在找市场营销的新工作"],
      tags: ["朋友", "书籍", "市场营销"],
      likes: ["泰国菜", "悬疑小说", "爵士乐"],
      dislikes: ["寒冷天气", "动作电影"],
      gifts: [{ type: "received", item: "手工耳环", date: new Date("2025-02-14") }],
      avatar: "/placeholder.svg",
    },
  ]

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>你的人脉</CardTitle>
              <CardDescription>记录生活中重要的人</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="搜索人物..."
                  className="w-full rounded-md pl-8 md:w-[200px] lg:w-[300px]"
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">全部</TabsTrigger>
              <TabsTrigger value="friends">朋友</TabsTrigger>
              <TabsTrigger value="colleagues">同事</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {people.map((person) => (
                  <PersonCard key={person.id} person={person} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="friends" className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {people
                  .filter((person) => person.relationship === "朋友")
                  .map((person) => (
                    <PersonCard key={person.id} person={person} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="colleagues" className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {people
                  .filter((person) => person.relationship === "同事")
                  .map((person) => (
                    <PersonCard key={person.id} person={person} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
