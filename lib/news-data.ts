export type NewsZone = {
  name: string
  subtitle: string
  description: string
}

export type NewsInfoItem = {
  label: string
  value: string
}

export type NewsSection = {
  heading: string
  paragraphs?: string[]
  zones?: NewsZone[]
  infoItems?: NewsInfoItem[]
}

export type NewsArticleDetail = {
  headline: string
  intro: string
  posterImage?: string
  sections: NewsSection[]
  closing?: string
}

export type NewsArticle = {
  id: string
  date: string
  title: string
  summary: string
  detail?: NewsArticleDetail
}

const newsArticles: NewsArticle[] = [
  {
    id: "1",
    date: "2026-12-05",
    title: "2026期末設計展正式開幕，邀請您一同參與設計盛會",
    summary:
      "國立高雄科技大學工業設計系期末展即將登場，匯聚各年級學習成果，歡迎各界蒞臨參觀交流。",
    detail: {
      headline: "【展出快訊】2026期末設計展正式開幕，邀請您一同參與設計盛會",
      posterImage: "/news/new1_poster.png",
      intro:
        "國立高雄科技大學工業設計系將於2026年6月24日至6月26日，於第一校區圖書資訊大樓舉辦114-2學期期末成果展《異構同形 - 形隨本質，意生異構》。本展覽不僅全方位呈現工設系學生從青澀摸索到蛻變為具備成熟設計思維的學習軌跡，更期盼藉由此次公開展演，強化校內師生與跨學門間的交流。",
      sections: [
        {
          heading: "展覽主題：共性與個性的化學反應",
          paragraphs: [
            "今年展覽以「設計成長的化學反應」為策展核心。主題《異構同形》隱喻每一位設計系學生起初都如同充滿可能性的原石，大家共享著相同的基礎課程與設計邏輯（同形）；然而，在面對材料的感知、結構的辯證與造型的琢磨時，卻能在不斷的碰撞與重組中，各自演化出截然不同的獨特作品樣態（異構）。",
          ],
        },
        {
          heading: "四大展區：從銳角到圓滿的蛻變軌跡",
          paragraphs: [
            "本次展覽屏棄了單純的功能性分類，改以「狀態演變」作為敘事主軸，空間動線依循學習階段進行分區演進。展場依據創作深淺程度劃分為四大展區，讓觀展民眾能一路從大一的基礎訓練，逛到碩士班的深度研創成果：",
          ],
          zones: [
            {
              name: "啟蒙區（大一）",
              subtitle: "三角形的銳",
              description:
                "以「三角形的銳」象徵單點突破，展出包含CUBE視聽觸、仿生設計與動力趣味設計等基礎練習。",
            },
            {
              name: "構建區（大二）",
              subtitle: "四邊形的穩",
              description:
                "演進為「四邊形的穩」，體現結構碰撞與理性機能的琢磨，展出仿生互動裝置與差異化玩具設計，並搭配大量草模與材料實驗紀錄。",
            },
            {
              name: "連結區（大三）",
              subtitle: "五邊形的合",
              description:
                "以「五邊形的合」代表設計思維的多元爆發，學生透過精準洞察目標使用者，展出符合新一代設計展規格與產品開發實務的最終作品。",
            },
            {
              name: "成就區（碩班）",
              subtitle: "六邊形的全",
              description:
                "蛻變為全方位「六邊形的全」，象徵具備無死角的系統整合實力，展出探討社會議題趨勢並提出解方的推測設計成果。",
            },
          ],
        },
        {
          heading: "誠摯邀請各界蒞臨指導",
          paragraphs: [
            "本展不僅陳列學生的最終作品，更同時展出設計發想與動手製作的歷程紀錄，讓觀眾能實質感受作品背後的汗水與成長軌跡。期盼能搭建一個凝聚大眾情感與專業共鳴的平台，彰顯工設系在人才培育上的碩果。",
          ],
        },
        {
          heading: "【展覽資訊總覽】",
          infoItems: [
            {
              label: "展覽名稱",
              value: "高科大工業設計系114-2期末展《異構同形 - 形隨本質，意生異構》",
            },
            {
              label: "展覽日期",
              value: "2026年06月24日 至 06月26日",
            },
            {
              label: "開幕儀式",
              value: "2026年06月24日 上午11:00～11:25（10:30 開放師生與來賓報到）",
            },
            {
              label: "開幕地點",
              value: "圖書館二樓前方",
            },
            {
              label: "展覽地點",
              value:
                "國立高雄科技大學 第一校區圖書資訊大樓（高雄市燕巢區鳳雄里大學路1號）",
            },
            {
              label: "導覽活動",
              value: "開幕日 11:25 起，展覽正式開始並同時進行專人導覽",
            },
          ],
        },
      ],
      closing:
        "敬邀全校師生及各界貴賓撥冗蒞臨，給予寶貴意見，見證新生代設計師的成長與蛻變！",
    },
  },
]

export function getAllNews(): NewsArticle[] {
  return [...newsArticles]
}

export function getNewsById(id: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.id === id)
}

export function getNewsIds(): string[] {
  return newsArticles.map((article) => article.id)
}
