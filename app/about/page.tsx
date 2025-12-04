import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Target, Users, Lightbulb, BookOpen, Award, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "展覽介紹 | 被設計的設計",
  description: "深入了解本次展覽的策展思維與核心概念",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20">
        {/* Header */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold text-balance">《被設計的設計》</h1>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-pretty">
                <p>
                  從初階的造型訓練、材料操作，到進階的使用者研究與產品開發，學生在被精心「設計」的訓練中不斷地學習，在工業設計的世界裡找出設計的樣貌。
                </p>
                <p>以「學習的過程」為展覽主軸，試圖將工業設計教育的脈絡與成果具體呈現。</p>
                <p>邀請您走進展場，一起感受並思考設計的成長旅程。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Exhibition Goals */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">展覽目標</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">本次展覽致力於實現四大核心目標</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-border">
                <CardContent className="p-8 space-y-4">
                  <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">建立線上展覽入口</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    打造專業的數位展覽平台，提供策展理念與作品內容，讓觀眾能隨時隨地探索設計教育的成果。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-8 space-y-4">
                  <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">呈現學習歷程</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    完整記錄學生作品與學習歷程，從概念發想到成品呈現，展現設計思考的完整軌跡。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-8 space-y-4">
                  <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">提升參與互動</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    透過留言、投票與分享功能，建立設計社群的對話平台，提升觀眾的參與度與互動體驗。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-8 space-y-4">
                  <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">建立品牌形象</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    展現學院的教育理念與成果，建立專業的品牌形象，吸引更多對設計有興趣的學生與合作夥伴。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16 bg-secondary py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">價值主張</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">我們致力於提供最優質的線上展覽體驗</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="h-2 w-16 bg-accent rounded-full" />
                <h3 className="text-xl font-semibold">知識導向的展覽網站</h3>
                <p className="text-muted-foreground leading-relaxed">
                  不只是作品的展示，更是設計知識的傳遞。每個展區都經過精心策劃， 系統性地呈現設計思維與教育理念。
                </p>
              </div>

              <div className="space-y-3">
                <div className="h-2 w-16 bg-accent rounded-full" />
                <h3 className="text-xl font-semibold">極簡專業的觀展體驗</h3>
                <p className="text-muted-foreground leading-relaxed">
                  採用 YODEX 視覺規範，以極簡的設計語言創造專業且友好的介面， 讓內容本身成為焦點。
                </p>
              </div>

              <div className="space-y-3">
                <div className="h-2 w-16 bg-accent rounded-full" />
                <h3 className="text-xl font-semibold">可回訪的教育知識庫</h3>
                <p className="text-muted-foreground leading-relaxed">
                  完整的內容架構與清晰的導覽系統，讓觀眾可以隨時回訪， 持續探索設計教育的豐富內容。
                </p>
              </div>

              <div className="space-y-3">
                <div className="h-2 w-16 bg-accent rounded-full" />
                <h3 className="text-xl font-semibold">跨族群的設計語言</h3>
                <p className="text-muted-foreground leading-relaxed">
                  從專業設計師到一般大眾，從學生到企業， 使用人人都能理解的設計語言，讓設計教育的價值被更多人看見。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
