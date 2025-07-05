import { CalendarDays, FileText, Heart, MessageCircle, User2, Lightbulb, Camera } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HomePage() {
  return (
    <div className="grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Recent Mood */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">最近心情</CardTitle>
          <CardDescription>你最近的感受</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Heart className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium">思考</p>
              <p className="text-xs text-muted-foreground">2小时前</p>
            </div>
          </div>
          <p className="mt-4 text-sm">"今天感觉很怀旧。回看老照片让我意识到这几年变化了多少。"</p>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">即将到来的事件</CardTitle>
          <CardDescription>接下来几天的日程</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
              <CalendarDays className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium">项目截止日期</p>
              <p className="text-xs text-muted-foreground">明天，晚上11:59</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
              <User2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium">和Sarah喝咖啡</p>
              <p className="text-xs text-muted-foreground">周六，下午2:00</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-0">
          <Button variant="ghost" size="sm" className="w-full">
            查看所有事件
          </Button>
        </CardFooter>
      </Card>

      {/* Recent People */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">最近联系的人</CardTitle>
          <CardDescription>你最近互动的人</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg" alt="Sarah" />
              <AvatarFallback>S</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium">Sarah Chen</p>
              <p className="text-xs text-muted-foreground">上周送了礼物</p>
            </div>
            <Badge variant="outline" className="ml-auto">
              朋友
            </Badge>
          </div>
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg" alt="Mike" />
              <AvatarFallback>M</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium">Mike Johnson</p>
              <p className="text-xs text-muted-foreground">周二一起吃饭</p>
            </div>
            <Badge variant="outline" className="ml-auto">
              同事
            </Badge>
          </div>
        </CardContent>
        <CardFooter className="pt-0">
          <Button variant="ghost" size="sm" className="w-full">
            查看所有人
          </Button>
        </CardFooter>
      </Card>

      {/* Recent Inspiration */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">最近灵感</CardTitle>
          <CardDescription>你最新的创作想法</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-yellow-100 text-yellow-600">
                <Lightbulb className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">城市夜景的诗意</p>
                <p className="text-xs text-muted-foreground">霓虹灯下的孤独行人...</p>
                <div className="mt-1 flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    写作
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    忧郁
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-orange-100 text-orange-600">
                <Camera className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">时间的颜色</p>
                <p className="text-xs text-muted-foreground">如果时间有颜色...</p>
                <div className="mt-1 flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    摄影
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    平静
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-0">
          <Button variant="ghost" size="sm" className="w-full">
            查看所有灵感
          </Button>
        </CardFooter>
      </Card>

      {/* Recent Notes */}
      <Card className="md:col-span-2">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">最近笔记</CardTitle>
          <CardDescription>你最新的想法和灵感</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">全部</TabsTrigger>
              <TabsTrigger value="personal">个人</TabsTrigger>
              <TabsTrigger value="work">工作</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="grid gap-4">
              <div className="rounded-lg border p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Lisa推荐的书</p>
                  <Badge variant="outline" className="text-xs">
                    个人
                  </Badge>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Lisa推荐了《原子习惯》- 这个周末要去看看。</p>
                <div className="mt-3 flex items-center text-xs text-muted-foreground">
                  <CalendarDays className="mr-1 h-3 w-3" />
                  <span>昨天</span>
                  <User2 className="ml-3 mr-1 h-3 w-3" />
                  <span>Lisa</span>
                </div>
              </div>
              <div className="rounded-lg border p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">下季度项目想法</p>
                  <Badge variant="outline" className="text-xs">
                    工作
                  </Badge>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">为Q3头脑风暴了一些潜在项目。需要和团队讨论。</p>
                <div className="mt-3 flex items-center text-xs text-muted-foreground">
                  <CalendarDays className="mr-1 h-3 w-3" />
                  <span>3天前</span>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="pt-0">
          <Button variant="ghost" size="sm" className="w-full">
            查看所有笔记
          </Button>
        </CardFooter>
      </Card>

      {/* Timeline Snapshot */}
      <Card className="lg:col-span-3">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">时间轴快照</CardTitle>
          <CardDescription>你最近的活动和情绪</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border"></div>
            <div className="space-y-6">
              <div className="relative pl-10">
                <div className="absolute left-0 top-1 h-8 w-8 rounded-full border bg-background flex items-center justify-center">
                  <MessageCircle className="h-4 w-4 text-primary" />
                </div>
                <div className="rounded-lg border p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">发布了一条反思</p>
                    <p className="text-xs text-muted-foreground">2小时前</p>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    "今天感觉很怀旧。回看老照片让我意识到这几年变化了多少。"
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      思考
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      怀旧
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="relative pl-10">
                <div className="absolute left-0 top-1 h-8 w-8 rounded-full border bg-background flex items-center justify-center">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <div className="rounded-lg border p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">添加了笔记</p>
                    <p className="text-xs text-muted-foreground">昨天</p>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">Lisa推荐的书：《原子习惯》</p>
                  <div className="mt-3 flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      个人
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Lisa
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-0">
          <Button variant="ghost" size="sm" className="w-full">
            查看完整时间轴
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
