# 🎾 TennisHub HK - 香港網球社群

> 一個專為香港網球愛好者打造的流暢、簡約、現代化網球社群平台。
> 靈感來自 tennisGo HK 和已停用的 heyooh tennis。

![Status](https://img.shields.io/badge/status-MVP-yellow)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![License](https://img.shields.io/badge/license-MIT-blue)

## ✨ 功能特色

### 🎾 約球配對
- 創建/加入比賽，支持單打、雙打、混合
- 按地區、水平、日期篩選
- 一鍵申請加入，狀態實時同步
- 智能匹配相近水平的對手

### 📍 球場資訊
- 香港 6 大熱門網球場資料
- 場地評分、設施、價格透明
- 地圖導航集成
- 即時預訂狀態

### 👥 社群動態
- 發布打球心得、技術分享
- 圖文並茂，話題標籤
- 點讚、評論、分享互動
- 關注喜愛的波友

### 👤 個人檔案
- NTRP 水平認證
- 比賽歷史、勝率統計
- 成就徽章系統
- 球場收藏

## 🎨 設計特色

- **配色**: 經典網球綠 + 球場土橙 + 網球黃
- **字體**: Noto Sans HK（中文）+ Poppins（英文）+ Space Grotesk（數字）
- **動效**: Framer Motion 流暢過渡
- **風格**: 玻璃態、漸變、簡約線條
- **本土化**: 繁體中文優先，香港地區專屬

## 🛠 技術棧

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + CSS Variables
- **Components**: 自研組件 + Lucide Icons
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Deployment**: Vercel / GitHub Pages

## 🚀 快速開始

### 環境要求
- Node.js 18+
- npm / pnpm / yarn

### 本地開發
```bash
# 安裝依賴
npm install

# 啟動開發服務器
npm run dev

# 構建生產版本
npm run build

# 預覽生產構建
npm run start
```

打開 [http://localhost:3000](http://localhost:3000) 開始體驗！

## 📁 項目結構

```
tennis-hk/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # 全局佈局
│   │   ├── page.tsx      # 主頁面
│   │   └── globals.css   # 全局樣式
│   ├── components/       # React 組件
│   │   ├── pages/        # 頁面組件
│   │   ├── App.tsx       # 主應用
│   │   ├── TopBar.tsx    # 頂部導航
│   │   ├── BottomNav.tsx # 底部 Tab
│   │   ├── MatchCard.tsx # 約球卡片
│   │   ├── CourtCard.tsx # 球場卡片
│   │   ├── PostCard.tsx  # 動態卡片
│   │   ├── Hero.tsx      # 頭部橫幅
│   │   └── CreateMatchModal.tsx
│   └── lib/
│       ├── data.ts       # 模擬數據
│       └── utils.ts      # 工具函數
├── public/               # 靜態資源
├── tailwind.config.js
├── next.config.js
└── package.json
```

## 🗺 路線圖

- [x] **v0.1** - Web 端 MVP
  - [x] 約球列表/創建
  - [x] 球場目錄
  - [x] 社群動態
  - [x] 個人檔案
- [ ] **v0.2** - 用戶系統
  - [ ] 手機號註冊/登入
  - [ ] 用戶資料完善
  - [ ] 即時通訊
- [ ] **v0.3** - 進階功能
  - [ ] 地圖集成
  - [ ] 場地預訂
  - [ ] 支付集成
- [ ] **v1.0** - 跨平台 App
  - [ ] React Native iOS / Android
  - [ ] 推送通知
  - [ ] 離線支持

## 🏟 香港球場資料庫

已收錄：
- 維多利亞公園網球場（灣仔）
- 跑馬地網球場（灣仔）
- 大埔網球中心（大埔）
- 九龍仔公園網球場（九龍城）
- 屯門網球中心（屯門）
- 沙田網球場（沙田）

## 🤝 貢獻

歡迎提交 PR 或 Issue 一起完善！

## 📄 許可

MIT License

## 🎾 致謝

- tennisGo HK - 設計靈感
- heyooh tennis - 願景致敬
- 香港網球社群 - 永遠的支持

---

Made with 🎾 in Hong Kong · © 2026 TennisHub HK
