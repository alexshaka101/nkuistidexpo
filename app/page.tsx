import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Sparkles, Users, BookOpen, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative aspect-[9/16] md:aspect-video overflow-hidden flex items-center justify-center bg-[#C2000B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-700 rounded-full text-sm font-medium text-white">
                <Sparkles className="h-4 w-4 text-accent" />
                Industrial Design Exhibition 2026
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-balance text-white" style={{ fontFamily: 'FangZhengYouTi, sans-serif' }}>異構同形</h1>

            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto text-balance">
              形隨本質，意生異構
            </p>

            <p className="text-base md:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              邀請您走進展場，一起感受並思考設計的成長旅程
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/zones">
                  開始探索
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-neutral-500 text-white bg-input/30 hover:bg-neutral-700 hover:text-white">
                <Link href="/about">了解展覽資訊</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-screen">
      {/* Exhibition Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Side - Date, Time & Admission */}
            <div className="lg:w-1/2 space-y-10">
              {/* Date */}
              <div className="flex flex-wrap items-end gap-2 md:gap-4">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">2026.06.23</div>
                <div className="flex items-center gap-1 md:gap-2 pb-1">
                  <span className="text-sm md:text-base text-muted-foreground">週二</span>
                  <span className="text-xl md:text-2xl text-muted-foreground">——</span>
                  <span className="text-sm md:text-base text-muted-foreground">週四</span>
                </div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">26</div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-3 md:gap-6">
                {/* 09:00 (無標籤) */}
                <div className="flex flex-col items-center">
                  <span className="text-2xl md:text-3xl lg:text-4xl font-bold whitespace-nowrap">09:00</span>
                </div>
                
                <span className="text-xl md:text-2xl text-muted-foreground pt-1">——</span>
                
                {/* 13:00 (週日) */}
                <div className="flex flex-col items-center gap-2">
                  <span className="text-2xl md:text-3xl lg:text-4xl font-bold whitespace-nowrap">13:00</span>
                  <span className="text-xs md:text-sm text-muted-foreground">週二</span>
                </div>
                
                <span className="text-xl md:text-2xl text-muted-foreground pt-1">——</span>
                
                {/* 17:00 (週五、週六) */}
                <div className="flex flex-col items-center gap-2">
                  <span className="text-2xl md:text-3xl lg:text-4xl font-bold whitespace-nowrap">17:00</span>
                  <span className="text-xs md:text-sm text-muted-foreground whitespace-nowrap">週三、週四</span>
                </div>
              </div>

              {/* Free Admission */}
              <div>
                <div className="text-xl md:text-2xl font-bold text-[#C4A35A] mb-2">免費入場</div>
                <p className="text-sm text-[#C4A35A]">各場館將於閉館前30分鐘停止入場，實際時間請依現場公告為準</p>
              </div>
            </div>

            {/* Right Side - Grade Sections */}
            <div className="lg:w-1/2 space-y-8">
              {/* 大一 */}
              <div>
                <h3 className="text-lg font-bold mb-2">一年級</h3>
                <p className="text-sm text-muted-foreground">基礎造型與感知訓練</p>
              </div>

              {/* 大二 */}
              <div>
                <h3 className="text-lg font-bold mb-2">二年級</h3>
                <p className="text-sm text-muted-foreground">造型與使用之間的探索</p>
              </div>

              {/* 大三 */}
              <div>
                <h3 className="text-lg font-bold mb-2">三年級</h3>
                <p className="text-sm text-muted-foreground">以設計回應世界議題</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">News</h2>
              <p className="text-muted-foreground">最新消息</p>
            </div>
            <Link href="/news" className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors group">
              More
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* News Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* News Card 1 */}
            <Link href="/news/1" className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-muted rounded-lg mb-3 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-accent/5 group-hover:bg-accent/10 transition-colors">
                  <span className="text-4xl font-bold text-accent/20">01</span>
                </div>
              </div>
              <h3 className="text-sm font-medium mb-2 line-clamp-2 group-hover:text-accent transition-colors">2026期末設計展正式開幕，邀請您一同參與設計盛會...</h3>
              <p className="text-xs text-muted-foreground">2026-12-05</p>
            </Link>

            {/* News Card 2 */}
            <Link href="/news/2" className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-muted rounded-lg mb-3 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-accent/5 group-hover:bg-accent/10 transition-colors">
                  <span className="text-4xl font-bold text-accent/20">02</span>
                </div>
              </div>
              <h3 className="text-sm font-medium mb-2 line-clamp-2 group-hover:text-accent transition-colors">展場導覽時間表公布，專業導覽帶你深入了解作品...</h3>
              <p className="text-xs text-muted-foreground">2026-11-28</p>
            </Link>

            {/* News Card 3 */}
            <Link href="/news/3" className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-muted rounded-lg mb-3 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-accent/5 group-hover:bg-accent/10 transition-colors">
                  <span className="text-4xl font-bold text-accent/20">03</span>
                </div>
              </div>
              <h3 className="text-sm font-medium mb-2 line-clamp-2 group-hover:text-accent transition-colors">學生設計作品入選獲獎！恭喜優秀設計獲得肯定...</h3>
              <p className="text-xs text-muted-foreground">2026-11-20</p>
            </Link>

            {/* News Card 4 */}
            <Link href="/news/4" className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-muted rounded-lg mb-3 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-accent/5 group-hover:bg-accent/10 transition-colors">
                  <span className="text-4xl font-bold text-accent/20">04</span>
                </div>
              </div>
              <h3 className="text-sm font-medium mb-2 line-clamp-2 group-hover:text-accent transition-colors">互動體驗區全新升級，更多參與式設計活動等你來...</h3>
              <p className="text-xs text-muted-foreground">2026-11-15</p>
            </Link>

            {/* News Card 5 */}
            <Link href="/news/5" className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-muted rounded-lg mb-3 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-accent/5 group-hover:bg-accent/10 transition-colors">
                  <span className="text-4xl font-bold text-accent/20">05</span>
                </div>
              </div>
              <h3 className="text-sm font-medium mb-2 line-clamp-2 group-hover:text-accent transition-colors">設計工作坊報名開始，與業界設計師面對面交流...</h3>
              <p className="text-xs text-muted-foreground">2026-11-10</p>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
      </div>
    </>
  )
}
