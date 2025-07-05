import { InspirationCard } from "@/components/inspiration/InspirationCard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import type { Inspiration } from "@/types/inspiration"

export default function InspirationPage() {
  // 示例灵感数据
  const inspirations: Inspiration[] = [
    {
      id: "1",
      title: "城市夜景的诗意",
      content: "霓虹灯下的孤独行人，每个人都是自己故事的主角。想写一个关于都市夜归人的短篇小说。",
      type: "写作",
      mood: "忧郁",
      tags: ["小说", "都市", "夜景"],
      source: "散步时的观察",
      createdAt: new Date("2025-06-28T22:30:00"),
      updatedAt: new Date("2025-06-28T22:30:00"),
    },
    {
      id: "2",
      title: "时间的颜色",
      content: "如果时间有颜色，早晨是淡金色，中午是纯白色，黄昏是橙红色，深夜是深蓝色。可以做一个时间主题的摄影系列。",
      type: "摄影",
      mood: "平静",
      tags: ["摄影", "时间", "色彩"],
      source: "看日落时的想法",
      createdAt: new Date("2025-06-27T18:45:00"),
      updatedAt: new Date("2025-06-27T18:45:00"),
    },
    {
      id: "3",
      title: "记忆的味道",
      content:
        "每个人的童年都有一种特定的味道。奶奶家的桂花糕，妈妈做的番茄鸡蛋面，爸爸买的糖葫芦。想写一篇关于味觉记忆的散文。",
      type: "写作",
      mood: "怀念",
      tags: ["散文", "童年", "记忆"],
      source: "闻到桂花香时",
      createdAt: new Date("2025-06-26T15:20:00"),
      updatedAt: new Date("2025-06-26T15:20:00"),
    },
    {
      id: "4",
      title: "数字化情感",
      content: "现代人的情感表达越来越依赖emoji和表情包。想探讨数字时代的情感表达方式，做一个互动装置艺术。",
      type: "艺术",
      mood: "思考",
      tags: ["装置艺术", "数字化", "情感"],
      source: "看到朋友只用emoji回复",
      createdAt: new Date("2025-06-25T20:10:00"),
      updatedAt: new Date("2025-06-25T20:10:00"),
    },
    {
      id: "5",
      title: "雨声的节奏",
      content: "不同材质上的雨声有不同的节奏。玻璃上是清脆的，叶子上是柔和的，水泥地上是厚重的。想录制一首雨声交响曲。",
      type: "音乐",
      mood: "宁静",
      tags: ["音乐", "自然", "雨声"],
      source: "雨天在咖啡店",
      createdAt: new Date("2025-06-24T14:30:00"),
      updatedAt: new Date("2025-06-24T14:30:00"),
    },
    {
      id: "6",
      title: "平行世界的自己",
      content: "如果每个选择都会创造一个平行世界，那么有多少个不同的我在过着不同的生活？想写一个科幻短篇。",
      type: "写作",
      mood: "好奇",
      tags: ["科幻", "平行世界", "哲学"],
      source: "看科幻电影后的思考",
      createdAt: new Date("2025-06-23T21:15:00"),
      updatedAt: new Date("2025-06-23T21:15:00"),
    },
  ]

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>你的灵感</CardTitle>
              <CardDescription>记录创作灵感和想法火花</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="搜索灵感..."
                  className="w-full rounded-md pl-8 md:w-[200px] lg:w-[300px]"
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">全部灵感</TabsTrigger>
              <TabsTrigger value="writing">写作</TabsTrigger>
              <TabsTrigger value="art">艺术</TabsTrigger>
              <TabsTrigger value="music">音乐</TabsTrigger>
              <TabsTrigger value="photography">摄影</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-0">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {inspirations.map((inspiration) => (
                  <InspirationCard key={inspiration.id} inspiration={inspiration} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="writing" className="mt-0">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {inspirations
                  .filter((inspiration) => inspiration.type === "写作")
                  .map((inspiration) => (
                    <InspirationCard key={inspiration.id} inspiration={inspiration} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="art" className="mt-0">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {inspirations
                  .filter((inspiration) => inspiration.type === "艺术")
                  .map((inspiration) => (
                    <InspirationCard key={inspiration.id} inspiration={inspiration} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="music" className="mt-0">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {inspirations
                  .filter((inspiration) => inspiration.type === "音乐")
                  .map((inspiration) => (
                    <InspirationCard key={inspiration.id} inspiration={inspiration} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="photography" className="mt-0">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {inspirations
                  .filter((inspiration) => inspiration.type === "摄影")
                  .map((inspiration) => (
                    <InspirationCard key={inspiration.id} inspiration={inspiration} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
