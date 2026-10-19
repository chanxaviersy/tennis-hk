'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, MapPin, Calendar, Users, DollarSign, FileText, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { districts, levels, formats, courts } from '@/lib/data'
import { cn } from '@/lib/utils'

interface CreateMatchModalProps {
  open: boolean
  onClose: () => void
  onSubmit: (data: any) => void
}

export function CreateMatchModal({ open, onClose, onSubmit }: CreateMatchModalProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    duration: 2,
    courtId: '',
    level: 'intermediate' as keyof typeof levels,
    format: 'doubles' as keyof typeof formats,
    maxPlayers: 4,
    price: 60,
    notes: ''
  })

  const handleSubmit = () => {
    onSubmit(formData)
    onClose()
    setStep(1)
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl max-h-[90vh] overflow-hidden flex flex-col"
          >
            {/* Handle */}
            <div className="pt-2 flex justify-center">
              <div className="w-12 h-1 bg-gray-300 rounded-full" />
            </div>
            
            {/* Header */}
            <div className="px-5 py-3 flex items-center justify-between border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">發起約波</h2>
              <button 
                onClick={onClose}
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                      約波標題
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      placeholder="例如：維園晚場雙打"
                      className="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm border-0 focus:ring-2 focus:ring-tennis-green focus:bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                        日期
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm border-0 focus:ring-2 focus:ring-tennis-green focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                        時間
                      </label>
                      <input
                        type="time"
                        value={formData.time}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm border-0 focus:ring-2 focus:ring-tennis-green focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                      持續時間（小時）
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {[1, 1.5, 2, 3].map((d) => (
                        <button
                          key={d}
                          onClick={() => setFormData({...formData, duration: d})}
                          className={cn(
                            "py-2.5 rounded-xl text-sm font-medium transition-all",
                            formData.duration === d
                              ? "bg-tennis-green text-white"
                              : "bg-gray-50 text-gray-700"
                          )}
                        >
                          {d}h
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                      選擇球場
                    </label>
                    <div className="space-y-2">
                      {courts.slice(0, 4).map((court) => (
                        <button
                          key={court.id}
                          onClick={() => setFormData({...formData, courtId: court.id})}
                          className={cn(
                            "w-full p-3 rounded-xl text-left border-2 transition-all",
                            formData.courtId === court.id
                              ? "border-tennis-green bg-tennis-green/5"
                              : "border-gray-100 bg-white"
                          )}
                        >
                          <p className="text-sm font-semibold text-gray-900">{court.name}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{court.district} · HK$ {court.price}/hr</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                      水平
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(levels).map(([key, level]) => (
                        <button
                          key={key}
                          onClick={() => setFormData({...formData, level: key as any})}
                          className={cn(
                            "py-3 rounded-xl text-sm font-medium transition-all",
                            formData.level === key
                              ? `${level.color} ring-2 ring-tennis-green`
                              : "bg-gray-50 text-gray-700"
                          )}
                        >
                          {level.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                      賽制
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {Object.entries(formats).map(([key, format]) => (
                        <button
                          key={key}
                          onClick={() => {
                            setFormData({...formData, format: key as any, maxPlayers: key === 'singles' ? 2 : 4})
                          }}
                          className={cn(
                            "py-3 rounded-xl text-sm font-medium transition-all",
                            formData.format === key
                              ? "bg-tennis-green text-white"
                              : "bg-gray-50 text-gray-700"
                          )}
                        >
                          {format.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                      每人費用 (HKD)
                    </label>
                    <input
                      type="number"
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: Number(e.target.value)})}
                      className="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm border-0 focus:ring-2 focus:ring-tennis-green focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                      備註（可選）
                    </label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      placeholder="歡迎自訂訊息..."
                      rows={3}
                      className="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm border-0 focus:ring-2 focus:ring-tennis-green focus:bg-white resize-none"
                    />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-gray-100 bg-white flex items-center gap-3">
              {step > 1 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium"
                >
                  上一步
                </button>
              )}
              {step < 3 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  className="flex-1 py-3 bg-tennis-green text-white rounded-xl font-medium"
                >
                  下一步
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="flex-1 py-3 bg-tennis-green text-white rounded-xl font-medium"
                >
                  發佈約波
                </button>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
