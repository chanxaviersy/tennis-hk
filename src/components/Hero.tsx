'use client'

import { motion } from 'framer-motion'
import { Trophy, Users, MapPin, TrendingUp } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface HeroBannerProps {
  userName?: string
  matchesPlayed?: number
  upcomingMatches?: number
}

export function HeroBanner({ 
  userName = '球友', 
  matchesPlayed = 24, 
  upcomingMatches = 3 
}: HeroBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-3xl mx-4 mb-4 gradient-green p-5 text-white"
    >
      {/* Decorative tennis balls */}
      <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full tennis-ball-bg opacity-20" />
      <div className="absolute -bottom-12 -left-4 w-24 h-24 rounded-full tennis-ball-bg opacity-15" />
      
      {/* Court lines pattern */}
      <div className="absolute inset-0 court-lines opacity-30" />
      
      <div className="relative">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-xs opacity-80">歡迎返嚟</p>
            <h2 className="text-2xl font-bold font-display">{userName} 👋</h2>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
            <Trophy className="w-5 h-5" />
          </div>
        </div>
        
        <p className="text-sm opacity-90 mb-4">
          今日香港 ☀️ 26°C，完美打波天氣！
        </p>
        
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white/15 backdrop-blur rounded-xl p-2.5 text-center">
            <p className="text-lg font-bold font-mono">{matchesPlayed}</p>
            <p className="text-[10px] opacity-80">已完成</p>
          </div>
          <div className="bg-white/15 backdrop-blur rounded-xl p-2.5 text-center">
            <p className="text-lg font-bold font-mono">{upcomingMatches}</p>
            <p className="text-[10px] opacity-80">即將</p>
          </div>
          <div className="bg-white/15 backdrop-blur rounded-xl p-2.5 text-center">
            <p className="text-lg font-bold font-mono">4.7</p>
            <p className="text-[10px] opacity-80">評分</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function FilterChips({ 
  options, 
  value, 
  onChange 
}: { 
  options: { id: string; label: string; count?: number }[]
  value: string
  onChange: (id: string) => void
}) {
  return (
    <div className="px-4 mb-3 overflow-x-auto hide-scrollbar">
      <div className="flex gap-2">
        {options.map((option) => {
          const isActive = value === option.id
          return (
            <button
              key={option.id}
              onClick={() => onChange(option.id)}
              className={cn(
                "flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all tap-smooth",
                isActive 
                  ? "bg-tennis-green text-white shadow-md shadow-tennis-green/20" 
                  : "bg-white text-gray-600 border border-gray-200"
              )}
            >
              {option.label}
              {option.count !== undefined && (
                <span className={cn(
                  "text-[10px] px-1.5 py-0.5 rounded-full",
                  isActive ? "bg-white/20" : "bg-gray-100"
                )}>
                  {option.count}
                </span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export function SectionHeader({ 
  title, 
  subtitle, 
  action 
}: { 
  title: string
  subtitle?: string
  action?: React.ReactNode 
}) {
  return (
    <div className="px-4 mb-3 flex items-end justify-between">
      <div>
        <h2 className="text-lg font-bold text-gray-900 font-display">{title}</h2>
        {subtitle && <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>}
      </div>
      {action}
    </div>
  )
}

export function QuickActions() {
  const actions = [
    { icon: '🎾', label: '約波', color: 'bg-green-50 text-tennis-green' },
    { icon: '📍', label: '搵場', color: 'bg-blue-50 text-blue-600' },
    { icon: '👥', label: '波友', color: 'bg-orange-50 text-orange-600' },
    { icon: '🏆', label: '比賽', color: 'bg-purple-50 text-purple-600' },
  ]
  
  return (
    <div className="px-4 mb-5">
      <div className="grid grid-cols-4 gap-3">
        {actions.map((action, i) => (
          <motion.button
            key={action.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center gap-1.5 tap-smooth"
          >
            <div className={cn(
              "w-14 h-14 rounded-2xl flex items-center justify-center text-2xl",
              action.color
            )}>
              {action.icon}
            </div>
            <span className="text-xs font-medium text-gray-700">{action.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
