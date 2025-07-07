export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('zh-CN', {
    month: 'short',
    day: 'numeric',
  });
}


export function formatDateTime(date: Date): string {
  return date.toLocaleDateString("zh-CN", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

export function getRelativeTime(date: Date): string {
  const now = new Date()
  const diffInMs = now.getTime() - date.getTime()
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

  if (diffInDays === 0) {
    return "今天"
  } else if (diffInDays === 1) {
    return "昨天"
  } else if (diffInDays < 7) {
    return `${diffInDays}天前`
  } else {
    return formatDate(date)
  }
}
