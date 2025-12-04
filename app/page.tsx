import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Sparkles, Users, BookOpen, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm font-medium text-foreground">
                <Sparkles className="h-4 w-4 text-accent" />
                Digital Exhibition 2024
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-balance">被設計的設計</h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
              DESIGN
            </p>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              邀請您走進展場，一起感受並思考設計的成長旅程。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/zones">
                  開始探索
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">了解策展理念</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-10 w-20 h-20 bg-accent/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10" />
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">為什麼選擇我們的展覽？</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">提供專業、友好且可回訪的設計知識庫</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border hover:border-accent transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold">知識導向</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  深入的策展理念與設計思考，建立系統性的知識架構
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-accent transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold">極簡體驗</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  專業且友好的觀展介面，讓設計理念清晰呈現
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-accent transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold">跨族群設計</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  從專業人士到一般大眾，人人都能理解的設計語言
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-accent transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold">互動參與</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  留言、投票與分享，建立設計社群的交流平台
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Exhibition Zones Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">展區導覽</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">探索不同主題的設計展區，從理念到實踐</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Zone Card 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-muted rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-accent/5 group-hover:bg-accent/10 transition-colors">
                  <span className="text-6xl font-bold text-accent/20">01</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">設計思維展區</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">探索設計方法論與創意思考的核心概念</p>
            </div>

            {/* Zone Card 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-muted rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-accent/5 group-hover:bg-accent/10 transition-colors">
                  <span className="text-6xl font-bold text-accent/20">02</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">學生作品展區</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">展示優秀學生作品與創作歷程紀錄</p>
            </div>

            {/* Zone Card 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-muted rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-accent/5 group-hover:bg-accent/10 transition-colors">
                  <span className="text-6xl font-bold text-accent/20">03</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">互動體驗區</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">參與討論、投票與分享，建立設計對話</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/zones">
                瀏覽所有展區
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">開始你的設計探索之旅</h2>
          <p className="text-lg text-background/80 max-w-2xl mx-auto leading-relaxed">
            無論你是設計學生、專業人士或是對設計有興趣的朋友， 這裡都有適合你的內容。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/zones">
                探索作品
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-background/20 text-background hover:bg-background/10 bg-transparent"
            >
              <Link href="/contact">聯繫我們</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
