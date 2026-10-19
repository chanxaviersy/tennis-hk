'use client'

import { motion } from 'framer-motion'
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { Post } from '@/lib/data'
import { cn } from '@/lib/utils'

interface PostCardProps {
  post: Post
  index?: number
}

export function PostCard({ post, index = 0 }: PostCardProps) {
  const [liked, setLiked] = useState(post.isLiked || false)
  const [likes, setLikes] = useState(post.likes)

  const toggleLike = () => {
    setLiked(!liked)
    setLikes(liked ? likes - 1 : likes + 1)
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="bg-white border-b border-gray-100 p-4"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-tennis-accent to-tennis-orange flex items-center justify-center text-white text-sm font-bold">
            {post.author.avatar}
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">{post.author.name}</p>
            <p className="text-xs text-gray-500">{post.author.level} · {post.timeAgo}</p>
          </div>
        </div>
        <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center">
          <MoreHorizontal className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      {/* Content */}
      <p className="text-sm text-gray-800 leading-relaxed mb-3 whitespace-pre-line">
        {post.content}
      </p>

      {/* Tag */}
      {post.tag && (
        <p className="text-sm font-medium text-tennis-green mb-2">
          {post.tag}
        </p>
      )}

      {/* Image */}
      {post.images && post.images.length > 0 && (
        <div className={cn(
          "grid gap-1.5 rounded-xl overflow-hidden mb-3",
          post.images.length === 1 ? "grid-cols-1" : "grid-cols-2"
        )}>
          {post.images.map((img, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={img}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-5 pt-1">
        <button
          onClick={toggleLike}
          className="flex items-center gap-1.5 tap-smooth"
        >
          <motion.div
            animate={liked ? { scale: [1, 1.3, 1] } : {}}
            transition={{ duration: 0.3 }}
          >
            <Heart
              className={cn(
                "w-5 h-5 transition-colors",
                liked ? "fill-red-500 text-red-500" : "text-gray-500"
              )}
            />
          </motion.div>
          <span className={cn(
            "text-xs font-medium",
            liked ? "text-red-500" : "text-gray-500"
          )}>
            {likes}
          </span>
        </button>
        <button className="flex items-center gap-1.5 tap-smooth">
          <MessageCircle className="w-5 h-5 text-gray-500" />
          <span className="text-xs font-medium text-gray-500">{post.comments}</span>
        </button>
        <button className="ml-auto tap-smooth">
          <Share2 className="w-5 h-5 text-gray-500" />
        </button>
      </div>
    </motion.article>
  )
}
