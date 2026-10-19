'use client'

import { motion } from 'framer-motion'
import { TopBar, TopBarAction } from '@/components/TopBar'
import { FilterChips, SectionHeader } from '@/components/Hero'
import { CourtCard } from '@/components/CourtCard'
import { courts } from '@/lib/data'
import { useState } from 'react'
import { Map as MapIcon } from 'lucide-react'

export function CourtsPage() {
  const [filter, setFilter] = useState('all')
  
  const filterOptions = [
    { id: 'all', label: '全部', count: courts.length },
    { id: '灣仔', label: '灣仔', count: 2 },
    { id: '九龍城', label: '九龍城', count: 1 },
    { id: '大埔', label: '大埔', count: 1 },
    { id: '沙田', label: '沙田', count: 1 },
    { id: '屯門', label: '屯門', count: 1 },
  ]

  return (
    <div className="min-h-screen pb-24">
      <TopBar 
        title="球場" 
        subtitle="香港各大網球場資訊"
        action={
          <button className="w-9 h-9 rounded-full bg-tennis-green text-white flex items-center justify-center tap-smooth">
            <MapIcon className="w-5 h-5" />
          </button>
        }
      />

      <div className="pt-4">
        <SectionHeader 
          title="瀏覽球場" 
          subtitle="點擊查看詳情同預訂"
        />
        <FilterChips 
          options={filterOptions}
          value={filter}
          onChange={setFilter}
        />
        
        <div className="px-4 grid grid-cols-1 gap-3">
          {courts.map((court, i) => (
            <CourtCard key={court.id} court={court} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
