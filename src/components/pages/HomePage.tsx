'use client'

import { motion } from 'framer-motion'
import { TopBar, TopBarAction } from '@/components/TopBar'
import { HeroBanner, FilterChips, SectionHeader, QuickActions } from '@/components/Hero'
import { MatchCard } from '@/components/MatchCard'
import { CourtCard } from '@/components/CourtCard'
import { PostCard } from '@/components/PostCard'
import { matches, courts, posts } from '@/lib/data'
import { useState } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export function HomePage() {
  const [filter, setFilter] = useState('all')
  
  const filterOptions = [
    { id: 'all', label: '全部', count: matches.length },
    { id: 'today', label: '今日' },
    { id: 'tomorrow', label: '聽日' },
    { id: 'weekend', label: '週末' },
    { id: 'beginner', label: '🟢 初學' },
    { id: 'intermediate', label: '🔵 中級' },
    { id: 'advanced', label: '🟠 高級' },
  ]

  const featuredMatches = matches.filter(m => m.status === 'open').slice(0, 3)
  const featuredCourts = courts.slice(0, 3)
  const recentPosts = posts.slice(0, 2)

  return (
    <div className="min-h-screen pb-24">
      <TopBar 
        title="TennisHub" 
        subtitle="香港網球社群"
        action={<TopBarAction badge={2} />}
      />

      <div className="pt-3">
        <HeroBanner 
          userName="Xavier"
          matchesPlayed={24}
          upcomingMatches={3}
        />

        <QuickActions />

        {/* 熱門約球 */}
        <SectionHeader 
          title="熱門約球" 
          subtitle="即刻搵到合適嘅波友"
          action={
            <button className="text-xs text-tennis-green font-medium flex items-center gap-0.5">
              查看全部
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          }
        />
        
        <FilterChips 
          options={filterOptions}
          value={filter}
          onChange={setFilter}
        />
        
        <div className="px-4 space-y-3">
          {featuredMatches.map((match, i) => (
            <MatchCard key={match.id} match={match} index={i} />
          ))}
        </div>

        {/* 推薦球場 */}
        <div className="mt-6">
          <SectionHeader 
            title="推薦球場" 
            subtitle="香港最熱門嘅網球場"
            action={
              <button className="text-xs text-tennis-green font-medium flex items-center gap-0.5">
                查看地圖
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            }
          />
          
          <div className="px-4 overflow-x-auto hide-scrollbar">
            <div className="flex gap-3 pb-2">
              {featuredCourts.map((court, i) => (
                <div key={court.id} className="w-64 flex-shrink-0">
                  <CourtCard court={court} index={i} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 社群動態 */}
        <div className="mt-6">
          <SectionHeader 
            title="社群動態" 
            subtitle="波友最新分享"
            action={
              <button className="text-xs text-tennis-green font-medium flex items-center gap-0.5">
                更多
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            }
          />
          
          <div>
            {recentPosts.map((post, i) => (
              <PostCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>

        {/* 底部品牌區 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 mx-4 mb-6 p-5 rounded-2xl bg-gradient-to-br from-tennis-green to-tennis-green-light text-white text-center"
        >
          <Sparkles className="w-6 h-6 mx-auto mb-2" />
          <h3 className="text-lg font-bold mb-1">即刻加入 TennisHub HK</h3>
          <p className="text-sm opacity-90 mb-3">超過 5,000+ 香港波友已經加入</p>
          <button className="bg-white text-tennis-green px-5 py-2 rounded-full text-sm font-semibold">
            建立個人檔案
          </button>
        </motion.div>
      </div>
    </div>
  )
}
