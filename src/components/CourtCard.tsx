'use client'

import { motion } from 'framer-motion'
import { MapPin, Star, ChevronRight, Users, Wifi, Coffee, Car, Lightbulb } from 'lucide-react'
import Image from 'next/image'
import { Court } from '@/lib/data'

interface CourtCardProps {
  court: Court
  onView?: () => void
  index?: number
}

const amenityIcons: Record<string, any> = {
  '夜間照明': Lightbulb,
  '更衣室': Users,
  '停車場': Car,
  '飲水機': Coffee,
  '空調休息室': Wifi,
  '球拍租借': Coffee,
  '教練服務': Users,
  '私人教練': Users,
}

export function CourtCard({ court, onView, index = 0 }: CourtCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onView}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover cursor-pointer"
    >
      <div className="relative h-40 overflow-hidden">
        <Image
          src={court.image}
          alt={court.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        
        {/* District badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 bg-white/90 backdrop-blur text-gray-700 text-[10px] font-medium rounded-full">
            {court.district}
          </span>
        </div>
        
        {/* Public/Private badge */}
        <div className="absolute top-3 right-3">
          <span className={`
            px-2.5 py-1 text-[10px] font-medium rounded-full
            ${court.type === 'public' 
              ? 'bg-tennis-green/90 text-white' 
              : 'bg-tennis-accent/90 text-white'}
          `}>
            {court.type === 'public' ? '公眾' : '私人'}
          </span>
        </div>

        {/* Courts count */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-xs">
          <Users className="w-3.5 h-3.5" />
          {court.courts} 個球場
        </div>
      </div>

      <div className="p-3.5">
        <div className="flex items-start justify-between mb-1.5">
          <h3 className="text-base font-bold text-gray-900 line-clamp-1 flex-1">
            {court.name}
          </h3>
          <div className="flex items-center gap-0.5 ml-2 flex-shrink-0">
            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-gray-700">{court.rating}</span>
          </div>
        </div>
        
        <p className="text-xs text-gray-500 mb-3 flex items-start gap-1">
          <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
          <span className="line-clamp-1">{court.address}</span>
        </p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {court.amenities.slice(0, 3).map((amenity) => {
            const Icon = amenityIcons[amenity] || Lightbulb
            return (
              <div key={amenity} className="flex items-center gap-1 px-2 py-0.5 bg-gray-50 rounded-full">
                <Icon className="w-3 h-3 text-gray-500" />
                <span className="text-[10px] text-gray-600">{amenity}</span>
              </div>
            )
          })}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div>
            <p className="text-[10px] text-gray-400">每小時</p>
            <p className="text-base font-bold text-tennis-green">
              HK$ {court.price}
            </p>
          </div>
          <button className="text-sm font-medium text-tennis-green flex items-center gap-1">
            預訂
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
