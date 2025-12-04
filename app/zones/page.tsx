import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "展場內容 | 被設計的設計",
  description: "探索不同年級的設計學習歷程與作品展示",
}

const exhibitions = [
  {
    grade: "大一",
    title: "cube 立方體、油土半立體構成：基礎造型與感知訓練",
    description:
      "從最純粹的立方體出發，透過油土半立體的推壓與塑形，在反覆的操作中建立造型感知、量體節奏與光影理解，奠定後續造型設計的基礎。",
  },
  {
    grade: "大二",
    title: "摩托車：速度與造型的思考",
    description:
      "從交通工具的結構到騎乘姿態的體驗，學生在設計課程中探索造型、機能與情感之間的關係，打造屬於自己的未來車款。",
  },
  {
    grade: "大三",
    title: "SDGs：以設計回應世界議題",
    description:
      "以永續為核心，學生深入觀察生活問題，從人、環境到社會需求出發，透過研究與創新設計提出具想像力又可實踐的永續方案。",
  },
]

export default function ZonesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20">
        {/* Header */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">展場內容</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              探索各年級的設計學習歷程，見證從基礎造型到永續設計的成長軌跡
            </p>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col gap-8">
              {exhibitions.map((item, index) => (
                <Card
                  key={item.grade}
                  className="border-border hover:border-accent transition-all group overflow-hidden"
                >
                  <CardContent className="p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Grade Badge */}
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-accent text-accent-foreground font-bold text-xl">
                          {item.grade}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground leading-tight text-balance">
                          {item.title}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed text-pretty">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
