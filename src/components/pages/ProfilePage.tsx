'use client'

import { motion } from 'framer-motion'
import { TopBar } from '@/components/TopBar'
import { Trophy, Target, Calendar, TrendingUp, Settings, ChevronRight, Award, Zap, Heart, Settings as SettingsIcon } from 'lucide-react'
import Image from 'next/image'

export function ProfilePage() {
  return (
    <div className="min-h-screen pb-24">
      <TopBar 
        title="我的" 
        subtitle="管理你嘅個人檔案"
        action={
          <button className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center">
            <Settings className="w-5 h-5 text-gray-700" />
          </button>
        }
      />

      <div className="pt-4 px-4">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-5 border border-gray-100 mb-4"
        >
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-20 h-20 rounded-full gradient-sunset flex items-center justify-center text-white text-2xl font-bold">
                XC
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-tennis-ball rounded-full flex items-center justify-center text-xs font-bold text-tennis-green-dark">
                3.5
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 font-display">Xavier Chan</h2>
              <p className="text-sm text-gray-500 mb-1">@xavier.tennis</p>
              <div className="flex items-center gap-2 text-xs">
                <span className="px-2 py-0.5 bg-tennis-green/10 text-tennis-green rounded-full font-medium">
                  NTRP 3.5
                </span>
                <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full font-medium">
                  底線型
                </span>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 mt-3 leading-relaxed">
            🎾 香港網球愛好者 | 維園常客 | 歡迎一齊約波！
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-4 gap-2 mb-4"
        >
          {[
            { icon: Trophy, label: '比賽', value: '24' },
            { icon: Target, label: '勝率', value: '62%' },
            { icon: Calendar, label: '約球', value: '38' },
            { icon: TrendingUp, label: '排名', value: '#247' },
          ].map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="bg-white rounded-xl p-3 text-center border border-gray-100">
                <Icon className="w-4 h-4 mx-auto mb-1 text-tennis-green" />
                <p className="text-base font-bold text-gray-900 font-mono">{stat.value}</p>
                <p className="text-[10px] text-gray-500">{stat.label}</p>
              </div>
            )
          })}
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-4 border border-gray-100 mb-4"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <Award className="w-4 h-4 text-tennis-orange" />
              成就
            </h3>
            <button className="text-xs text-tennis-green font-medium">查看全部</button>
          </div>
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-1">
            {[
              { emoji: '🏆', title: '首場勝利', color: 'bg-yellow-50' },
              { emoji: '⭐', title: '連續 10 場', color: 'bg-blue-50' },
              { emoji: '🎾', title: '百場達人', color: 'bg-green-50' },
              { emoji: '🔥', title: '連勝中', color: 'bg-red-50' },
            ].map((badge) => (
              <div key={badge.title} className={`flex-shrink-0 w-16 ${badge.color} rounded-xl p-2 text-center`}>
                <div className="text-2xl mb-1">{badge.emoji}</div>
                <p className="text-[10px] text-gray-700 font-medium">{badge.title}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Menu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl border border-gray-100 overflow-hidden mb-4"
        >
          {[
            { icon: Calendar, label: '我的約球', badge: '3' },
            { icon: Heart, label: '收藏球場', badge: '5' },
            { icon: Zap, label: '活動記錄' },
            { icon: SettingsIcon, label: '設定' },
          ].map((item) => {
            const Icon = item.icon
            return (
              <button 
                key={item.label}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-tennis-green/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-tennis-green" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">{item.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  {item.badge && (
                    <span className="px-2 py-0.5 bg-tennis-accent text-white text-[10px] font-bold rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              </button>
            )
          })}
        </motion.div>

        <p className="text-center text-xs text-gray-400 mb-4">
          TennisHub HK v0.1.0 · Made with 🎾 in Hong Kong
        </p>
      </div>
    </div>
  )
}
