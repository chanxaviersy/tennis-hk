import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string, time?: string) {
  const d = new Date(date)
  const weekdays = ['日', '一', '二', '三', '四', '五', '六']
  const month = d.getMonth() + 1
  const day = d.getDate()
  const weekday = weekdays[d.getDay()]
  const result = `${month}月${day}日 (週${weekday})`
  return time ? `${result} · ${time}` : result
}

export function formatTime(time: string) {
  return time
}

export function getTimeOfDay(time: string): 'morning' | 'afternoon' | 'evening' | 'night' {
  const hour = parseInt(time.split(':')[0])
  if (hour < 12) return 'morning'
  if (hour < 17) return 'afternoon'
  if (hour < 21) return 'evening'
  return 'night'
}

export function timeAgo(date: string) {
  const d = new Date(date)
  const now = new Date()
  const diff = now.getTime() - d.getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  if (days === 0) return '今日'
  if (days === 1) return '昨日'
  if (days < 7) return `${days}天前`
  if (days < 30) return `${Math.floor(days / 7)}週前`
  return `${Math.floor(days / 30)}月前`
}
