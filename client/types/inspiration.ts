export interface Inspiration {
  id: string
  title: string
  content: string
  type: "写作" | "艺术" | "音乐" | "摄影" | "其他"
  mood: string
  tags: string[]
  source?: string // 灵感来源
  createdAt: Date
  updatedAt: Date
}
