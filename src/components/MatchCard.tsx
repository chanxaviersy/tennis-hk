'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, Users, Clock, Star, ArrowRight, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { Match, levels, formats } from '@/lib/data'
import { formatDate, cn } from '@/lib/utils'

interface MatchCardProps {
  match: Match
  onJoin?: () => void
  onView?: () => void
  index?: number
}

export function MatchCard({ match, onJoin, onView, index = 0 }: MatchCardProps) {
  const level = levels[match.level]
  const format = formats[match.format]
  const isFull = match.status === 'full' || match.currentPlayers >= match.maxPlayers
  const isConfirmed = match.status === 'confirmed'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onView}
      className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 card-hover cursor-pointer"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-tennis-green to-tennis-green-light flex items-center justify-center text-white text-sm font-bold">
              {match.creator.avatar}
            </div>
            <div className={cn(
              "absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-white",
              level.dot
            )} />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <p className="text-sm font-semibold text-gray-900">{match.creator.name}</p>
              <div className="flex items-center gap-0.5">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs text-gray-500">{match.creator.rating}</span>
              </div>
            </div>
            <p className="text-xs text-gray-500">{level.label} · {format.label}</p>
          </div>
        </div>
        {isFull ? (
          <span className="px-2 py-1 bg-gray-100 text-gray-500 text-[10px] font-medium rounded-full">
            已滿
          </span>
        ) : isConfirmed ? (
          <span className="px-2 py-1 bg-blue-50 text-blue-600 text-[10px] font-medium rounded-full">
            已確認
          </span>
        ) : (
          <span className="px-2 py-1 bg-green-50 text-tennis-green text-[10px] font-medium rounded-full flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-tennis-green animate-pulse" />
            招募中
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
        {match.title}
      </h3>

      {/* Info */}
      <div className="space-y-1.5 mb-3">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar className="w-4 h-4 text-gray-400" />
          <span>{formatDate(match.date, match.time)}</span>
          <span className="text-gray-300">·</span>
          <Clock className="w-3.5 h-3.5 text-gray-400" />
          <span>{match.duration}小時</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span className="truncate">{match.courtName}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Users className="w-4 h-4 text-gray-400" />
          <span>{match.currentPlayers}/{match.maxPlayers} 人</span>
          {match.applicants > 0 && !isFull && (
            <span className="text-xs text-tennis-accent">+{match.applicants} 申請中</span>
          )}
        </div>
      </div>

      {/* Notes */}
      {match.notes && (
        <p className="text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2 mb-3 line-clamp-2">
          {match.notes}
        </p>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div>
          <p className="text-[10px] text-gray-400">每位</p>
          <p className="text-base font-bold text-tennis-green">
            HK$ {match.pricePerPerson}
          </p>
        </div>
        {!isFull && !isConfirmed ? (
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={(e) => { e.stopPropagation(); onJoin?.() }}
            className="px-4 py-2 bg-tennis-green text-white text-sm font-medium rounded-full flex items-center gap-1.5"
          >
            申請加入
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        ) : (
          <button className="px-4 py-2 text-sm font-medium text-gray-500">
            查看詳情 →
          </button>
        )}
      </div>
    </motion.div>
  )
}
