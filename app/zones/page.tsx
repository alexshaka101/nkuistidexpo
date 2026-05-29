import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { ACCENT_PALETTE } from "@/lib/accent-palette"

export const metadata = {
  title: "展場內容 | 異構同形",
  description: "探索各年級與碩士班的設計學習歷程與作品展示",
}

const exhibitions = [
  {
    grade: "一年級",
    subtitle: "一般生",
    coreCourse:
      "引導獨立思考，激發創意潛能並培養團隊合作。透過材質運用、造形生成、色彩與空間規劃及設計情境等練習，建立產品設計的基礎能力。",
    themes: [
      {
        title: "CUBE - 視聽觸",
        description: "搭配按鈕與旋鈕，探索視、聽、觸功能及立體造形變化。",
      },
      {
        title: "仿生設計",
        description:
          "參考自然界生物特徵，將形、色、質、功能與結構抽象化，發想可發展的產品概念。",
      },
      {
        title: "動力趣味設計",
        description:
          "以軌道與機關讓鋼球藉重力與動能連續滾動，結合動能、位能與加速度，進行動態模擬與實作。",
      },
    ],
    image: "/zones/grade1.webp",
  },
  {
    grade: "二年級",
    subtitle: "一般生",
    coreCourse:
      "透過跨媒介運用、人機介面優化、複合材料、永續發展與社會創新等練習，培養複雜系統設計的專精能力。",
    themes: [
      {
        title: "仿生互動裝置設計",
        description:
          "從動植物行為觀察出發，轉譯為感應元件驅動的互動裝置，將仿生特質融入造形語彙。",
      },
      {
        title: "差異化玩具設計",
        description:
          "分析市場玩具類型與玩法，改變使用者或操作方式，提出具差異性的新設計與體驗流程。",
      },
    ],
    image: "/zones/grade2.webp",
  },
  {
    grade: "三年級",
    subtitle: "一般生",
    coreCourse:
      "全面接軌畢業設計，提早適應國際展覽與競賽標準；導入實際材料、加工開模與可製造性等產業開發規範。",
    themes: [
      {
        title: "新一代展覽規格模擬與產品開發實務",
        description:
          "模擬設計展規格與參展流程，將概念落實於開發、製作與開模規範，為明年參展累積實戰經驗。",
      },
    ],
    image: "/zones/grade3.webp",
  },
  {
    grade: "碩士班",
    coreCourse:
      "在廣義工業設計架構下培養高階設計觀念，涵蓋 SDGs 永續目標、社會議題、邏輯推論、國際視野與設計思潮，作為碩士論文的前導思考。",
    themes: [
      {
        title: "推測設計",
        description:
          "從現今社會議題趨勢推測未來問題，為未來世界設計解方，在反覆推測與修正中完善設計流程與思考邏輯。",
      },
    ],
    image: "/zones/grade3.webp",
  },
]

export default function ZonesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20">
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">展場內容</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              探索各年級與碩士班的設計學習歷程，從基礎造形到產品開發與推測設計的成長軌跡
            </p>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {exhibitions.map((item, index) => {
                const accent = ACCENT_PALETTE[index % ACCENT_PALETTE.length]
                return (
                <Card
                  key={item.grade}
                  className="border-border transition-all group overflow-hidden h-full relative hover:border-[var(--zone-accent)]"
                  style={{ "--zone-accent": accent.color } as React.CSSProperties}
                >
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={item.image}
                      alt={`${item.grade} 背景圖`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/60" />
                  </div>

                  <CardContent className="p-6 lg:p-8 h-full flex flex-col relative z-10">
                    <div className="mb-5 flex items-center gap-3">
                      <div
                        className="inline-flex items-center justify-center min-h-14 min-w-14 px-3 rounded-2xl font-bold text-lg shrink-0"
                        style={{
                          backgroundColor: accent.color,
                          color: accent.foreground,
                        }}
                      >
                        {item.grade}
                      </div>
                      {item.subtitle && (
                        <span className="text-sm text-gray-300 font-medium">{item.subtitle}</span>
                      )}
                    </div>

                    <div className="flex-1 space-y-5">
                      <div>
                        <p
                          className="text-xs font-semibold uppercase tracking-wide mb-2"
                          style={{ color: accent.color }}
                        >
                          核心課程
                        </p>
                        <p className="text-sm text-gray-200 leading-relaxed text-pretty drop-shadow-sm">
                          {item.coreCourse}
                        </p>
                      </div>

                      <div>
                        <p
                          className="text-xs font-semibold uppercase tracking-wide mb-3"
                          style={{ color: accent.color }}
                        >
                          主題
                        </p>
                        <ul className="space-y-3">
                          {item.themes.map((theme) => (
                            <li key={theme.title} className="space-y-1">
                              <h2 className="text-sm lg:text-base font-bold text-white leading-snug drop-shadow-md">
                                {theme.title}
                              </h2>
                              <p className="text-sm text-gray-300 leading-relaxed text-pretty drop-shadow-sm">
                                {theme.description}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )})}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
