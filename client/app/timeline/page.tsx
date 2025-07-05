import { FileText, Heart, Lightbulb } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TimelinePage() {
  // 时间轴数据
  const timelineData = [
    {
      time: "22:30",
      date: "2025-06-28",
      entries: {
        diary: {
          content: "今天终于要提交项目了，感觉压力很大但也很有成就感。这几个月的努力终于要有结果了。",
          tags: ["工作", "项目"],
        },
        mood: {
          emotion: "紧张",
          intensity: 8,
          content: "deadline前的焦虑，但也有期待",
        },
        inspiration: {
          title: "城市夜景的诗意",
          content: "霓虹灯下的孤独行人，每个人都是自己故事的主角。",
          type: "写作",
          mood: "忧郁",
        },
      },
    },
    {
      time: "18:45",
      date: "2025-06-27",
      entries: {
        diary: {
          content: "今天思考了很多关于工作生活平衡的问题。也许我应该尝试Sarah推荐的冥想app。",
          tags: ["个人", "反思"],
        },
        mood: {
          emotion: "思考",
          intensity: 6,
          content: "对未来有些迷茫，但也充满希望",
        },
        inspiration: {
          title: "时间的颜色",
          content: "如果时间有颜色，早晨是淡金色，中午是纯白色，黄昏是橙红色。",
          type: "摄影",
          mood: "平静",
        },
      },
    },
    {
      time: "14:00",
      date: "2025-06-25",
      entries: {
        diary: {
          content: "和Sarah在Blue Bottle Coffee聊天，她分享了新工作的经历，还推荐了一个冥想app。",
          tags: ["社交", "咖啡"],
        },
        mood: {
          emotion: "开心",
          intensity: 9,
          content: "和朋友聊天总是让人心情愉悦",
        },
      },
    },
    {
      time: "21:15",
      date: "2025-06-24",
      entries: {
        diary: {
          content: "Lisa推荐了《原子习惯》这本书，听起来很有趣，这个周末要去看看。",
          tags: ["个人", "书籍"],
        },
        mood: {
          emotion: "好奇",
          intensity: 7,
          content: "对新知识总是充满期待",
        },
      },
    },
    {
      time: "19:00",
      date: "2025-06-23",
      entries: {
        diary: {
          content: "和Mike在樱花日料店吃饭，他很喜欢寿司但不太喜欢天妇罗。聊了很多技术话题。",
          tags: ["社交", "美食"],
        },
        mood: {
          emotion: "放松",
          intensity: 8,
          content: "和同事朋友聊天很轻松",
        },
      },
    },
  ]

  // 日程事件数据
  const scheduleEvents = [
    {
      title: "项目截止日期",
      startTime: "2025-06-28T20:00",
      endTime: "2025-06-28T23:59",
      type: "deadline",
      color: "bg-red-500",
    },
    {
      title: "和Sarah喝咖啡",
      startTime: "2025-06-25T14:00",
      endTime: "2025-06-25T16:00",
      type: "social",
      color: "bg-green-500",
    },
    {
      title: "团队会议",
      startTime: "2025-06-24T10:00",
      endTime: "2025-06-24T11:30",
      type: "work",
      color: "bg-blue-500",
    },
    {
      title: "和Mike晚餐",
      startTime: "2025-06-23T19:00",
      endTime: "2025-06-23T21:00",
      type: "social",
      color: "bg-green-500",
    },
  ]

  // 获取情绪对应的颜色
  const getEmotionColor = (emotion: string) => {
    const colors: { [key: string]: string } = {
      开心: "text-yellow-600 bg-yellow-50",
      紧张: "text-red-600 bg-red-50",
      思考: "text-blue-600 bg-blue-50",
      好奇: "text-purple-600 bg-purple-50",
      放松: "text-green-600 bg-green-50",
    }
    return colors[emotion] || "text-gray-600 bg-gray-50"
  }

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>我的时间轴</CardTitle>
          <CardDescription>追踪你的生活事件、情绪和回忆</CardDescription>
        </CardHeader>
        <CardContent>
          {/* 时间轴容器 */}
          <div className="relative">
            {/* 时间刻度线 */}
            <div className="absolute left-20 top-0 bottom-0 w-px bg-border"></div>

            {/* 日程事件覆盖层 */}
            <div className="absolute right-4 top-0 w-32 space-y-1">
              {scheduleEvents.map((event, index) => (
                <div
                  key={index}
                  className={`${event.color} rounded-md p-2 text-white text-xs shadow-sm`}
                  style={{
                    marginTop: `${index * 120}px`,
                    height: event.type === "deadline" ? "40px" : "60px",
                  }}
                >
                  <div className="font-medium">{event.title}</div>
                  <div className="text-xs opacity-90">
                    {new Date(event.startTime).toLocaleTimeString("zh-CN", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* 主时间轴内容 */}
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <div key={index} className="relative">
                  {/* 时间标记 */}
                  <div className="absolute left-0 top-4 w-16 text-right">
                    <div className="text-sm font-medium">
                      {new Date(item.date).toLocaleDateString("zh-CN", {
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                    <div className="text-xs text-muted-foreground">{item.time}</div>
                  </div>

                  {/* 时间节点 */}
                  <div className="absolute left-[76px] top-6 h-4 w-4 rounded-full border-2 border-primary bg-background"></div>

                  {/* 内容区域 */}
                  <div className="ml-24 mr-40 grid grid-cols-3 gap-4">
                    {/* 日记列 */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-600">日记</span>
                      </div>
                      <div className="rounded-lg border border-blue-200 bg-blue-50/50 p-3">
                        <p className="text-sm">{item.entries.diary.content}</p>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {item.entries.diary.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* 心情列 */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Heart className="h-4 w-4 text-pink-600" />
                        <span className="text-sm font-medium text-pink-600">心情</span>
                      </div>
                      <div className={`rounded-lg border p-3 ${getEmotionColor(item.entries.mood.emotion)}`}>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{item.entries.mood.emotion}</span>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 10 }).map((_, i) => (
                              <div
                                key={i}
                                className={`h-2 w-2 rounded-full ${
                                  i < item.entries.mood.intensity ? "bg-current" : "bg-current opacity-20"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="mt-2 text-sm">{item.entries.mood.content}</p>
                      </div>
                    </div>

                    {/* 灵感列 */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Lightbulb className="h-4 w-4 text-yellow-600" />
                        <span className="text-sm font-medium text-yellow-600">灵感</span>
                      </div>
                      {item.entries.inspiration ? (
                        <div className="rounded-lg border border-yellow-200 bg-yellow-50/50 p-3">
                          <h4 className="font-medium text-sm mb-1">{item.entries.inspiration.title}</h4>
                          <p className="text-sm">{item.entries.inspiration.content}</p>
                          <div className="mt-2 flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              {item.entries.inspiration.type}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {item.entries.inspiration.mood}
                            </Badge>
                          </div>
                        </div>
                      ) : (
                        <div className="rounded-lg border border-gray-200 bg-gray-50/50 p-3 text-center text-sm text-muted-foreground">
                          暂无灵感记录
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
