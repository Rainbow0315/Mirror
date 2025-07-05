"use client"

import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()

  const getPageTitle = () => {
    switch (pathname) {
      case "/":
        return "仪表盘"
      case "/timeline":
        return "时间轴"
      case "/notes":
        return "笔记"
      case "/inspiration":
        return "灵感"
      case "/people":
        return "人物"
      default:
        return "Mirror"
    }
  }

  return (
    <div className="flex h-14 items-center border-b px-4">
      <h1 className="text-lg font-semibold">{getPageTitle()}</h1>
      <div className="ml-auto flex items-center gap-4">
        <Button variant="outline" size="sm">
          <Plus className="mr-2 h-4 w-4" />
          新建条目
        </Button>
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder.svg" alt="User" />
          <AvatarFallback>我</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
