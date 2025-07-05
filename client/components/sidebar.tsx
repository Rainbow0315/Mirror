"use client"

import Link from "next/link"
import { Clock, FileText, Home, Users } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Sidebar() {
  const pathname = usePathname()

  const routes = [
    {
      name: "Dashboard",
      path: "/",
      icon: Home,
    },
    {
      name: "Timeline",
      path: "/timeline",
      icon: Clock,
    },
    {
      name: "Notes",
      path: "/notes",
      icon: FileText,
    },
    {
      name: "People",
      path: "/people",
      icon: Users,
    },
  ]

  return (
    <aside className="hidden w-64 border-r bg-muted/40 md:block">
      <div className="flex h-14 items-center border-b px-4">
        <h2 className="text-lg font-semibold">Mirror</h2>
      </div>
      <nav className="grid gap-2 p-4">
        {routes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
              pathname === route.path ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground",
            )}
          >
            <route.icon className="h-5 w-5" />
            <span className="font-medium">{route.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
