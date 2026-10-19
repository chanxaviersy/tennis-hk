'use client'

import { motion } from 'framer-motion'
import { Bell, Search } from 'lucide-react'
import { cn } from '@/lib/utils'

export function TopBar({ title, subtitle, action }: { 
  title: string
  subtitle?: string
  action?: React.ReactNode 
}) {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-40 glass border-b border-gray-200/50"
    >
      <div className="max-w-screen-md mx-auto px-4 py-3 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900 font-display tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>
          )}
        </div>
        <div className="flex items-center gap-2">
          {action}
        </div>
      </div>
    </motion.header>
  )
}

export function TopBarAction({ onClick, badge }: { onClick?: () => void; badge?: number }) {
  return (
    <div className="flex items-center gap-1">
      <button className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center tap-smooth relative">
        <Search className="w-5 h-5 text-gray-700" />
      </button>
      <button className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center tap-smooth relative">
        <Bell className="w-5 h-5 text-gray-700" />
        {badge && (
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
        )}
      </button>
    </div>
  )
}
