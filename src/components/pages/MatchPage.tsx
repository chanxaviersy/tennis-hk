'use client'

import { motion } from 'framer-motion'
import { TopBar, TopBarAction } from '@/components/TopBar'
import { FilterChips, SectionHeader } from '@/components/Hero'
import { MatchCard } from '@/components/MatchCard'
import { matches } from '@/lib/data'
import { useState } from 'react'
import { Calendar, MapPin } from 'lucide-react'

export function MatchPage() {
  const [district, setDistrict] = useState('all')
  const [level, setLevel] = useState('all')
  
  const districtOptions = [
    { id: 'all', label: '全港' },
    { id: '灣仔', label: '灣仔' },
    { id: '九龍城', label: '九龍城' },
    { id: '大埔', label: '大埔' },
    { id: '沙田', label: '沙田' },
    { id: '屯門', label: '屯門' },
  ]
  
  const levelOptions = [
    { id: 'all', label: '所有水平' },
    { id: 'beginner', label: '🟢 初學' },
    { id: 'intermediate', label: '🔵 中級' },
    { id: 'advanced', label: '🟠 高級' },
    { id: 'pro', label: '🟣 專業' },
  ]

  return (
    <div className="min-h-screen pb-24">
      <TopBar 
        title="約球" 
        subtitle="搵到合適嘅波友一齊打波"
        action={<TopBarAction />}
      />

      <div className="pt-4">
        <SectionHeader 
          title="按地區" 
          subtitle="選擇你想打波嘅地區"
        />
        <FilterChips 
          options={districtOptions}
          value={district}
          onChange={setDistrict}
        />

        <SectionHeader 
          title="按水平" 
          subtitle="搵到水平相近嘅對手"
        />
        <FilterChips 
          options={levelOptions}
          value={level}
          onChange={setLevel}
        />

        <SectionHeader 
          title={`全部約球 (${matches.length})`}
          subtitle="最新發佈嘅約球"
        />
        
        <div className="px-4 space-y-3">
          {matches.map((match, i) => (
            <MatchCard key={match.id} match={match} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
