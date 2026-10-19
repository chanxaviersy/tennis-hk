# TennisHub HK - 香港网球社群平台

## 1. Concept & Vision

TennisHub HK 是一款专为香港网球爱好者打造的社群应用，灵感来自 tennisGo HK 和已停用的 heyooh tennis。我们希望打造一个**流畅、简约、现代**的网球平台，让香港的球友可以轻松约球、查找球场、分享动态。

设计理念：**"如网球在空中划过的弧线般流畅"** — 界面干净利落，交互如丝般顺滑。

## 2. Design Language

### 色彩系统
```css
:root {
  /* Primary - 经典网球绿 */
  --tennis-green: #2E7D32;
  --tennis-green-light: #4CAF50;
  --tennis-green-dark: #1B5E20;
  
  /* Secondary - 球场土色 */
  --court-orange: #FF8F00;
  --court-amber: #FFB300;
  
  /* Accent - 活力橙 */
  --accent: #FF6D00;
  --accent-light: #FF9E40;
  
  /* Background */
  --bg-primary: #FAFAFA;
  --bg-card: #FFFFFF;
  --bg-dark: #121212;
  
  /* Text */
  --text-primary: #212121;
  --text-secondary: #757575;
  --text-light: #FFFFFF;
  
  /* Tennis Ball Yellow */
  --ball-yellow: #CCFF00;
  --ball-highlight: #E8FF5E;
}
```

### 字体
- 标题: **Noto Sans HK** (中文) + **Poppins** (英文)
- 正文: **Noto Sans HK** 400/500
- 数字/时间: **Space Grotesk** (现代感)

### 动效哲学
- 页面切换: 300ms ease-out，带轻微弹性
- 卡片入场: 交错动画，100ms 间隔
- 按钮反馈: scale(0.98) + 颜色变化
- 加载: 脉冲动画模拟网球弹跳

### 视觉元素
- 图标: Lucide React (线条简洁)
- 装饰: 网球纹理、球场线条作为背景图案
- 插图: 简约几何风格的网球/球拍插画

## 3. Layout & Structure

### 主要页面
1. **首页 (Home)** - 发现约球、热门活动
2. **约球 (Match)** - 创建/加入比赛
3. **球场 (Courts)** - 场地搜索与预约
4. **动态 (Feed)** - 社群分享
5. **我的 (Profile)** - 个人中心

### 响应式策略
- Mobile First: 320px - 768px
- Tablet: 768px - 1024px  
- Desktop: 1024px+

## 4. Features & Interactions

### 核心功能

#### 4.1 约球配对
- 创建约球：选择日期、时间、场地、水平、人数
- 浏览约球：卡片式展示，支持筛选（日期/区域/水平）
- 加入约球：一键申请，聊天确认
- 状态流转：待确认 → 已确认 → 已完成/已取消

#### 4.2 球场信息
- 香港热门球场列表（维多利亚公园、大埔网球中心等）
- 实时预订状态
- 场地评分与评论
- 地图导航集成

#### 4.3 社群动态
- 发布动态（图文）
- 点赞、评论、分享
- 话题标签 (#网球技巧 #约球)

#### 4.4 用户系统
- 香港手机号注册
- 个人资料（头像、球龄、水平、惯用手）
- 历史约球记录

### 交互细节
- 下拉刷新：弹性动画 + 成功提示
- 空状态：友好插画 + 引导文案
- 错误处理：Toast 提示 + 重试选项

## 5. Component Inventory

### 5.1 Navigation
- **BottomNav**: 5个图标导航，移动端固定底部
- **TopBar**: 标题 + 操作按钮

### 5.2 Cards
- **MatchCard**: 约球卡片，显示时间/地点/人数/水平
- **CourtCard**: 球场卡片，带图片和评分
- **PostCard**: 动态卡片，支持图片轮播

### 5.3 Forms
- **DateTimePicker**: 日期时间选择器
- **LevelSelector**: 水平选择（初学者/中级/高级/专业）
- **LocationPicker**: 香港区域选择

### 5.4 Feedback
- **Toast**: 成功/失败/信息提示
- **Skeleton**: 加载占位
- **EmptyState**: 空状态插画

## 6. Technical Approach

### 技术栈
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + CSS Variables
- **Components**: shadcn/ui (基于 Radix)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **State**: React Hooks / Zustand

### 数据模型
```typescript
interface User {
  id: string;
  name: string;
  phone: string;
  avatar?: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'pro';
  playStyle: 'baseline' | 'serve-volley' | 'all-court';
  favoriteCourts: string[];
}

interface Match {
  id: string;
  creatorId: string;
  title: string;
  date: Date;
  time: string;
  courtId: string;
  courtName: string;
  district: string;
  level: string;
  currentPlayers: number;
  maxPlayers: number;
  status: 'open' | 'full' | 'confirmed' | 'cancelled';
  notes?: string;
}

interface Court {
  id: string;
  name: string;
  nameEn: string;
  district: string;
  address: string;
  lat: number;
  lng: number;
  courts: number;
  price: number; // per hour
  images: string[];
  rating: number;
  amenities: string[];
}
```

### 未来扩展
- 原生 App: React Native / Flutter
- 即时通讯: WebSocket
- 推送通知: Firebase Cloud Messaging
- 支付: 场地预订付款

## 7. Hong Kong Localization

### 语言
- 主要语言：繁体中文 (繁體中文)
- 界面文案：粤语 + 普通话混合风格
- 示例：
  - "約波" (约球)
  - "搵場" (找场地)
  - "夾腳" (凑人数)
  - "水平" (技术水平)

### 香港特色
- 地区：中西區、灣仔、東區、南區、九龍城、觀塘、荃灣、沙田、大埔、北區、元朗、屯門、西貢
- 热门球场：維多利亞公園、大埔網球中心、屯門網球中心、沙田網球場、九龍仔公園
