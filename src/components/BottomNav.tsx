'use client'

import { motion } from 'framer-motion'
import { Home, Calendar, MapPin, User, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

export type TabType = 'home' | 'match' | 'courts' | 'profile'

interface BottomNavProps {
  active: TabType
  onChange: (tab: TabType) => void
  onCreateMatch: () => void
}

export function BottomNav({ active, onChange, onCreateMatch }: BottomNavProps) {
  const tabs = [
    { id: 'home' as const, icon: Home, label: '首頁' },
    { id: 'match' as const, icon: Calendar, label: '約球' },
    { id: 'courts' as const, icon: MapPin, label: '球場' },
    { id: 'profile' as const, icon: User, label: '我的' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-gray-200/50 pb-safe">
      <div className="max-w-screen-md mx-auto px-2 py-2 flex items-center justify-around relative">
        {tabs.slice(0, 2).map((tab) => {
          const Icon = tab.icon
          const isActive = active === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className="flex-1 flex flex-col items-center gap-0.5 py-1.5 tap-smooth"
            >
              <div className="relative">
                <Icon 
                  className={cn(
                    "w-6 h-6 transition-colors",
                    isActive ? "text-tennis-green" : "text-gray-400"
                  )} 
                  strokeWidth={isActive ? 2.5 : 2}
                />
                {isActive && (
                  <motion.div
                    layoutId="active-dot"
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-tennis-green"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
              <span className={cn(
                "text-[10px] font-medium transition-colors",
                isActive ? "text-tennis-green" : "text-gray-400"
              )}>
                {tab.label}
              </span>
            </button>
          )
        })}
        
        {/* 中央創建按鈕 */}
        <button
          onClick={onCreateMatch}
          className="flex flex-col items-center -mt-7 tap-smooth"
        >
          <div className="w-14 h-14 rounded-full gradient-green shadow-lg shadow-tennis-green/30 flex items-center justify-center">
            <Plus className="w-7 h-7 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-[10px] font-medium text-tennis-green mt-0.5">約波</span>
        </button>

        {tabs.slice(2).map((tab) => {
          const Icon = tab.icon
          const isActive = active === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className="flex-1 flex flex-col items-center gap-0.5 py-1.5 tap-smooth"
            >
              <div className="relative">
                <Icon 
                  className={cn(
                    "w-6 h-6 transition-colors",
                    isActive ? "text-tennis-green" : "text-gray-400"
                  )} 
                  strokeWidth={isActive ? 2.5 : 2}
                />
                {isActive && (
                  <motion.div
                    layoutId="active-dot"
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-tennis-green"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
              <span className={cn(
                "text-[10px] font-medium transition-colors",
                isActive ? "text-tennis-green" : "text-gray-400"
              )}>
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
