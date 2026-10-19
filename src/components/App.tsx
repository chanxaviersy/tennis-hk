'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BottomNav, TabType } from '@/components/BottomNav'
import { HomePage } from '@/components/pages/HomePage'
import { MatchPage } from '@/components/pages/MatchPage'
import { CourtsPage } from '@/components/pages/CourtsPage'
import { ProfilePage } from '@/components/pages/ProfilePage'
import { CreateMatchModal } from '@/components/CreateMatchModal'

export function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home')
  const [createOpen, setCreateOpen] = useState(false)

  const handleCreateSubmit = (data: any) => {
    console.log('Created match:', data)
    // 這裡會調用 API
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === 'home' && <HomePage />}
          {activeTab === 'match' && <MatchPage />}
          {activeTab === 'courts' && <CourtsPage />}
          {activeTab === 'profile' && <ProfilePage />}
        </motion.div>
      </AnimatePresence>

      <BottomNav 
        active={activeTab} 
        onChange={setActiveTab}
        onCreateMatch={() => setCreateOpen(true)}
      />

      <CreateMatchModal
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        onSubmit={handleCreateSubmit}
      />
    </div>
  )
}
