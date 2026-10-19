// 香港網球場數據
export interface Court {
  id: string
  name: string
  nameEn: string
  district: string
  address: string
  courts: number
  price: number // HKD per hour
  rating: number
  image: string
  amenities: string[]
  type: 'public' | 'private'
  bookingUrl?: string
}

export const courts: Court[] = [
  {
    id: 'victoria-park',
    name: '維多利亞公園網球場',
    nameEn: 'Victoria Park Tennis Court',
    district: '灣仔',
    address: '銅鑼灣維多利亞公園',
    courts: 14,
    price: 60,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800',
    amenities: ['夜間照明', '更衣室', '停車場', '飲水機'],
    type: 'public',
  },
  {
    id: 'tai-po',
    name: '大埔網球中心',
    nameEn: 'Tai Po Tennis Centre',
    district: '大埔',
    address: '大埔完善路',
    courts: 10,
    price: 80,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800',
    amenities: ['夜間照明', '空調休息室', '球拍租借', '教練服務'],
    type: 'public',
  },
  {
    id: 'kowloon-tsai',
    name: '九龍仔公園網球場',
    nameEn: 'Kowloon Tsai Park',
    district: '九龍城',
    address: '九龍城延文禮士道',
    courts: 8,
    price: 50,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1531315396756-905d68d21b56?w=800',
    amenities: ['夜間照明', '更衣室', '停車場'],
    type: 'public',
  },
  {
    id: 'tuen-mun',
    name: '屯門網球中心',
    nameEn: 'Tuen Mun Tennis Centre',
    district: '屯門',
    address: '屯門青松觀路',
    courts: 12,
    price: 70,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1591491653056-4e0d4e4b7e8e?w=800',
    amenities: ['夜間照明', '更衣室', '飲水機', '停車場'],
    type: 'public',
  },
  {
    id: 'sha-tin',
    name: '沙田網球場',
    nameEn: 'Sha Tin Tennis Court',
    district: '沙田',
    address: '沙田源禾路',
    courts: 6,
    price: 55,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1542144614-0a4dfb1588ce?w=800',
    amenities: ['夜間照明', '更衣室'],
    type: 'public',
  },
  {
    id: 'happy-valley',
    name: '跑馬地網球場',
    nameEn: 'Happy Valley Tennis Court',
    district: '灣仔',
    address: '跑馬地黃泥涌道',
    courts: 9,
    price: 90,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800',
    amenities: ['夜間照明', '空調休息室', '球拍租借', '私人教練'],
    type: 'public',
  },
]

// 約球數據
export interface Match {
  id: string
  title: string
  creator: {
    name: string
    avatar: string
    level: string
    rating: number
  }
  date: string
  time: string
  duration: number // hours
  courtId: string
  courtName: string
  district: string
  level: 'beginner' | 'intermediate' | 'advanced' | 'pro'
  format: 'singles' | 'doubles' | 'mixed'
  currentPlayers: number
  maxPlayers: number
  pricePerPerson: number
  status: 'open' | 'full' | 'confirmed' | 'cancelled'
  notes?: string
  applicants: number
  createdAt: string
}

export const matches: Match[] = [
  {
    id: 'm1',
    title: '灣仔晚場雙打 - 維園',
    creator: {
      name: 'Kelvin Lau',
      avatar: 'KL',
      level: '中級',
      rating: 4.8,
    },
    date: '2026-10-20',
    time: '19:00',
    duration: 2,
    courtId: 'victoria-park',
    courtName: '維多利亞公園網球場',
    district: '灣仔',
    level: 'intermediate',
    format: 'doubles',
    currentPlayers: 3,
    maxPlayers: 4,
    pricePerPerson: 60,
    status: 'open',
    notes: '輕鬆打波，歡迎 NTRP 3.0-3.5 嘅朋友加入 🎾',
    applicants: 1,
    createdAt: '2026-10-19',
  },
  {
    id: 'm2',
    title: '大埔早場單打',
    creator: {
      name: 'Tommy Wong',
      avatar: 'TW',
      level: '高級',
      rating: 4.9,
    },
    date: '2026-10-21',
    time: '08:00',
    duration: 2,
    courtId: 'tai-po',
    courtName: '大埔網球中心',
    district: '大埔',
    level: 'advanced',
    format: 'singles',
    currentPlayers: 2,
    maxPlayers: 2,
    pricePerPerson: 80,
    status: 'full',
    notes: '激烈對打，請帶充足水同毛巾 💪',
    createdAt: '2026-10-18',
  },
  {
    id: 'm3',
    title: '初學者友好場 🟢',
    creator: {
      name: 'Sarah Chan',
      avatar: 'SC',
      level: '初學',
      rating: 4.6,
    },
    date: '2026-10-22',
    time: '10:00',
    duration: 2,
    courtId: 'kowloon-tsai',
    courtName: '九龍仔公園網球場',
    district: '九龍城',
    level: 'beginner',
    format: 'doubles',
    currentPlayers: 2,
    maxPlayers: 4,
    pricePerPerson: 50,
    status: 'open',
    notes: '新手起步，互相學習，無壓力！可以教基本功 ✨',
    applicants: 2,
    createdAt: '2026-10-19',
  },
  {
    id: 'm4',
    title: '跑馬地黃昏場',
    creator: {
      name: 'Mike Tsang',
      avatar: 'MT',
      level: '中級',
      rating: 4.7,
    },
    date: '2026-10-23',
    time: '17:30',
    duration: 2,
    courtId: 'happy-valley',
    courtName: '跑馬地網球場',
    district: '灣仔',
    level: 'intermediate',
    format: 'doubles',
    currentPlayers: 4,
    maxPlayers: 4,
    pricePerPerson: 90,
    status: 'confirmed',
    notes: '四人已齊，仲有兩位後備',
    createdAt: '2026-10-17',
  },
  {
    id: 'm5',
    title: '屯門週末友誼賽',
    creator: {
      name: 'Jacky Ho',
      avatar: 'JH',
      level: '中級',
      rating: 4.5,
    },
    date: '2026-10-25',
    time: '14:00',
    duration: 3,
    courtId: 'tuen-mun',
    courtName: '屯門網球中心',
    district: '屯門',
    level: 'intermediate',
    format: 'doubles',
    currentPlayers: 1,
    maxPlayers: 4,
    pricePerPerson: 70,
    status: 'open',
    notes: '星期六下午輕鬆打，歡迎所有區嘅朋友',
    applicants: 0,
    createdAt: '2026-10-19',
  },
  {
    id: 'm6',
    title: '沙田黃昏單打',
    creator: {
      name: 'David Lam',
      avatar: 'DL',
      level: '高級',
      rating: 4.9,
    },
    date: '2026-10-24',
    time: '18:00',
    duration: 1.5,
    courtId: 'sha-tin',
    courtName: '沙田網球場',
    district: '沙田',
    level: 'advanced',
    format: 'singles',
    currentPlayers: 1,
    maxPlayers: 2,
    pricePerPerson: 55,
    status: 'open',
    notes: 'NTRP 4.0+',
    applicants: 0,
    createdAt: '2026-10-19',
  },
]

// 動態數據
export interface Post {
  id: string
  author: {
    name: string
    avatar: string
    level: string
  }
  content: string
  images?: string[]
  likes: number
  comments: number
  timeAgo: string
  tag?: string
  isLiked?: boolean
}

export const posts: Post[] = [
  {
    id: 'p1',
    author: {
      name: 'Kelvin Lau',
      avatar: 'KL',
      level: '中級',
    },
    content: '今日維園打完波好爽！天氣好正，個場地狀態一流 🎾✨ 推薦傍晚時段最靚 🌅',
    images: ['https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=600'],
    likes: 24,
    comments: 8,
    timeAgo: '2小時前',
    tag: '#維園網球場',
    isLiked: false,
  },
  {
    id: 'p2',
    author: {
      name: 'Sarah Chan',
      avatar: 'SC',
      level: '初學',
    },
    content: '今日第一次上堂，教練好有耐心 🎾 學咗正手同反手基本功，期待下次進步！',
    images: ['https://images.unsplash.com/photo-1531315396756-905d68d21b56?w=600'],
    likes: 42,
    comments: 15,
    timeAgo: '5小時前',
    tag: '#學網球',
    isLiked: true,
  },
  {
    id: 'p3',
    author: {
      name: 'Tommy Wong',
      avatar: 'TW',
      level: '高級',
    },
    content: '今日個發球終於搵到感覺！Ace 率提升咗 30% 💪 平時練多啲真係有用',
    likes: 38,
    comments: 12,
    timeAgo: '1天前',
    tag: '#網球技巧',
  },
  {
    id: 'p4',
    author: {
      name: 'Mike Tsang',
      avatar: 'MT',
      level: '中級',
    },
    content: '約到新波友！今個星期四跑馬地見 👋 大家記得帶水同毛巾啊',
    likes: 18,
    comments: 6,
    timeAgo: '2天前',
    tag: '#約波',
  },
]

// 香港地區
export const districts = [
  '中西區', '灣仔', '東區', '南區',
  '油尖旺', '深水埗', '九龍城', '黃大仙', '觀塘',
  '荃灣', '葵青', '屯門', '元朗', '北區', '大埔', '沙田', '西貢', '離島'
]

// 水平定義
export const levels = {
  beginner: { label: '初學', color: 'bg-green-100 text-green-700', dot: 'bg-green-500' },
  intermediate: { label: '中級', color: 'bg-blue-100 text-blue-700', dot: 'bg-blue-500' },
  advanced: { label: '高級', color: 'bg-orange-100 text-orange-700', dot: 'bg-orange-500' },
  pro: { label: '專業', color: 'bg-purple-100 text-purple-700', dot: 'bg-purple-500' },
} as const

// 賽制
export const formats = {
  singles: { label: '單打', icon: '1v1' },
  doubles: { label: '雙打', icon: '2v2' },
  mixed: { label: '混合', icon: 'Mix' },
} as const
